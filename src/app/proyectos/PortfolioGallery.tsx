"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { ProjectThumbnail } from "@/components/ui/ProjectThumbnail";
import type { PortfolioCase } from "@/data/portfolio-cases";

type Filter = "Todos" | string;

export function PortfolioGallery({ projects }: { projects: PortfolioCase[] }) {
  const [filter, setFilter] = useState<Filter>("Todos");
  const categories = Array.from(new Set(projects.map((project) => project.category)));
  const activeFilter = filter === "Todos" || categories.includes(filter) ? filter : "Todos";
  const filtered = activeFilter === "Todos" ? projects : projects.filter((item) => item.category === activeFilter);

  return (
    <>
      <div className="pf-filters" role="group" aria-label="Filtrar proyectos por especialidad">
        {(["Todos", ...categories] as Filter[]).map((option) => (
          <button
            type="button"
            key={option}
            className={`pf-filter ${activeFilter === option ? "pf-filter--active" : ""}`}
            aria-pressed={activeFilter === option}
            onClick={() => setFilter(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <p className="pf-count" role="status" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "proyecto" : "proyectos"} · {activeFilter === "Todos" ? "Selección de trabajos" : activeFilter}
      </p>
      {filtered.length === 0 ? (
        <p className="pf-empty">Todavía no hay proyectos publicados en esta categoría.</p>
      ) : (
        <div className="row g-3 g-lg-4">
          {filtered.map((project) => (
            <div className="col-md-6 col-xl-4" key={project.id}>
              <article className="pf-card h-100">
                <ProjectThumbnail src={project.image} name={project.name} />
                <div className="pf-card__body">
                  <span className="pf-card__category">{project.category}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  {project.tags.length > 0 && (
                    <div className="pf-card__tags" aria-label="Áreas de trabajo">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  )}
                  {project.url && (
                    <a
                      className="pf-card__link"
                      href={project.url}
                      target={project.url.startsWith("http") ? "_blank" : undefined}
                      rel={project.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      Ver proyecto <ArrowUpRight size={18} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
