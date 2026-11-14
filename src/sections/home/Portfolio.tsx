import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectThumbnail } from "@/components/ui/ProjectThumbnail";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

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
          {projects.map((project) => (
            <div className="col-md-6 col-xl-4" key={project.id}>
              <article className="project-card">
                <ProjectThumbnail src={project.image} name={project.name} />
                <div className="project-card__info"><h3>{project.name}</h3><span>{project.label}</span></div>
              </article>
            </div>
          ))}
        </div>
        <div className="section-bottom-action">
          <a className="button button--outline" href={site.projectsUrl} target="_blank" rel="noopener noreferrer">Ver nuestro portafolio completo <ArrowUpRight size={20} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
