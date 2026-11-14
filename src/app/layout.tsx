import type { Metadata, Viewport } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { site } from "@/data/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectCallout } from "@/sections/home/ProjectCallout";

export const metadata: Metadata = {
  title: "Elyon Devs | Diseñamos soluciones, desarrollamos confianza",
  description: site.description,
  icons: { icon: "/images/favicon.ico", shortcut: "/images/favicon.ico" },
  metadataBase: new URL("https://elyondevs.com"),
  openGraph: {
    type: "website",
    locale: "es_MX",
    title: "Elyon Devs | Tecnología, diseño e innovación",
    description: site.description,
    siteName: site.name,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090B0A",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX">
      <body>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <Header />
        <main id="contenido">{children}</main>
        <ProjectCallout />
        <Footer />
      </body>
    </html>
  );
}
