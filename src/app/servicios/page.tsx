import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Bot, Code2, Globe2, Megaphone,
  Palette, Smartphone, Podcast, Radio, MessagesSquare, CalendarCheck2,
  ChartColumnIncreasing, Settings2, CircleCheck, FileText, Handshake,
  MonitorSmartphone, Wrench, Rocket,
} from "lucide-react";
import { InnerPageHero } from "@/components/layout/InnerPageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services, type ServiceId } from "@/data/services";
import { site } from "@/data/site";
import "./servicios.css";

export const metadata: Metadata = {
  title: "Servicios | Desarrollo, branding y automatización | Elyon Devs",
  description: "Diseño web, software a medida, branding, marketing, apps, podcast, streaming, IA, BOCCA Agency y soluciones empresariales CONTPAQi en México.",
  alternates: { canonical: "/servicios" },
};

const serviceIcons: Record<ServiceId, typeof Globe2> = {
  web: Globe2,
  software: Code2,
  branding: Palette,
  marketing: Megaphone,
  apps: Smartphone,
  automation: Bot,
  podcast: Podcast,
  streaming: Radio,
};

const process = [
  { title: "Escuchamos tu idea", description: "Entendemos tu proyecto, necesidades y objetivos." },
  { title: "Analizamos", description: "Definimos alcance, funcionalidades, tiempos y prioridades." },
  { title: "Te proponemos", description: "Presentamos una cotización y una estrategia de trabajo clara." },
  { title: "Diseñamos", description: "Preparamos la experiencia visual y el prototipo de la solución." },
  { title: "Desarrollamos", description: "Construimos e implementamos con enfoque en rendimiento y calidad." },
  { title: "Probamos", description: "Revisamos funcionamiento, integramos observaciones y ajustamos." },
  { title: "Entregamos", description: "Ponemos en marcha el proyecto y compartimos sus recursos de uso." },
  { title: "Acompañamos", description: "Brindamos seguimiento y soporte para evolucionar tu solución." },
];

export default function ServiciosPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="SOLUCIONES TECNOLÓGICAS Y CREATIVAS"
        title="Nuestros servicios"
        description="De una idea a una solución integral: unimos diseño, desarrollo y tecnología para que tu negocio avance."
      />
      <div className="sv-page">
        <section className="section sv-solutions" aria-labelledby="sv-solutions-title">
          <div className="container-xxl">
            <div className="row gy-4 align-items-end sv-heading">
              <div className="col-lg-8">
                <SectionLabel>LO QUE HACEMOS</SectionLabel>
                <h2 className="section-title" id="sv-solutions-title">Ocho especialidades.<br /><span className="text-elyon">Una visión integral.</span></h2>
              </div>
              <div className="col-lg-4">
                <p className="section-intro">Servicios que pueden funcionar individualmente o combinarse para construir una solución a la medida de tu empresa.</p>
              </div>
            </div>
            <div className="row g-3 g-xl-4 sv-cards">
              {services.map((service, index) => {
                const Icon = serviceIcons[service.id];
                return (
                  <div className="col-md-6 col-xl-3" key={service.id}>
                    <article className="sv-card h-100">
                      <div className="sv-card__top"><Icon size={37} strokeWidth={1.45} aria-hidden="true" /><span>{String(index + 1).padStart(2, "0")}</span></div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <div className="sv-card__tags">{service.specialties.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    </article>
                  </div>
                );
              })}
            </div>
            <div className="sv-bottom-action">
              <a className="button button--outline" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">Cuéntanos qué necesita tu empresa <ArrowUpRight size={19} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="section sv-bocca" aria-labelledby="sv-bocca-title">
          <div className="container-xxl">
            <div className="sv-bocca__panel row g-0 align-items-stretch">
              <div className="col-lg-6 sv-bocca__copy">
                <SectionLabel>AUTOMATIZACIÓN DE ATENCIÓN · BOCCA AGENCY</SectionLabel>
                <h2 className="sv-highlight-title" id="sv-bocca-title">Tu negocio atiende.<br /><span>BOCCA automatiza.</span></h2>
                <p>Una solución inteligente que conecta WhatsApp, agenda, CRM y seguimiento para ayudarte a atender consultas, coordinar citas y gestionar las conversaciones con tus clientes.</p>
                <div className="sv-bocca__chips"><span>WhatsApp + IA</span><span>Agenda inteligente</span><span>CRM y métricas</span><span>Anticipos</span></div>
                <Link className="button button--green" href={site.boccaUrl}>Conoce BOCCA Agency <ArrowUpRight size={19} aria-hidden="true" /></Link>
              </div>
              <div className="col-lg-6 sv-bocca__visual" aria-label="Ilustración de conexión entre las herramientas de BOCCA">
                <div className="sv-bocca__orbit sv-bocca__orbit--one" aria-hidden="true" />
                <div className="sv-bocca__orbit sv-bocca__orbit--two" aria-hidden="true" />
                <div className="sv-bocca__core"><MessagesSquare size={50} strokeWidth={1.25} aria-hidden="true" /><strong>BOCCA</strong><small>ATENCIÓN INTELIGENTE</small></div>
                <span className="sv-bocca__node sv-bocca__node--one"><Bot size={17} aria-hidden="true" /> IA</span>
                <span className="sv-bocca__node sv-bocca__node--two"><CalendarCheck2 size={17} aria-hidden="true" /> AGENDA</span>
                <span className="sv-bocca__node sv-bocca__node--three"><ChartColumnIncreasing size={17} aria-hidden="true" /> CRM</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section sv-contpaqi" aria-labelledby="sv-contpaqi-title">
          <div className="container-xxl">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <SectionLabel>ALIANZAS ESTRATÉGICAS</SectionLabel>
                <h2 className="sv-highlight-title" id="sv-contpaqi-title">Somos partners de <span>CONTPAQi®.</span></h2>
                <p className="sv-contpaqi__lead">Complementamos nuestras soluciones a medida con herramientas empresariales para apoyar la administración, la contabilidad y la operación de tu negocio.</p>
                <a className="button button--outline" href={`${site.whatsappUrl}?text=${encodeURIComponent("Hola, quiero conocer las soluciones de CONTPAQi que ofrece Elyon Devs.")}`} target="_blank" rel="noopener noreferrer">Solicitar información sobre CONTPAQi <ArrowUpRight size={19} aria-hidden="true" /></a>
              </div>
              <div className="col-lg-6">
                <div className="sv-contpaqi__panel">
                  <div className="sv-contpaqi__wordmark">CONTPAQi<span>®</span></div>
                  <p>Soluciones para la gestión de tu empresa.</p>
                  <div className="row g-3">
                    {[
                      { title: "Facturación", Icon: FileText },
                      { title: "Contabilidad", Icon: CircleCheck },
                      { title: "Nómina", Icon: Handshake },
                      { title: "Gestión comercial", Icon: MonitorSmartphone },
                      { title: "Integraciones", Icon: Settings2 },
                      { title: "Asesoría", Icon: Wrench },
                    ].map(({ title, Icon }) => <div className="col-6" key={title}><div className="sv-contpaqi__item"><Icon size={20} aria-hidden="true" />{title}</div></div>)}
                  </div>
                  <span className="sv-contpaqi__note">CONTPAQi® es una marca registrada de sus respectivos titulares.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section sv-process" aria-labelledby="sv-process-title">
          <div className="container-xxl">
            <div className="row gy-4 align-items-end sv-heading">
              <div className="col-lg-8"><SectionLabel>CÓMO TRABAJAMOS</SectionLabel><h2 className="section-title" id="sv-process-title">De la idea al resultado.<br /><span className="text-elyon">Con un proceso claro.</span></h2></div>
              <div className="col-lg-4"><p className="section-intro">Una metodología ordenada, transparente y orientada a resultados, desde el primer contacto hasta el seguimiento.</p></div>
            </div>
            <div className="row g-3 g-xl-4">
              {process.map((step, index) => (
                <div className="col-md-6 col-xl-3" key={step.title}>
                  <article className="sv-process__card h-100">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    {index === process.length - 1 ? <Rocket size={24} aria-hidden="true" /> : <ArrowRight size={24} aria-hidden="true" />}
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
