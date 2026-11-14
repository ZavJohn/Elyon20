import type { NextConfig } from "next";

// Primera capa de protección: no restringe scripts, videos ni iframes externos.
// Una CSP completa requiere auditar previamente reCAPTCHA, Calendly y analítica.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=86400" },
  {
    key: "Content-Security-Policy",
    value: "object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        source: "/api/contact",
        headers: [{ key: "Cache-Control", value: "no-store" }],
      },
    ];
  },
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
