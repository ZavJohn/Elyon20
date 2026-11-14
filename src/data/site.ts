export const site = {
  name: "Elyon Devs",
  tagline: "Diseñamos soluciones, desarrollamos confianza.",
  description:
    "Agencia de tecnología y creatividad digital en México: software a la medida, sitios web, branding, marketing, apps, podcast, transmisiones y automatización con IA.",
  email: "contacto@elyondevs.com",
  phone: "+52 729 131 5625",
  phoneHref: "tel:+527291315625",
  location: "México",
  whatsappUrl: "https://wa.me/527291315625",
  bookingUrl: "https://elyondevs.com/agendar/",
  projectsUrl: "https://elyondevs.com/proyectos",
  servicesUrl: "https://elyondevs.com/servicios",
  privacyUrl: "https://elyondevs.com/aviso-de-privacidad/", // Confirmar publicación al activar la página.
  logoUrl: "/images/logo.png",
  social: {
    facebook: "https://www.facebook.com/ElyonDevs",
    instagram: "https://www.instagram.com/elyondevs/",
    spotify: "https://open.spotify.com/show/033IIBUMiN27EAalpTokNV?si=d976620fabe04cab",
    linkedin: "https://www.linkedin.com/company/elyon-devs/",
  },
} as const;

// Rutas reales para las páginas publicadas. Servicios y proyectos siguen enlazando
// a sus secciones funcionales del Home hasta crear sus páginas interiores.
export const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: site.whatsappUrl },
] as const;

// El archivo se incorporará en public/videos/home_elyon.mp4.
export const showreel = {
  src: "/videos/home_elyon.mp4",
} as const;
