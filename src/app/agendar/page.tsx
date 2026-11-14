import type { Metadata } from "next";
import { ArrowUpRight, CalendarDays, Clock3, MessagesSquare } from "lucide-react";
import { InnerPageHero } from "@/components/layout/InnerPageHero";
import { site } from "@/data/site";
import "./agendar.css";

export const metadata: Metadata = {
  title: "Agenda una asesoría | Elyon Devs",
  description: "Reserva una conversación con Elyon Devs para explorar ideas de desarrollo web, software, diseño y automatización.",
  alternates: { canonical: "/agendar" },
};

export default function AgendarPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="HABLEMOS DE TU PROYECTO"
        title="Agenda una asesoría"
        description="Selecciona un horario disponible y conversemos sobre los retos y oportunidades de tu negocio."
      />
      <section className="booking-page section" aria-labelledby="booking-heading">
        <div className="container-xxl">
          <div className="row g-4 g-xl-5 align-items-start">
            <div className="col-lg-4">
              <p className="booking-page__eyebrow">PRIMER CONTACTO</p>
              <h2 className="booking-page__title" id="booking-heading">Las grandes ideas comienzan con una conversación<span>.</span></h2>
              <p className="booking-page__description">Queremos conocer tu idea, entender tus necesidades y ayudarte a identificar una solución tecnológica a la medida.</p>
              <div className="booking-page__facts">
                <div><CalendarDays size={23} aria-hidden="true" /><span>Elige una fecha y horario disponible.</span></div>
                <div><MessagesSquare size={23} aria-hidden="true" /><span>Cuéntanos qué necesitas y qué buscas lograr.</span></div>
                <div><Clock3 size={23} aria-hidden="true" /><span>Recibirás la confirmación y los detalles de tu cita en Calendly.</span></div>
              </div>
              <a className="booking-page__whatsapp" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                ¿Prefieres escribirnos por WhatsApp? <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="col-lg-8">
              <div className="booking-page__embed-shell">
                <div className="booking-page__embed-top"><span className="booking-page__live-dot" /> DISPONIBILIDAD EN TIEMPO REAL <span>CALENDLY × ELYON DEVS</span></div>
                <iframe
                  className="booking-page__iframe"
                  title="Reservar asesoría con Elyon Devs en Calendly"
                  src={site.calendlyUrl}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
                <div className="booking-page__embed-bottom">
                  <span>¿No aparece el calendario?</span>
                  <a href={site.calendlyUrl} target="_blank" rel="noopener noreferrer">Abrir Calendly en otra pestaña <ArrowUpRight size={17} aria-hidden="true" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
