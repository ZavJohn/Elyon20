import { ArrowUpRight, Clapperboard, MonitorPlay } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { showreel, site } from "@/data/site";

/**
 * Cuando se configure showreel.src (ver src/data/site.ts),
 * el marcador visual se sustituye automáticamente por el video real.
 */
export function Showreel() {
  return (
    <section className="section showreel-section" id="video" aria-labelledby="showreel-title">
      <div className="container-xxl">
        <div className="row align-items-end gy-4 showreel-heading">
          <div className="col-lg-8">
            <SectionLabel>Somos Elyon Devs</SectionLabel>
            <h2 className="section-title" id="showreel-title">Ideas que cobran vida.<br /><em>Soluciones que trascienden.</em></h2>
          </div>
          <div className="col-lg-4">
            <p className="section-intro">Descubre cómo combinamos desarrollo, creatividad y tecnología para impulsar negocios.</p>
          </div>
        </div>
        <div className="showreel-stage">
          {showreel.src ? (
            <video
              className="showreel-video"
              controls
              playsInline
              preload="metadata"
              poster={showreel.poster ?? undefined}
              aria-label="Video institucional: qué hacemos en Elyon Devs"
            >
              <source src={showreel.src} type="video/mp4" />
              Tu navegador no puede reproducir este video.
            </video>
          ) : (
            <div className="showreel-placeholder" role="img" aria-label="Vista de presentación del próximo video institucional de Elyon Devs; aún no se ha agregado el archivo de video">
              <div className="showreel-placeholder__grid" aria-hidden="true" />
              <div className="showreel-placeholder__halo" aria-hidden="true" />
              <div className="showreel-placeholder__ring showreel-placeholder__ring--one" aria-hidden="true" />
              <div className="showreel-placeholder__ring showreel-placeholder__ring--two" aria-hidden="true" />
              <div className="showreel-placeholder__kicker">ELYON DEVS <span> / </span> SHOWREEL</div>
              <div className="showreel-placeholder__center">
                <span className="showreel-placeholder__icon"><MonitorPlay size={30} strokeWidth={1.5} aria-hidden="true" /></span>
                <strong>Tecnología que transforma ideas.</strong>
                <span>VIDEO INSTITUCIONAL EN PREPARACIÓN</span>
              </div>
              <div className="showreel-placeholder__bottom">
                <span>DESARROLLO · DISEÑO · AUTOMATIZACIÓN</span>
                <span>01 / ELYON</span>
              </div>
            </div>
          )}
          <div className="showreel-stage__caption">
            <span><Clapperboard size={16} aria-hidden="true" /> DESCUBRE LO QUE HACEMOS</span>
            <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer">Conversemos de tu proyecto <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="showreel-skills" aria-label="Especialidades de Elyon Devs">
          <span>DESARROLLO DE SOFTWARE</span><i aria-hidden="true" />
          <span>SITIOS WEB</span><i aria-hidden="true" />
          <span>IDENTIDAD VISUAL</span><i aria-hidden="true" />
          <span>AUTOMATIZACIÓN CON IA</span>
        </div>
      </div>
    </section>
  );
}
