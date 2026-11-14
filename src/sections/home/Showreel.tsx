"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, Clapperboard, Play, X } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { showreel, site } from "@/data/site";

export function Showreel() {
  const [open, setOpen] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const playButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      playButtonRef.current?.focus();
    };
  }, [open]);

  const openVideo = () => { setVideoError(false); setOpen(true); };

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
          <div className="showreel-placeholder">
            <div className="showreel-placeholder__grid" aria-hidden="true" />
            <div className="showreel-placeholder__halo" aria-hidden="true" />
            <div className="showreel-placeholder__ring showreel-placeholder__ring--one" aria-hidden="true" />
            <div className="showreel-placeholder__ring showreel-placeholder__ring--two" aria-hidden="true" />
            <div className="showreel-placeholder__kicker">ELYON DEVS <span> / </span> SHOWREEL</div>
            <div className="showreel-placeholder__center">
              <button ref={playButtonRef} className="showreel-play" type="button" onClick={openVideo} aria-label="Reproducir el video institucional de Elyon Devs">
                <Play size={37} fill="currentColor" aria-hidden="true" />
              </button>
              <strong>Tecnología que transforma ideas.</strong>
              <span>DA PLAY Y DESCUBRE LO QUE HACEMOS</span>
            </div>
            <div className="showreel-placeholder__bottom">
              <span>DESARROLLO · DISEÑO · AUTOMATIZACIÓN</span>
              <span>01 / ELYON</span>
            </div>
          </div>
          <div className="showreel-stage__caption">
            <span><Clapperboard size={16} aria-hidden="true" /> DESCUBRE LO QUE HACEMOS</span>
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">Conversemos de tu proyecto <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="showreel-skills" aria-label="Especialidades de Elyon Devs">
          <span>DESARROLLO DE SOFTWARE</span><i aria-hidden="true" />
          <span>SITIOS WEB</span><i aria-hidden="true" />
          <span>IDENTIDAD VISUAL</span><i aria-hidden="true" />
          <span>AUTOMATIZACIÓN CON IA</span>
        </div>
      </div>
      {open && typeof document !== "undefined" && createPortal(
        <div className="showreel-modal" role="dialog" aria-modal="true" aria-labelledby="showreel-modal-title">
          <button className="showreel-modal__backdrop" type="button" onClick={() => setOpen(false)} aria-label="Cerrar video" />
          <div className="showreel-modal__panel">
            <div className="showreel-modal__header">
              <h3 id="showreel-modal-title">Somos Elyon Devs</h3>
              <button ref={closeButtonRef} type="button" className="showreel-modal__close" onClick={() => setOpen(false)} aria-label="Cerrar reproductor"><X size={24} aria-hidden="true" /></button>
            </div>
            {videoError ? (
              <p className="showreel-modal__error" role="status">El video aún no está disponible. Coloca <code>home_elyon.mp4</code> en <code>public/videos/</code> para habilitar su reproducción.</p>
            ) : (
              <video className="showreel-modal__video" src={showreel.src} autoPlay playsInline controls preload="metadata" onError={() => setVideoError(true)}>
                Tu navegador no puede reproducir el video institucional.
              </video>
            )}
          </div>
        </div>,
        document.body,
      )}
    </section>
  );
}
