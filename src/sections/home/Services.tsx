import { ArrowUpRight, Bot, Code2, Globe2, Megaphone, Palette, Smartphone, Podcast, Radio } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services, type ServiceId } from "@/data/services";
import { site } from "@/data/site";

const icons: Record<ServiceId, typeof Globe2> = {
  web: Globe2,
  software: Code2,
  branding: Palette,
  marketing: Megaphone,
  apps: Smartphone,
  automation: Bot,
  podcast: Podcast,
  streaming: Radio,
};

export function Services() {
  return (
    <section className="section services-section" id="servicios" aria-labelledby="services-title">
      <div className="container-xxl">
        <div className="section-heading row align-items-end gy-4">
          <div className="col-lg-8"><SectionLabel>Nuestras especialidades</SectionLabel><h2 className="section-title" id="services-title">Ideas que se convierten<br /><span className="text-dim">en soluciones reales.</span></h2></div>
          <div className="col-lg-4"><p className="section-intro">Servicios integrales para desarrollar, conectar y hacer crecer tu negocio en el entorno digital.</p></div>
        </div>
        <div className="services-list">
          {services.map((service, index) => {
            const Icon = icons[service.id];
            return (
              <article className="service-row" key={service.id}>
                <span className="service-row__number">{String(index + 1).padStart(2, "0")}</span>
                <div className="service-row__name"><Icon size={33} strokeWidth={1.35} aria-hidden="true" /><h3>{service.title}</h3></div>
                <p className="service-row__description">{service.description}</p>
                <div className="service-row__tags">{service.specialties.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            );
          })}
        </div>
        <div className="section-bottom-action">
          <a className="button button--outline" href={site.servicesUrl} target="_blank" rel="noopener noreferrer">Explora todos nuestros servicios <ArrowUpRight size={20} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
