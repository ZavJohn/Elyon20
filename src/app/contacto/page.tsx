import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { InnerPageHero } from "@/components/layout/InnerPageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/data/site";
import "./contacto.css";

export const metadata: Metadata = {
  title: "Contacto | Elyon Devs",
  description: "Hablemos de tu proyecto. Contacta a Elyon Devs para software a medida, páginas web, diseño, automatización, marketing y servicios digitales.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <div className="ct-page">
      <InnerPageHero
        eyebrow="HABLEMOS DE TU PROYECTO"
        title="Contacto"
        description="¿Tienes una idea, un proceso por mejorar o un proyecto que quieres poner en marcha? Estamos listos para escucharte."
      />
      <section className="section ct-main" aria-labelledby="ct-main-title">
        <div className="container-xxl">
          <div className="row g-4 g-xl-5">
            <div className="col-lg-5">
              <SectionLabel>Estamos para ayudarte</SectionLabel>
              <h2 className="section-title" id="ct-main-title">Tu siguiente idea<br /><span className="text-elyon">empieza hablando.</span></h2>
              <p className="ct-lead">En Elyon Devs queremos entender lo que necesita tu negocio. Cuéntanos qué buscas desarrollar, automatizar o comunicar y encontraremos juntos el siguiente paso.</p>
              <div className="ct-contact-list">
                <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer"><span className="ct-contact-list__icon"><MessageCircle size={26} aria-hidden="true" /></span><span><small>Respuesta directa</small><strong>Escríbenos por WhatsApp</strong></span><ArrowUpRight size={21} aria-hidden="true" /></a>
                <a href={`mailto:${site.email}`}><span className="ct-contact-list__icon"><Mail size={26} aria-hidden="true" /></span><span><small>Correo electrónico</small><strong>{site.email}</strong></span><ArrowUpRight size={21} aria-hidden="true" /></a>
                <a href={site.phoneHref}><span className="ct-contact-list__icon"><Phone size={26} aria-hidden="true" /></span><span><small>Llámanos</small><strong>{site.phone}</strong></span><ArrowUpRight size={21} aria-hidden="true" /></a>
              </div>
              <div className="ct-location"><MapPin size={20} aria-hidden="true" /><span>Trabajamos con empresas en todo México.</span></div>
            </div>
            <div className="col-lg-7">
              <div className="ct-panel">
                <p className="ct-panel__eyebrow">/ CUÉNTANOS SOBRE TU NEGOCIO</p>
                <h3>¿Qué podemos construir juntos?</h3>
                <p className="ct-panel__intro">Comparte lo que necesitas. Nuestro equipo revisará tu mensaje y se pondrá en contacto contigo.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA general al final desde RootLayout. */}
    </div>
  );
}
