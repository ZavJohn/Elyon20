export const site = {
  name: "Elyon Devs",
  tagline: "Diseñamos soluciones, desarrollamos confianza.",
  description:
    "Agencia de desarrollo tecnológico en Toluca: software a la medida, desarrollo web, branding, marketing digital, aplicaciones y automatización con IA.",
  email: "ventas@elyondevs.com",
  phone: "+52 729 131 5625",
  location: "Toluca, Estado de México",
  bookingUrl: "https://elyondevs.com/agendar/",
} as const;

export const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
] as const;


/**
 * Para activar el video, coloca tu archivo en
 * public/videos/elyon-devs-showreel.mp4
 * y sustituye src: null por src: "/videos/elyon-devs-showreel.mp4".
 * Opcional: coloca una portada JPEG/WebP dentro de public/images.
 */
export const showreel: { src: string | null; poster: string | null } = {
  src: null,
  poster: null,
};
