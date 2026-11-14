import Link from "next/link";

type InnerPageHeroProps = {
  title: string;
  eyebrow: string;
  description: string;
};

/** Cabecera breve y reutilizable para páginas interiores (no usar en Home). */
export function InnerPageHero({ title, eyebrow, description }: InnerPageHeroProps) {
  return (
    <section className="inner-page-hero" aria-labelledby="inner-page-title">
      <div className="container-xxl">
        <nav className="inner-page-hero__breadcrumb" aria-label="Ruta de navegación">
          <Link href="/">Inicio</Link>
          <span className="inner-page-hero__breadcrumb-separator" aria-hidden="true">/</span>
          <span aria-current="page">{title}</span>
        </nav>
        <p className="inner-page-hero__eyebrow">{eyebrow}</p>
        <h1 id="inner-page-title" className="inner-page-hero__title">{title}<span className="inner-page-hero__title-dot">.</span></h1>
        <p className="inner-page-hero__description">{description}</p>
      </div>
    </section>
  );
}
