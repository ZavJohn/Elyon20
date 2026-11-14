import { Hero } from "@/sections/home/Hero";
import { Features } from "@/sections/home/Features";
import { About } from "@/sections/home/About";
import { Portfolio } from "@/sections/home/Portfolio";
import { Services } from "@/sections/home/Services";
import { Clients } from "@/sections/home/Clients";
import { Showreel } from "@/sections/home/Showreel";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Showreel />
      <Portfolio />
      <Services />
      <Clients />
    </>
  );
}