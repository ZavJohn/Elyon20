import type { Metadata } from "next";
import { ArrowUpRight, Layers3, Workflow, Sparkles } from "lucide-react";
import { InnerPageHero } from "@/components/layout/InnerPageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PortfolioGallery } from "./PortfolioGallery";
import { site } from "@/data/site";
import { getPortfolioCases } from "@/data/portfolio-cases";
import "./proyectos.css";

export const metadata: Metadata = {
  title: "Proyectos y portafolio | Elyon Devs",
  description: "Conoce proyectos de Elyon Devs: desarrollo web, software a la medida, marketing digital y producción audiovisual para empresas en México.",
  alternates: { canonical: "/proyectos" },
};

const disciplines = [
  { title: "Diseñamos experiencias", text: "Sitios y plataformas que comunican, orientan y conectan con nuevos clientes.", Icon: Layers3 },
  { title: "Ordenamos procesos", text: "Software a medida para operaciones, administración y seguimiento de negocios.", Icon: Workflow },
  { title: "Hacemos visible tu valor", text: "Diseño, marketing y producción audiovisual que cuentan historias de negocios reales.", Icon: Sparkles },
];

export const dynamic = "force-dynamic";

export default async function ProyectosPage() {
  const projects = await getPortfolioCases();

  return (
    <div className="pf-page">
      <InnerPageHero
        eyebrow="TRABAJO SELECCIONADO"
        title="Proyectos"
        description="Cada empresa tiene un reto diferente. Estos son algunos de los proyectos donde conectamos tecnología, diseño y estrategia para construir soluciones reales."
      />
      <section className="section pf-intro" aria-labelledby="pf-intro-title">
        <div className="container-xxl">
          <div className="row gy-4 align-items-end">
            <div className="col-lg-8">
              <SectionLabel>Nuestro portafolio</SectionLabel>
              <h2 className="section-title" id="pf-intro-title">Retos diferentes.<br /><span className="text-elyon">Soluciones con propósito.</span></h2>
            </div>
            <div className="col-lg-4"><p className="section-intro">Desde la presencia web de una empresa hasta herramientas internas y campañas de comunicación: trabajamos para conectar cada necesidad con una solución útil.</p></div>
          </div>
        </div>
      </section>
      <section className="section pf-projects" aria-label="Galería de proyectos">
        <div className="container-xxl"><PortfolioGallery projects={projects} /></div>
      </section>
      <section className="section pf-capabilities" aria-labelledby="pf-capabilities-title">
        <div className="container-xxl">
          <div className="section-heading"><SectionLabel>Cómo creamos valor</SectionLabel><h2 className="section-title" id="pf-capabilities-title">Un mismo enfoque.<br /><span className="text-elyon">Diferentes disciplinas.</span></h2></div>
          <div className="row g-3 g-lg-4">
            {disciplines.map(({ title, text, Icon }, index) => (
              <div className="col-md-4" key={title}>
                <article className="pf-discipline h-100">
                  <div className="pf-discipline__top"><Icon size={39} strokeWidth={1.4} aria-hidden="true" /><span>0{index + 1}</span></div>
                  <h3>{title}</h3><p>{text}</p>
                </article>
              </div>
            ))}
          </div>
          <div className="section-bottom-action"><a className="button button--outline" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">Platícanos sobre tu proyecto <ArrowUpRight size={20} aria-hidden="true" /></a></div>
        </div>
      </section>
      {/* CTA final 'Construyamos algo extraordinario' desde el layout compartido. */}
    </div>
  );
}
