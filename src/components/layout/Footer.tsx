import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { navigation, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-xxl">
        <div className="row gy-5 justify-content-between">
          <div className="col-lg-5">
            <a className="brand brand--footer" href="#inicio" aria-label="Volver al inicio de Elyon Devs">
              <span className="brand-symbol" aria-hidden="true"><span /></span>
              <span className="brand-text">elyon<span>devs</span><i>.</i></span>
            </a>
            <p className="footer-tagline">{site.tagline}</p>
            <p className="footer-description">Tecnología, creatividad y estrategia para transformar ideas en soluciones que impulsan negocios.</p>
          </div>
          <div className="col-sm-5 col-lg-2">
            <h3 className="footer-title">Explora</h3>
            <ul className="footer-links">
              {navigation.map((item) => <li key={item.href}><a href={item.href}>{item.label}</a></li>)}
            </ul>
          </div>
          <div className="col-sm-7 col-lg-4">
            <h3 className="footer-title">Conversemos</h3>
            <a className="footer-contact-link" href={`mailto:${site.email}`}><Mail size={18} aria-hidden="true" />{site.email}</a>
            <span className="footer-location"><MapPin size={18} aria-hidden="true" />{site.location}</span>
            <a className="footer-booking" href={site.bookingUrl} target="_blank" rel="noopener noreferrer">Agenda una asesoría <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between gap-2">
          <span>© {new Date().getFullYear()} Elyon Devs. Todos los derechos reservados.</span>
          <span>Diseñamos soluciones, desarrollamos confianza.</span>
        </div>
      </div>
    </footer>
  );
}
