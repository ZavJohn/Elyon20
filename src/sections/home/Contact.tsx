import { ArrowUpRight, Asterisk } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section className="contact-section" id="contacto" aria-labelledby="contact-title">
      <div className="contact-section__glow" aria-hidden="true" />
      <div className="container-xxl contact-content">
        <SectionLabel>El siguiente paso comienza aquí</SectionLabel>
        <div className="row gy-4 align-items-end">
          <div className="col-lg-9"><h2 id="contact-title" className="contact-title">¿Tienes una idea?<br /><span>Hagámosla realidad.</span></h2></div>
          <div className="col-lg-3 d-lg-flex justify-content-lg-end"><Asterisk className="contact-asterisk" size={115} strokeWidth={0.7} aria-hidden="true" /></div>
        </div>
        <div className="contact-bottom d-flex flex-wrap gap-4 justify-content-between align-items-center">
          <p>Cuéntanos tu reto. Diseñemos juntos la solución que tu negocio necesita.</p>
          <a className="button button--green button--large" href={site.bookingUrl} target="_blank" rel="noopener noreferrer">Agenda una asesoría <ArrowUpRight size={20} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
