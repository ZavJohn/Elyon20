import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Podcast } from "lucide-react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { navigation, site } from "@/data/site";

const social = [
  { label: "Facebook", url: site.social.facebook, Icon: Facebook },
  { label: "Instagram", url: site.social.instagram, Icon: Instagram },
  { label: "Spotify: Elyon Devs Podcast", url: site.social.spotify, Icon: Podcast },
  { label: "LinkedIn", url: site.social.linkedin, Icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-xxl">
        <div className="row gy-5 justify-content-between">
          <div className="col-lg-5">
            <BrandLogo footer />
            <p className="footer-tagline">{site.tagline}</p>
            <p className="footer-description">Tecnología, creatividad y estrategia para transformar ideas en soluciones que impulsan negocios.</p>
            <div className="footer-social" aria-label="Redes sociales">
              {social.map(({ label, url, Icon }) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                  <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="col-sm-5 col-lg-2">
            <h3 className="footer-title">Explora</h3>
            <ul className="footer-links">
              {navigation.map((item) => (
                <li key={item.href}>
                  {item.href.startsWith("http") ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer">{item.label}</a>
                  ) : (
                    <Link href={item.href}>{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
            <a className="footer-privacy" href={site.privacyUrl} target="_blank" rel="noopener noreferrer">Aviso de privacidad</a>
          </div>
          <div className="col-sm-7 col-lg-4">
            <h3 className="footer-title">Conversemos</h3>
            <a className="footer-contact-link" href={`mailto:${site.email}`}><Mail size={18} aria-hidden="true" />{site.email}</a>
            <a className="footer-contact-link" href={site.phoneHref}><Phone size={18} aria-hidden="true" />{site.phone}</a>
            <span className="footer-location"><MapPin size={18} aria-hidden="true" />{site.location}</span>
            <a className="footer-contact-action" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">Envíanos un WhatsApp <ArrowUpRight size={18} aria-hidden="true" /></a>
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
