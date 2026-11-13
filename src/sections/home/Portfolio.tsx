import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/data/projects";

export function Portfolio() {
  return (
    <section className="section portfolio-section" id="proyectos" aria-labelledby="portfolio-title">
      <div className="container-xxl">
        <div className="section-heading row align-items-end gy-4">
          <div className="col-lg-9">
            <SectionLabel>Trabajo seleccionado</SectionLabel>
            <h2 className="section-title" id="portfolio-title">Proyectos que <span className="text-dim">hablan por nosotros.</span></h2>
          </div>
          <div className="col-lg-3 text-lg-end"><span className="section-overline">/ PORTAFOLIO ELYON</span></div>
        </div>
        <div className="row g-3 g-lg-4">
          {projects.map((project, index) => (
            <div className="col-md-6" key={project.id}>
              <article className={`project-card project-card--${project.visual}`}>
                <div className="project-card__visual" aria-hidden="true">
                  <span className="project-card__code">ED—0{index + 1}</span>
                  <div className="project-card__graphic"><div className="project-card__rings" /><span>{project.name}</span></div>
                  <span className="project-card__corner"><ArrowUpRight size={27} strokeWidth={1.35} /></span>
                </div>
                <div className="project-card__info"><h3>{project.name}</h3><span>{project.label}</span></div>
              </article>
            </div>
          ))}
        </div>
        <p className="portfolio-note">* Representaciones gráficas temporales. Las imágenes originales y las fichas de cada proyecto se incorporarán en la siguiente etapa.</p>
      </div>
    </section>
  );
}
