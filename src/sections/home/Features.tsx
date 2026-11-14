import { Blocks, Lightbulb, Workflow, Handshake } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const features = [
  { icon: Lightbulb, title: "Estrategia primero", text: "Entendemos el problema antes de proponer una solución." },
  { icon: Blocks, title: "Desarrollo a medida", text: "Construimos soluciones que responden a necesidades reales." },
  { icon: Workflow, title: "Procesos conectados", text: "Integramos tecnología para simplificar el trabajo diario." },
  { icon: Handshake, title: "Relaciones de confianza", text: "Acompañamos el proyecto con claridad, cercanía y compromiso." },
];

export function Features() {
  return (
    <section id="diferenciadores" className="section features-section" aria-labelledby="features-title">
      <div className="container-xxl">
        <div className="section-heading row align-items-end gy-4">
          <div className="col-lg-7">
            <SectionLabel>Lo que nos distingue</SectionLabel>
            <h2 className="section-title" id="features-title">Más que código.<br /><span className="text-elyon">Creamos posibilidades.</span></h2>
          </div>
          <div className="col-lg-4 offset-lg-1"><p className="section-intro">La tecnología funciona mejor cuando existe una estrategia clara y un equipo que escucha.</p></div>
        </div>
        <div className="row g-3 g-xl-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div className="col-md-6 col-xl-3" key={feature.title}>
                <article className="feature-card">
                  <div className="feature-card__top"><Icon size={44} strokeWidth={1.35} aria-hidden="true" /><span>0{index + 1}</span></div>
                  <div><h3>{feature.title}</h3><p>{feature.text}</p></div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
