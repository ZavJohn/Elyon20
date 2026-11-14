import { ArrowUpRight } from "lucide-react";
import { FluidSculpture } from "@/components/ui/FluidSculpture";
import { site } from "@/data/site";

export function ProjectCallout() {
  return (
    <section className="project-callout" id="contacto" aria-labelledby="project-callout-title">
      <div className="project-callout__waves" aria-hidden="true" />
      <div className="container-xxl">
        <div className="project-callout__card row g-0 align-items-center">
          <div className="col-md-5 col-lg-4">
            <div className="project-callout__artwork">
              <FluidSculpture />
              <span className="project-callout__art-caption">IMAGINACIÓN EN MOVIMIENTO</span>
            </div>
          </div>
          <div className="col-md-7 col-lg-8">
            <div className="project-callout__copy">
              <span className="project-callout__eyebrow"><span className="project-callout__pulse" /> CONSTRUYAMOS ALGO EXTRAORDINARIO</span>
              <h2 id="project-callout-title">¿Tienes un proyecto <em>en mente?</em></h2>
              <p>Nosotros ponemos la estrategia, el diseño y la tecnología para hacerlo realidad.</p>
              <a className="project-callout__button" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <span>Escríbenos por WhatsApp</span>
                <span className="project-callout__button-circle"><ArrowUpRight aria-hidden="true" size={19} strokeWidth={2.2} /></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
