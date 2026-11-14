import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/data/site";

// Cada gota comienza arriba a la izquierda y se integra al mismo punto central.
// Las demoras negativas distribuyen la lluvia desde el primer segundo.
const rainDrops = [
  { x: 4, y: -4, size: 7, delay: -0.3, duration: 5.2 },
  { x: 14, y: -9, size: 5, delay: -1.8, duration: 5.5 },
  { x: 24, y: 4, size: 8, delay: -3.9, duration: 5.7 },
  { x: 8, y: 9, size: 6, delay: -4.8, duration: 5.1 },
  { x: 29, y: -6, size: 9, delay: -2.6, duration: 5.3 },
  { x: 18, y: 14, size: 5, delay: -0.9, duration: 5.8 },
  { x: 36, y: 3, size: 7, delay: -4.1, duration: 5.4 },
  { x: 7, y: 21, size: 4, delay: -3.1, duration: 5.6 },
  { x: 27, y: 18, size: 8, delay: -1.3, duration: 5.9 },
  { x: 39, y: 11, size: 6, delay: -2.2, duration: 5.2 },
  { x: 14, y: 27, size: 5, delay: -4.5, duration: 5.7 },
  { x: 32, y: 26, size: 7, delay: -3.5, duration: 5.5 },
  { x: 2, y: 2, size: 6, delay: -2.9, duration: 5.8 },
  { x: 41, y: -5, size: 5, delay: -0.6, duration: 5.4 },
];

export function About() {
  return (
    <section className="section about-section" id="nosotros" aria-labelledby="about-title">
      <div className="container-xxl">
        <div className="row align-items-center gx-5 gy-5">
          <div className="col-lg-5">
            <div
              className="about-art"
              role="img"
              aria-label="Pequeñas gotas verdes caen en diagonal desde arriba a la izquierda y se fusionan en una gota mayor, simbolizando el crecimiento de cada proyecto."
            >
              <div className="about-art__grid" aria-hidden="true" />
              <div className="about-art__halo" aria-hidden="true" />
              <div className="about-art__rain" aria-hidden="true">
                {rainDrops.map((drop, index) => (
                  <span
                    key={index}
                    className="about-art__rain-drop"
                    style={{
                      "--start-x": `${drop.x}%`,
                      "--start-y": `${drop.y}%`,
                      "--drop-size": `${drop.size}px`,
                      "--drop-delay": `${drop.delay}s`,
                      "--drop-duration": `${drop.duration}s`,
                    } as CSSProperties}
                  />
                ))}
              </div>
              <div className="about-art__drop-core" aria-hidden="true">
                <svg className="about-art__drop-shape" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="elyon-drop-body" x1="88" y1="68" x2="219" y2="229" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#90D78D" />
                      <stop offset="0.22" stopColor="#379237" />
                      <stop offset="0.64" stopColor="#174E25" />
                      <stop offset="1" stopColor="#071B10" />
                    </linearGradient>
                    <radialGradient id="elyon-drop-reflection" cx="0" cy="0" r="1" gradientTransform="translate(129 160) rotate(47) scale(111 91)" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#71CA6D" stopOpacity="0.73" />
                      <stop offset="1" stopColor="#379237" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="150" cy="150" r="109" fill="url(#elyon-drop-body)" stroke="#70C76D" strokeOpacity="0.53" strokeWidth="1.3" />
                  <circle cx="150" cy="150" r="109" fill="url(#elyon-drop-reflection)" />
                  <path d="M85 114C95 86 117 70 143 67" stroke="white" strokeOpacity="0.45" strokeWidth="6" strokeLinecap="round" />
                  <path d="M185 241C211 233 229 208 239 184" stroke="#ACF3A4" strokeOpacity="0.27" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
              <span className="about-art__label">CADA GOTA SUMA. CADA PROYECTO NOS HACE CRECER.</span>
              <span className="about-art__badge" aria-hidden="true">ELYON / INNOVACIÓN EN MOVIMIENTO</span>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <SectionLabel>Acerca de Elyon Devs</SectionLabel>
            <h2 className="section-title" id="about-title">La tecnología debe <em>resolver.</em><br />El diseño debe <em>conectar.</em></h2>
            <p className="body-copy">En Elyon Devs combinamos pensamiento estratégico, desarrollo tecnológico y creatividad para transformar ideas en soluciones concretas. Cada proyecto comienza escuchando y entendiendo cómo funciona tu negocio.</p>
            <p className="body-copy">No buscamos imponer herramientas: diseñamos soluciones que se adaptan a las personas, los procesos y los objetivos de cada organización.</p>
            <a href={site.whatsappUrl} className="inline-link" target="_blank" rel="noopener noreferrer">Cuéntanos tu idea por WhatsApp <ArrowUpRight size={20} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
