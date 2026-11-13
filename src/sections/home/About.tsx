import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/data/site";

export function About() {
  return (
    <section className="section about-section" id="nosotros" aria-labelledby="about-title">
      <div className="container-xxl">
        <div className="row align-items-center gx-5 gy-5">
          <div className="col-lg-5">
            <div className="about-art" aria-label="Composición gráfica abstracta que representa diseño, tecnología y desarrollo" role="img">
              <div className="about-art__grid" />
              <div className="about-art__frame about-art__frame--first" />
              <div className="about-art__frame about-art__frame--second" />
              <div className="about-art__disc" />
              <span className="about-art__label">ELYON / CREATIVE TECHNOLOGY</span>
              <span className="about-art__arrow"><MoveUpRight size={31} strokeWidth={1.4} aria-hidden="true" /></span>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <SectionLabel>Acerca de Elyon Devs</SectionLabel>
            <h2 className="section-title" id="about-title">La tecnología debe <em>resolver.</em><br />El diseño debe <em>conectar.</em></h2>
            <p className="body-copy">En Elyon Devs combinamos pensamiento estratégico, desarrollo tecnológico y creatividad para transformar ideas en soluciones concretas. Cada proyecto comienza escuchando y entendiendo cómo funciona tu negocio.</p>
            <p className="body-copy">No buscamos imponer herramientas: diseñamos soluciones que se adaptan a las personas, los procesos y los objetivos de cada organización.</p>
            <a href={site.bookingUrl} className="inline-link" target="_blank" rel="noopener noreferrer">Conversemos sobre tu idea <ArrowUpRight size={20} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
