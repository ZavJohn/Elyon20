export type ServiceId = "web" | "software" | "branding" | "marketing" | "apps" | "automation";

export interface Service {
  id: ServiceId;
  title: string;
  description: string;
  specialties: string[];
}

export const services: Service[] = [
  {
    id: "web",
    title: "Diseño y desarrollo web",
    description: "Sitios web y e-commerce creados para comunicar mejor, generar confianza y acompañar el crecimiento de tu negocio.",
    specialties: ["Web corporativa", "E-commerce", "Experiencia UX/UI"],
  },
  {
    id: "software",
    title: "Software a la medida",
    description: "Sistemas que se adaptan a tus procesos y hacen más eficiente la forma en que opera tu empresa.",
    specialties: ["Sistemas empresariales", "Integraciones", "Digitalización"],
  },
  {
    id: "branding",
    title: "Branding y diseño gráfico",
    description: "Identidades de marca y piezas gráficas que convierten una idea en una presencia reconocible y consistente.",
    specialties: ["Identidad visual", "Diseño editorial", "Medios impresos"],
  },
  {
    id: "marketing",
    title: "Marketing digital",
    description: "Estrategias para mejorar tu presencia digital, comunicar con intención y conectar con las personas correctas.",
    specialties: ["Estrategia digital", "Contenido", "Campañas"],
  },
  {
    id: "apps",
    title: "Aplicaciones móviles",
    description: "Experiencias móviles diseñadas para facilitar tareas, brindar servicios y conectar a tu empresa con sus usuarios.",
    specialties: ["Android", "Interfaces", "Integraciones"],
  },
  {
    id: "automation",
    title: "Automatización con IA",
    description: "Soluciones de automatización y asistentes inteligentes que ayudan a liberar tiempo y ordenar la operación.",
    specialties: ["Bots", "Flujos", "Asistentes IA"],
  },
];
