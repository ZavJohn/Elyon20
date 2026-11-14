"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation, site } from "@/data/site";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="container-xxl">
        <nav className="header-inner" aria-label="Navegación principal">
          <BrandLogo />

          <ul className="header-links d-none d-xl-flex">
            {navigation.map((item) => (
              <li key={item.href}>
                {item.href.startsWith("http") ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">{item.label}</a>
                ) : (
                  <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>
                )}
              </li>
            ))}
          </ul>

          <a className="header-cta d-none d-xl-inline-flex" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
            Escríbenos por WhatsApp <ArrowUpRight size={17} strokeWidth={1.9} aria-hidden="true" />
          </a>

          <button
            className="mobile-menu-toggle d-inline-flex d-xl-none"
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-controls="mobile-navigation"
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </nav>
      </div>

      <div id="mobile-navigation" className={`mobile-nav ${open ? "mobile-nav--open" : ""}`} inert={!open}>
        <ul>
          {navigation.map((item) => (
            <li key={item.href}>
              {item.href.startsWith("http") ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>{item.label}</a>
              ) : (
                <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}</Link>
              )}
            </li>
          ))}
        </ul>
        <a className="button button--green mobile-nav__cta" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
          Escríbenos por WhatsApp <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
