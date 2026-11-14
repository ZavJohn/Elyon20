import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight, Bot, CalendarCheck2, ChartColumnIncreasing,
  CheckCheck, CreditCard, Megaphone, MessageCircleMore,
  MessagesSquare, UsersRound, Sparkles,
  CalendarClock, ClipboardCheck, HeartHandshake,
} from "lucide-react";
import { InnerPageHero } from "@/components/layout/InnerPageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/data/site";
import "./bocca.css";

export const metadata: Metadata = {
  title: "BOCCA Agency | Automatización con WhatsApp e IA | Elyon Devs",
  description: "Conoce BOCCA Agency de Elyon Devs: automatización de atención por WhatsApp, agenda inteligente, CRM, campañas, anticipos y seguimiento.",
  alternates: { canonical: "/bocca" },
};

const features = [
  { title: "Conversaciones automatizadas", description: "Atiende consultas recurrentes y facilita respuestas a clientes a través de WhatsApp.", Icon: MessagesSquare },
  { title: "Agenda inteligente", description: "Ayuda a programar citas según disponibilidad y tiempos de cada servicio.", Icon: CalendarCheck2 },
  { title: "CRM de clientes", description: "Conserva información e historial para personalizar el seguimiento de cada conversación.", Icon: UsersRound },
  { title: "Métricas y resultados", description: "Visualiza conversaciones, citas y actividad de atención desde un panel de control.", Icon: ChartColumnIncreasing },
  { title: "Campañas por WhatsApp", description: "Apoya las comunicaciones con clientes mediante herramientas disponibles en la plataforma.", Icon: Megaphone },
  { title: "Anticipos y pagos", description: "Facilita solicitar anticipos y revisar comprobantes cuando una cita los requiere.", Icon: CreditCard },
];

const workflow = [
  { title: "Consulta", description: "El cliente inicia una conversación por WhatsApp.", Icon: MessageCircleMore },
  { title: "Agenda", description: "BOCCA ayuda a coordinar la cita y disponibilidad.", Icon: CalendarClock },
  { title: "Anticipo", description: "Solicita el anticipo o comprobante si aplica.", Icon: ClipboardCheck },
  { title: "Atención", description: "Automatiza tareas y comunicaciones del proceso.", Icon: Bot },
  { title: "Seguimiento", description: "Facilita continuar en contacto después del servicio.", Icon: HeartHandshake },
];

const industries = [
  "Clínicas dentales", "Clínicas estéticas", "Estudios de tatuajes", "Spas y bienestar",
  "Fisioterapia y rehabilitación", "Nutrición y coaching", "Psicología", "Fotografía",
  "Barberías", "Estudios de pilates y yoga", "Veterinarias", "Escuelas de idiomas",
];

const boccaWhatsApp = `${site.whatsappUrl}?text=${encodeURIComponent("Hola, quiero conocer BOCCA Agency y cómo puede ayudar a mi negocio.")}`;

export default function BoccaPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="BOCCA AGENCY · UNA SOLUCIÓN ELYON DEVS"
        title="BOCCA Agency"
        description="Automatización inteligente de ventas y atención por WhatsApp: conversa, agenda, cotiza y da seguimiento desde una experiencia más conectada."
      />
      <div className="bc-page">
        <section className="section bc-intro" aria-labelledby="bc-intro-heading">
          <div className="container-xxl">
            <div className="row gy-5 align-items-center">
              <div className="col-lg-6">
                <SectionLabel>¿QUÉ ES BOCCA?</SectionLabel>
                <h2 className="bc-title" id="bc-intro-heading">Tu negocio atiende.<br /><span>BOCCA automatiza.</span></h2>
                <p className="bc-lead">BOCCA integra WhatsApp, inteligencia artificial, agenda, CRM y herramientas de seguimiento para facilitar la gestión de clientes. Puede apoyar con consultas, cotizaciones, citas, anticipos y seguimiento sin que tu equipo deba hacerlo todo manualmente.</p>
                <a href={boccaWhatsApp} className="button button--green" target="_blank" rel="noopener noreferrer">Quiero conocer BOCCA <ArrowUpRight size={19} aria-hidden="true" /></a>
              </div>
              <div className="col-lg-6">
                <div className="bc-demo" aria-label="Representación ilustrativa del flujo de atención de BOCCA">
                  <div className="bc-demo__head"><div className="bc-demo__avatar"><Bot size={24} aria-hidden="true" /></div><div><strong>BOCCA · Asistente</strong><span>Atención automatizada</span></div><span className="bc-demo__online" /></div>
                  <div className="bc-demo__messages">
                    <p className="bc-demo__message bc-demo__message--user">Hola, ¿puedo agendar una cita?</p>
                    <p className="bc-demo__message bc-demo__message--assistant">¡Claro! Puedo ayudarte a revisar la disponibilidad. ¿Qué servicio necesitas?</p>
                    <p className="bc-demo__message bc-demo__message--user">Me gustaría para el viernes.</p>
                    <p className="bc-demo__message bc-demo__message--assistant">Perfecto. Revisemos las opciones disponibles.</p>
                  </div>
                  <div className="bc-demo__footer"><CheckCheck size={17} aria-hidden="true" /> CONVERSACIÓN ILUSTRATIVA · NO ES UNA CAPTURA REAL</div>
                  <div className="bc-demo__badge"><Sparkles size={17} aria-hidden="true" /> WHATSAPP + IA</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bc-features" aria-labelledby="bc-features-heading">
          <div className="container-xxl">
            <div className="row gy-4 align-items-end bc-heading">
              <div className="col-lg-8"><SectionLabel>FUNCIONALIDADES</SectionLabel><h2 className="section-title" id="bc-features-heading">Más que responder mensajes.<br /><span className="text-elyon">Un flujo conectado.</span></h2></div>
              <div className="col-lg-4"><p className="section-intro">Herramientas diseñadas para mejorar la atención, organizar citas y dar continuidad a cada oportunidad.</p></div>
            </div>
            <div className="row g-3 g-lg-4">
              {features.map(({ title, description, Icon }, index) => (
                <div className="col-md-6 col-xl-4" key={title}>
                  <article className="bc-feature h-100"><div className="bc-feature__top"><Icon size={34} strokeWidth={1.5} aria-hidden="true" /><span>{String(index + 1).padStart(2, "0")}</span></div><h3>{title}</h3><p>{description}</p></article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bc-flow" aria-labelledby="bc-flow-heading">
          <div className="container-xxl">
            <SectionLabel>PROCESO</SectionLabel>
            <h2 className="section-title" id="bc-flow-heading">Del primer mensaje<br /><span className="text-elyon">al seguimiento.</span></h2>
            <div className="row g-3 g-lg-4 bc-flow__grid">
              {workflow.map(({ title, description, Icon }, index) => (
                <div className="col-md-6 col-xl" key={title}>
                  <article className="bc-flow__step h-100"><span>{String(index + 1).padStart(2, "0")}</span><Icon size={28} strokeWidth={1.5} aria-hidden="true" /><h3>{title}</h3><p>{description}</p></article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bc-industries" aria-labelledby="bc-industries-heading">
          <div className="container-xxl">
            <div className="row g-5 align-items-start">
              <div className="col-lg-5">
                <SectionLabel>NEGOCIOS QUE ATIENDE</SectionLabel>
                <h2 className="bc-title" id="bc-industries-heading">Tu atención puede ser <span>más inteligente.</span></h2>
                <p className="bc-lead">Una solución pensada para empresas que trabajan con clientes, citas y servicios. Cada flujo se configura según las necesidades del negocio.</p>
                <Link className="bc-back-link" href={site.servicesUrl}>Ver todas nuestras especialidades <ArrowUpRight size={18} aria-hidden="true" /></Link>
              </div>
              <div className="col-lg-7">
                <div className="bc-industries__grid">
                  {industries.map((industry, index) => <div key={industry}><span>{String(index + 1).padStart(2, "0")}</span>{industry}</div>)}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
