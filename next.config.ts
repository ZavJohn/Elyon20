import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Conserva los enlaces de la página anterior tras el lanzamiento del nuevo sitio.
  async redirects() {
    return [
      { source: "/about-2", destination: "/nosotros", permanent: true },
      { source: "/services", destination: "/servicios", permanent: true },
      { source: "/bocca-agency", destination: "/bocca", permanent: true },
      { source: "/contact-2", destination: "/contacto", permanent: true },
    ];
  },
};

export default nextConfig;
