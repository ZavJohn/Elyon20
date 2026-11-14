"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Script from "next/script";
import { ArrowUpRight, LoaderCircle, Send } from "lucide-react";
import { site } from "@/data/site";

/** Esta implementación utiliza reCAPTCHA v2 checkbox. Verificar versión de la clave. */
const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LfiYxosAAAAACBsvaGap5aun2hW3kWe3Galrwu5";

type Recaptcha = {
  ready?: (callback: () => void) => void;
  render: (container: HTMLElement, options: {
    sitekey: string;
    theme: "dark";
    callback: (token: string) => void;
    "expired-callback": () => void;
    "error-callback": () => void;
  }) => number;
  reset: (widgetId?: number) => void;
};

declare global { interface Window { grecaptcha?: Recaptcha } }

const serviceOptions = [
  "Desarrollo de software", "Página web o tienda en línea", "Automatización e IA",
  "Diseño gráfico y branding", "Marketing digital", "Podcast o transmisión en vivo",
  "BOCCA Agency", "CONTPAQi", "Otro proyecto",
];

export function ContactForm() {
  const captchaContainer = useRef<HTMLDivElement>(null);
  const captchaWidget = useRef<number | null>(null);
  const [captchaToken, setCaptchaToken] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // La API puede aparecer en window antes de que su método render esté listo.
    // No dependemos únicamente del evento onReady de next/script.
    let active = true;
    let waitingForReady = false;
    let checks = 0;
    let timer: number | undefined;

    const stop = () => {
      if (timer !== undefined) window.clearInterval(timer);
    };

    const renderCaptcha = () => {
      if (!active || !captchaContainer.current || captchaWidget.current !== null) return;
      const api = window.grecaptcha;
      if (!api || typeof api.render !== "function") return;
      try {
        captchaWidget.current = api.render(captchaContainer.current, {
          sitekey: SITE_KEY,
          theme: "dark",
          callback: (token) => setCaptchaToken(token),
          "expired-callback": () => setCaptchaToken(""),
          "error-callback": () => {
            setCaptchaToken("");
            setMessage("No se pudo verificar reCAPTCHA. Inténtalo de nuevo.");
          },
        });
        stop();
      } catch (error) {
        console.error("Error al renderizar reCAPTCHA:", error);
        setMessage("No se pudo mostrar reCAPTCHA. Recarga la página o escríbenos por WhatsApp.");
        stop();
      }
    };

    const checkRecaptcha = () => {
      if (!active || captchaWidget.current !== null) { stop(); return; }
      const api = window.grecaptcha;
      if (api && typeof api.render === "function" && !waitingForReady) {
        waitingForReady = true;
        if (typeof api.ready === "function") api.ready(renderCaptcha);
        else renderCaptcha();
      }
      checks += 1;
      if (checks >= 60 && captchaWidget.current === null) {
        stop();
        setMessage("reCAPTCHA tardó demasiado en cargar. Recarga la página o contáctanos por WhatsApp.");
      }
    };

    timer = window.setInterval(checkRecaptcha, 250);
    checkRecaptcha();
    return () => { active = false; stop(); };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setMessage("");
    if (!captchaToken) { setStatus("error"); setMessage("Completa la verificación de reCAPTCHA antes de enviar."); return; }

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      fullName: String(data.get("fullName") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      service: String(data.get("service") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      privacyAccepted: data.get("privacyAccepted") === "on",
      website: String(data.get("website") ?? ""),
      recaptchaToken: captchaToken,
    };
    if (!payload.privacyAccepted) { setStatus("error"); setMessage("Debes aceptar el aviso de privacidad."); return; }
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result: { message?: string } = await response.json();
      if (!response.ok) throw new Error(result.message || "No pudimos enviar el mensaje.");
      form.reset();
      setCaptchaToken("");
      if (captchaWidget.current !== null) window.grecaptcha?.reset(captchaWidget.current);
      setStatus("sent");
      setMessage("¡Gracias! Tu mensaje se envió correctamente. Nos pondremos en contacto contigo.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Ocurrió un error. Intenta nuevamente o escríbenos por WhatsApp.");
      setCaptchaToken("");
      if (captchaWidget.current !== null) window.grecaptcha?.reset(captchaWidget.current);
    }
  }

  return (
    <form className="ct-form" onSubmit={handleSubmit}>
      <div className="row g-3 g-md-4">
        <div className="col-md-6"><label htmlFor="ct-name">Nombre completo <span>*</span></label><input required maxLength={100} id="ct-name" name="fullName" type="text" autoComplete="name" placeholder="¿Cómo te llamas?" /></div>
        <div className="col-md-6"><label htmlFor="ct-email">Correo electrónico <span>*</span></label><input required maxLength={254} id="ct-email" name="email" type="email" autoComplete="email" placeholder="tu@empresa.com" /></div>
        <div className="col-md-6"><label htmlFor="ct-company">Empresa <small>(opcional)</small></label><input id="ct-company" name="company" maxLength={120} type="text" autoComplete="organization" placeholder="Nombre de tu empresa" /></div>
        <div className="col-md-6"><label htmlFor="ct-service">¿En qué podemos ayudarte? <span>*</span></label><select required name="service" id="ct-service" defaultValue=""><option value="" disabled>Selecciona un servicio</option>{serviceOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></div>
        <div className="col-12"><label htmlFor="ct-message">Cuéntanos de tu proyecto <span>*</span></label><textarea required minLength={15} maxLength={4000} id="ct-message" name="message" rows={5} placeholder="¿Qué necesitas resolver, construir o mejorar?" /></div>
      </div>
      <div className="ct-honeypot" aria-hidden="true"><label htmlFor="ct-website">Sitio web (dejar vacío)</label><input id="ct-website" name="website" type="text" autoComplete="off" tabIndex={-1} /></div>
      <p className="ct-privacy-summary">Elyon Devs recaba tu nombre, correo y los datos que compartas para responderte, preparar propuestas y dar seguimiento a tu solicitud. Puedes limitar el uso de tus datos o ejercer tus derechos escribiendo a {site.email}. Consulta el <a href={site.privacyUrl}>aviso integral de privacidad</a>.</p>
      <label className="ct-consent"><input required type="checkbox" name="privacyAccepted" /> <span>He leído el <a href={site.privacyUrl}>aviso de privacidad</a>. <strong>*</strong></span></label>
      <div className="ct-captcha"><div ref={captchaContainer} /><Script src="https://www.google.com/recaptcha/api.js?render=explicit" strategy="afterInteractive" onError={() => setMessage("No pudimos cargar reCAPTCHA. Inténtalo nuevamente.")} /></div>
      <div className="ct-actions">
        <button type="submit" className="button button--green button--large" disabled={status === "sending"}>
          {status === "sending" ? <>Enviando <LoaderCircle size={19} className="ct-spin" aria-hidden="true" /></> : <>Enviar mensaje <Send size={19} aria-hidden="true" /></>}
        </button>
        <span>¿Prefieres hablar directamente? <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={16} aria-hidden="true" /></a></span>
      </div>
      {message && <p className={`ct-feedback ct-feedback--${status}`} role="status" aria-live="polite">{message}</p>}
      <p className="ct-form__note">* Campos obligatorios. Si aún no está configurado el correo de salida en el servidor, el formulario no enviará mensajes.</p>
    </form>
  );
}
