import { ArrowDown, ArrowUpRight, Asterisk, MoveUpRight } from "lucide-react";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow--one" aria-hidden="true" />
      <div className="hero-glow hero-glow--two" aria-hidden="true" />
      <div className="container-xxl hero-container">
        <div className="row align-items-center gy-5">
          <div className="col-xl-8 col-lg-8">
            <p className="hero-eyebrow"><span className="eyebrow-line" />Agencia de tecnología + creatividad digital <span className="hero-eyebrow-index">/ 001</span></p>
            <h1 className="hero-title" id="hero-title">
              Diseñamos<br />
              <span className="hero-title--outline">soluciones,</span><br />
              desarrollamos<br />
              <span className="hero-title--accent">confianza<span className="hero-period">.</span></span>
            </h1>
            <div className="hero-bottom row align-items-end gy-4">
              <div className="col-md-7">
                <p className="hero-description">Unimos estrategia, diseño y desarrollo de software para crear experiencias digitales que transforman negocios.</p>
              </div>
              <div className="col-md-5 d-md-flex justify-content-md-end">
                <a className="button button--green button--large" href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
                  Hablemos de tu proyecto <ArrowUpRight size={20} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 hero-aside-wrap">
            <div className="hero-art" aria-label="Ilustración abstracta de innovación y tecnología" role="img">
              <div className="hero-art__orbit hero-art__orbit--outer" />
              <div className="hero-art__orbit hero-art__orbit--middle" />
              <div className="hero-art__orbit hero-art__orbit--inner" />
              <div className="hero-art__beam hero-art__beam--a" />
              <div className="hero-art__beam hero-art__beam--b" />
              <div className="hero-art__center"><Asterisk size={73} strokeWidth={1.1} aria-hidden="true" /><span>IDEAS<br />TO<br />IMPACT</span></div>
              <div className="hero-art__badge hero-art__badge--top"><span className="status-dot" />CREATIVE ENGINEERING</div>
              <div className="hero-art__badge hero-art__badge--bottom"><MoveUpRight size={13} aria-hidden="true" />DESARROLLO DIGITAL</div>
              <div className="hero-art__spark hero-art__spark--one" />
              <div className="hero-art__spark hero-art__spark--two" />
            </div>
          </div>
        </div>
        <div className="hero-footnote d-flex justify-content-between align-items-center flex-wrap gap-3">
          <a href="#diferenciadores" className="scroll-cue">Explora lo que hacemos <ArrowDown size={17} aria-hidden="true" /></a>
          <span>EST. TOLUCA, MÉXICO <span aria-hidden="true">✳</span> DISEÑO + DESARROLLO</span>
        </div>
      </div>
    </section>
  );
}
