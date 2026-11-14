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
  bookingUrl: "/agendar",
  calendlyUrl: "https://calendly.com/elyondevs/1a1",
  projectsUrl: "/proyectos",
  servicesUrl: "/servicios",
  boccaUrl: "/bocca",
  privacyUrl: "/aviso-de-privacidad",
  logoUrl: "/images/logo.png",
  social: {
    facebook: "https://www.facebook.com/ElyonDevs",
    instagram: "https://www.instagram.com/elyondevs/",
    spotify: "https://open.spotify.com/show/033IIBUMiN27EAalpTokNV?si=d976620fabe04cab",
    linkedin: "https://www.linkedin.com/company/elyon-devs/",
  },
} as const;

// Rutas internas disponibles en el sitio; se comparten entre header y footer.
export const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "BOCCA", href: "/bocca" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
] as const;

// El archivo se incorporará en public/videos/home_elyon.mp4.
export const showreel = {
  src: "/videos/home_elyon.mp4",
} as const;
