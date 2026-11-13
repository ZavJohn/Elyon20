import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/sections/home/Hero";
import { Features } from "@/sections/home/Features";
import { About } from "@/sections/home/About";
import { Portfolio } from "@/sections/home/Portfolio";
import { Services } from "@/sections/home/Services";
import { Contact } from "@/sections/home/Contact";
import { ProjectCallout } from "@/sections/home/ProjectCallout";
import { Showreel } from "@/sections/home/Showreel";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido">
        <Hero />
        <ProjectCallout />
        <Features />
        <About />
        <Showreel />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
