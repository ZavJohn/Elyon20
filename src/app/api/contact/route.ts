import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  fullName?: unknown;
  email?: unknown;
  company?: unknown;
  service?: unknown;
  message?: unknown;
  privacyAccepted?: unknown;
  website?: unknown;
  recaptchaToken?: unknown;
};

type RecaptchaVerification = {
  success?: boolean;
  hostname?: string;
  "error-codes"?: string[];
};

const allowedServices = new Set([
  "Desarrollo de software", "Página web o tienda en línea", "Automatización e IA",
  "Diseño gráfico y branding", "Marketing digital", "Podcast o transmisión en vivo",
  "BOCCA Agency", "CONTPAQi", "Otro proyecto",
]);

const errorResponse = (message: string, status: number) => NextResponse.json({ message }, { status });
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char] || char);

export async function POST(request: NextRequest) {
  try {
    if (Number(request.headers.get("content-length") || 0) > 24000) return errorResponse("La solicitud supera el tamaño permitido.", 413);
    const payload = (await request.json()) as ContactPayload;
    if (typeof payload !== "object" || !payload) return errorResponse("Solicitud inválida.", 400);

    // Campo trampa: descartar solicitudes automatizadas sin enviar correo.
    if (payload.website) return NextResponse.json({ message: "Solicitud recibida." });

    const fullName = typeof payload.fullName === "string" ? payload.fullName.trim() : "";
    const email = typeof payload.email === "string" ? payload.email.trim() : "";
    const company = typeof payload.company === "string" ? payload.company.trim() : "";
    const service = typeof payload.service === "string" ? payload.service.trim() : "";
    const message = typeof payload.message === "string" ? payload.message.trim() : "";
    const token = typeof payload.recaptchaToken === "string" ? payload.recaptchaToken.trim() : "";

    if (!fullName || fullName.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || company.length > 120 || !allowedServices.has(service) || message.length < 15 || message.length > 4000 || payload.privacyAccepted !== true || !token || token.length > 4000) {
      return errorResponse("Revisa los campos obligatorios y vuelve a intentarlo.", 400);
    }

    const secret = process.env.RECAPTCHA_SECRET_KEY;
    const resendKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL || "contacto@elyondevs.com";
    if (!secret || !resendKey || !from) {
      return errorResponse("El formulario está pendiente de configuración. Por favor, contáctanos por WhatsApp.", 503);
    }

    const check = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
    if (!check.ok) return errorResponse("No se pudo verificar reCAPTCHA. Inténtalo más tarde.", 502);
    const verified = (await check.json()) as RecaptchaVerification;
    const allowedHosts = (process.env.RECAPTCHA_ALLOWED_HOSTNAMES || "elyondevs.com,www.elyondevs.com,localhost").split(",").map((h) => h.trim().toLowerCase());
    if (!verified.success || !verified.hostname || !allowedHosts.includes(verified.hostname.toLowerCase())) {
      return errorResponse("La verificación de seguridad no fue válida. Vuelve a intentarlo.", 400);
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Contacto web Elyon Devs · ${service}`,
        html: `<h2>Nuevo contacto desde el sitio Elyon Devs</h2><p><b>Nombre:</b> ${escapeHtml(fullName)}</p><p><b>Correo:</b> ${escapeHtml(email)}</p><p><b>Empresa:</b> ${escapeHtml(company || "No especificada")}</p><p><b>Servicio:</b> ${escapeHtml(service)}</p><p><b>Mensaje:</b></p><p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
    if (!emailResponse.ok) {
      console.error("Fallo del proveedor de correo", emailResponse.status);
      return errorResponse("No pudimos enviar el mensaje. Escríbenos directamente por WhatsApp.", 502);
    }
    return NextResponse.json({ message: "Mensaje enviado correctamente." });
  } catch (error) {
    console.error("Error procesando contacto", error instanceof Error ? error.name : "desconocido");
    return errorResponse("No pudimos procesar tu solicitud. Por favor, intenta de nuevo.", 500);
  }
}
