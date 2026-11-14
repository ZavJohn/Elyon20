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

// Limitación básica por proceso: Hostinger puede ejecutar varias instancias.
// Para límites globales resistentes a reinicios, configurar WAF o almacenamiento compartido.
const MAX_BODY_BYTES = 24_000;
const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 10;
const attempts = new Map<string, { count: number; resetAt: number }>();

function retryAfterSeconds(request: NextRequest): number {
  // Los encabezados IP solo son fiables si el proxy de Hostinger los establece o limpia.
  const ip = (request.headers.get("x-real-ip") || request.headers.get("x-forwarded-for")?.split(",")[0])?.trim();
  if (!ip) return 0; // Sin IP fiable, dejamos la limitación al proxy/WAF.

  const now = Date.now();
  if (attempts.size > 3_000) {
    for (const [key, entry] of attempts) if (entry.resetAt <= now) attempts.delete(key);
    if (attempts.size > 3_000) attempts.clear(); // Evita crecimiento ilimitado de memoria.
  }

  const key = ip.slice(0, 128);
  const entry = attempts.get(key);
  if (!entry || entry.resetAt <= now) {
    attempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return 0;
  }
  if (entry.count >= MAX_ATTEMPTS) return Math.ceil((entry.resetAt - now) / 1_000);
  entry.count += 1;
  return 0;
}

async function readLimitedJson(request: NextRequest): Promise<ContactPayload | null> {
  const reader = request.body?.getReader();
  if (!reader) return null;
  let size = 0;
  const chunks: Uint8Array[] = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > MAX_BODY_BYTES) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }
  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf8")) as ContactPayload;
  } catch {
    return null;
  }
}

const errorResponse = (message: string, status: number) => NextResponse.json({ message }, { status, headers: { "Cache-Control": "no-store" } });
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char] || char);

export async function POST(request: NextRequest) {
  try {
    // Los navegadores legítimos envían Origin al hacer POST desde nuestro sitio.
    const origin = request.headers.get("origin");
    const allowedOrigins = new Set([
      "https://elyondevs.com", "https://www.elyondevs.com",
      "http://localhost:3000", "http://127.0.0.1:3000",
      ...(process.env.CONTACT_ALLOWED_ORIGINS || "").split(",").map((v) => v.trim()).filter(Boolean),
    ]);
    if (origin && !allowedOrigins.has(origin)) return errorResponse("Origen de solicitud no permitido.", 403);

    if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
      return errorResponse("Formato de solicitud no admitido.", 415);
    }
    const declaredLength = Number(request.headers.get("content-length") || 0);
    if (declaredLength > MAX_BODY_BYTES) return errorResponse("La solicitud supera el tamaño permitido.", 413);

    const retryAfter = retryAfterSeconds(request);
    if (retryAfter > 0) {
      return NextResponse.json(
        { message: "Demasiados intentos. Espera unos minutos o escríbenos por WhatsApp." },
        { status: 429, headers: { "Retry-After": String(retryAfter), "Cache-Control": "no-store" } },
      );
    }

    const payload = await readLimitedJson(request);
    if (typeof payload !== "object" || !payload || Array.isArray(payload)) {
      return errorResponse("Solicitud inválida o demasiado grande.", 400);
    }

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
