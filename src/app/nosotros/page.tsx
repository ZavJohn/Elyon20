import type { Metadata } from "next";
import {
  ArrowDownRight,
  ArrowUpRight,
  BadgeCheck,
  Compass,
  Handshake,
  HeartHandshake,
  Layers3,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/data/services";
import { site } from "@/data/site";
import "./nosotros.css";

export const metadata: Metadata = {
  title: "Nosotros | Historia, misión y valores de Elyon Devs",
  description:
    "Conoce la historia, misión y valores de Elyon Devs: tecnología, diseño y automatización creados con excelencia, integridad y propósito.",
  alternates: { canonical: "/nosotros" },
  openGraph: {
    title: "Nosotros | Elyon Devs",
    description:
      "Diseñamos soluciones, desarrollamos confianza. Conoce el propósito y los valores que impulsan a Elyon Devs.",
    url: "/nosotros",
  },
};

const milestones = [
  {
    number: "01",
    moment: "Durante la pandemia",
    title: "Una idea empieza a tomar forma.",
    description:
      "Elyon Devs nace con una intención clara: utilizar la tecnología para servir, optimizar procesos y aportar valor real a los negocios.",
  },
  {
    number: "02",
    moment: "Tiempo de preparación",
    title: "Una pausa para aprender y crecer.",
    description:
      "Tras aquella etapa, el proyecto entra en una pausa de preparación, experiencia profesional y reflexión. La visión permanece viva.",
  },
  {
    number: "03",
    moment: "Inicios de 2025",
    title: "El propósito se convierte en proyecto.",
    description:
      "Con una confirmación de Dios, retomamos el rumbo y emprendemos formalmente, poniendo años de experiencia en programación y diseño al servicio de empresas, instituciones y emprendedores.",
  },
];

const values = [
  {
    number: "01",
    title: "Excelencia",
    description: "Cuidamos la calidad y cada detalle para ofrecer un trabajo que supere expectativas.",
    Icon: Sparkles,
  },
  {
    number: "02",
    title: "Servicio",
    description: "Escuchamos, acompañamos y ponemos a las personas en el centro de cada proyecto.",
    Icon: HeartHandshake,
  },
  {
    number: "03",
    title: "Integridad",
    description: "Actuamos con honestidad, ética y transparencia en nuestras decisiones y relaciones.",
    Icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Fe y propósito",
    description: "Reconocemos a Dios como guía y trabajamos conforme a principios que honran Su dirección.",
    Icon: Compass,
  },
  {
    number: "05",
    title: "Compromiso",
    description: "Asumimos cada proyecto con responsabilidad, constancia y respeto por lo prometido.",
    Icon: BadgeCheck,
  },
  {
    number: "06",
    title: "Trabajo en equipo",
    description: "Creemos en la colaboración con clientes y aliados como camino al crecimiento compartido.",
    Icon: Users,
  },
];

const reasons = [
  {
    title: "Soluciones hechas a la medida",
    description: "Analizamos tu negocio y diseñamos herramientas que responden a procesos reales, no a fórmulas genéricas.",
    Icon: Layers3,
  },
  {
    title: "Experiencia comprobada",
    description: "Reunimos experiencia en desarrollo, diseño y proyectos para organizaciones de los sectores público y privado.",
    Icon: BadgeCheck,
  },
  {
    title: "Enfoque en resultados",
    description: "Cada solución busca optimizar, automatizar o impulsar el crecimiento de una organización.",
    Icon: Target,
  },
  {
    title: "Acompañamiento cercano",
    description: "Escuchamos, explicamos y damos seguimiento, porque el proyecto no termina con la entrega.",
    Icon: Handshake,
  },
  {
    title: "Excelencia en el servicio",
    description: "Trabajamos con orden, profesionalismo y atención al detalle en cada etapa.",
    Icon: Sparkles,
  },
  {
    title: "Visión integral",
    description: "Conectamos software, web, diseño, automatización y estrategia digital para resolver de manera completa.",
    Icon: Workflow,
  },
];

export default function NosotrosPage() {
  return (
    <div className="who-page">
      <section className="who-hero" aria-labelledby="who-hero-title">
        <div className="who-hero__grid" aria-hidden="true" />
        <div className="who-hero__glow" aria-hidden="true" />
        <div className="container-xxl who-hero__inner">
          <div className="row align-items-center gy-5">
            <div className="col-lg-7">
              <SectionLabel>El origen de Elyon Devs</SectionLabel>
              <div className="who-hero__index">/ CONÓCENOS — TECNOLOGÍA CON PROPÓSITO</div>
              <h1 id="who-hero-title" className="who-hero__title">
                Creamos <span className="who-hero__title-outline">tecnología.</span>
                <br />Construimos <span className="who-hero__title-accent">confianza.</span>
              </h1>
              <p className="who-hero__lead">
                Detrás de cada solución hay personas, experiencia y una convicción: la tecnología debe
                simplificar la vida y generar valor real.
              </p>
              <a className="who-hero__scroll" href="#nuestra-historia">
                Descubre nuestra historia <ArrowDownRight size={22} strokeWidth={1.6} aria-hidden="true" />
              </a>
            </div>
            <div className="col-lg-5">
              <div className="who-hero__orb" aria-hidden="true">
                <span className="who-hero__orbit who-hero__orbit--outer" />
                <span className="who-hero__orbit who-hero__orbit--inner" />
                <span className="who-hero__particle who-hero__particle--one" />
                <span className="who-hero__particle who-hero__particle--two" />
                <span className="who-hero__particle who-hero__particle--three" />
                <span className="who-hero__orb-core"><span>ED</span></span>
                <span className="who-hero__orb-caption">IDEAS · PROPÓSITO · IMPACTO</span>
              </div>
            </div>
          </div>
          <div className="who-hero__bottom"><span>DISEÑAMOS SOLUCIONES, DESARROLLAMOS CONFIANZA.</span><span>01 / ELYON DEVS</span></div>
        </div>
      </section>

      <section className="section who-intro" id="que-hacemos" aria-labelledby="who-intro-title">
        <div className="container-xxl">
          <div className="row gy-4 gx-lg-5 align-items-start">
            <div className="col-lg-5"><SectionLabel>¿Qué hacemos?</SectionLabel>
              <h2 className="section-title" id="who-intro-title">El reto es tuyo.<br /><em>La solución, juntos.</em></h2>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <p className="who-intro__lead">Desarrollamos soluciones digitales personalizadas para ayudar a empresas y emprendedores a crecer, organizarse y vender mejor.</p>
              <p className="body-copy">Creamos páginas web, tiendas en línea, software a la medida, automatizaciones con inteligencia artificial, diseño gráfico e identidad corporativa. Unimos eficiencia, innovación y excelencia en el servicio.</p>
              <p className="body-copy">Queremos que la tecnología trabaje para nuestros clientes: que simplifique procesos, facilite decisiones y produzca resultados reales.</p>
              <a className="inline-link" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">Cuéntanos qué necesita tu empresa <ArrowUpRight size={20} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="who-intro__keywords" aria-label="Nuestra esencia"><span>TECNOLOGÍA</span><i aria-hidden="true" /><span>DISEÑO</span><i aria-hidden="true" /><span>SERVICIO</span><i aria-hidden="true" /><span>CONFIANZA</span></div>
        </div>
      </section>

      <section className="section who-story" id="nuestra-historia" aria-labelledby="who-story-title">
        <div className="container-xxl">
          <div className="row gy-5 gx-lg-5">
            <div className="col-lg-5"><div className="who-sticky"><SectionLabel>Nuestra historia</SectionLabel><h2 className="section-title" id="who-story-title">Todo comenzó<br />con un <em>«Hola, mundo».</em></h2><p className="body-copy">Una idea nacida en tiempos de incertidumbre se transformó en una empresa guiada por la experiencia, la fe y el propósito de servir.</p><span className="who-story__signature">/ DE UNA IDEA A SOLUCIONES REALES</span></div></div>
            <div className="col-lg-6 offset-lg-1"><ol className="who-timeline">
              {milestones.map((item) => (
                <li key={item.number} className="who-timeline__item">
                  <span className="who-timeline__number">{item.number}</span>
                  <div><p className="who-timeline__moment">{item.moment}</p><h3>{item.title}</h3><p>{item.description}</p></div>
                </li>
              ))}
            </ol></div>
          </div>
        </div>
      </section>

      <section className="section who-mission" id="mision" aria-labelledby="who-mission-title">
        <div className="container-xxl">
          <div className="who-mission__panel">
            <div className="row gy-5 gx-lg-5 align-items-center">
              <div className="col-lg-5"><SectionLabel>Nuestra misión</SectionLabel><h2 className="section-title" id="who-mission-title">Crear con excelencia.<br /><em>Servir con propósito.</em></h2><div className="who-mission__emblem" aria-hidden="true"><Lightbulb size={30} strokeWidth={1.2} /><span>CREATIVIDAD QUE SIRVE</span></div></div>
              <div className="col-lg-6 offset-lg-1"><p className="who-mission__statement">Nuestra misión es crear soluciones digitales personalizadas que ayuden a empresas y emprendedores a crecer, optimizar sus procesos y proyectar una imagen profesional.</p>
                <p className="body-copy">Integramos tecnología, diseño y automatización con un enfoque humano y estratégico. Trabajamos con excelencia, ética y compromiso, convencidos de que cada proyecto es una oportunidad para servir, generar confianza y glorificar a Dios a través de un trabajo bien hecho.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section who-values" id="valores" aria-labelledby="who-values-title">
        <div className="container-xxl">
          <div className="section-heading row align-items-end gy-4"><div className="col-lg-8"><SectionLabel>Lo que nos guía</SectionLabel><h2 className="section-title" id="who-values-title">Nuestros valores.<br /><span className="text-dim">Nuestra forma de trabajar.</span></h2></div><div className="col-lg-4"><p className="section-intro">Los principios no se quedan en palabras: están presentes en cada decisión, relación y entrega.</p></div></div>
          <div className="row g-3 g-lg-4">{values.map(({ number, title, description, Icon }) => (
            <div className="col-md-6 col-xl-4" key={number}><article className="who-value-card"><div className="who-value-card__top"><Icon size={36} strokeWidth={1.4} aria-hidden="true" /><span>{number} / 06</span></div><div><h3>{title}</h3><p>{description}</p></div></article></div>
          ))}</div>
          <div className="who-values__verse"><span className="who-values__quote-mark" aria-hidden="true">“</span><blockquote>Encomienda a Jehová tus obras, y tus pensamientos serán afirmados.</blockquote><p>PROVERBIOS 16:3</p></div>
        </div>
      </section>

      <section className="section who-why" id="por-que-elegirnos" aria-labelledby="who-why-title">
        <div className="container-xxl"><div className="section-heading row align-items-end gy-4"><div className="col-lg-8"><SectionLabel>¿Por qué elegirnos?</SectionLabel><h2 className="section-title" id="who-why-title">Más que proveedores.<br /><em>Aliados de tu crecimiento.</em></h2></div><div className="col-lg-4"><p className="section-intro">Elegir un aliado tecnológico es una decisión estratégica. Queremos acompañarte con experiencia, cercanía y resultados.</p></div></div>
          <div className="row g-3 g-lg-4">{reasons.map(({ title, description, Icon }, index) => (
            <div className="col-md-6" key={title}><article className="who-reason"><span className="who-reason__number">{String(index + 1).padStart(2, "0")}</span><div><div className="who-reason__headline"><Icon size={27} strokeWidth={1.5} aria-hidden="true" /><h3>{title}</h3></div><p>{description}</p></div></article></div>
          ))}</div>
        </div>
      </section>

      <section className="section who-capabilities" aria-labelledby="who-capabilities-title"><div className="container-xxl">
        <div className="row gy-4 align-items-end section-heading"><div className="col-lg-8"><SectionLabel>Lo que podemos construir</SectionLabel><h2 className="section-title" id="who-capabilities-title">Una visión integral.<br /><span className="text-dim">Múltiples soluciones.</span></h2></div><div className="col-lg-4"><p className="section-intro">Desde el primer concepto hasta la puesta en marcha: diferentes disciplinas que trabajan juntas.</p></div></div>
        <div className="who-capabilities__list">{services.map((service, index) => <div className="who-capabilities__item" key={service.id}><span>{String(index + 1).padStart(2, "0")}</span><h3>{service.title}</h3><ArrowUpRight size={22} strokeWidth={1.5} aria-hidden="true" /></div>)}</div>
        <div className="section-bottom-action"><a className="button button--outline" href="/#servicios">Explora nuestras especialidades <ArrowUpRight size={20} aria-hidden="true" /></a></div>
      </div></section>
      {/* El CTA global 'Construyamos algo extraordinario' se renderiza desde src/app/layout.tsx. */}
    </div>
  );
}
