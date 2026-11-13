// Nombres presentes en el portafolio público de Elyon Devs.
// Las imágenes y fichas detalladas quedan pendientes de aprobación.
export interface Project {
  id: string;
  name: string;
  label: string;
  visual: "lime" | "violet" | "graphite" | "mint";
}

export const projects: Project[] = [
  { id: "dif", name: "DIF Temoaya", label: "Portafolio Elyon", visual: "lime" },
  { id: "hechos", name: "Hechos para la vida", label: "Portafolio Elyon", visual: "violet" },
  { id: "shekina", name: "Shekina B'alma", label: "Portafolio Elyon", visual: "graphite" },
  { id: "quintosol", name: "Quinto Sol", label: "Portafolio Elyon", visual: "mint" },
];
