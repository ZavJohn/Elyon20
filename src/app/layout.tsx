import type { Metadata, Viewport } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Elyon Devs | Diseñamos soluciones, desarrollamos confianza",
  description: site.description,
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
      <body>{children}</body>
    </html>
  );
}
