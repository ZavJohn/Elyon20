export interface Project {
  id: string;
  name: string;
  label: string;
  image: string;
}

// Orden de metadatos para las miniaturas 1.png, 2.png... en public/images/home/.
// Las imágenes adicionales se detectan automáticamente.
export const projects: Project[] = [
  { id: "newton", name: "Centro Educativo Newton", label: "Sitio web corporativo", image: "/images/home/1.png" },
  { id: "rea-torres", name: "Rea Torres y Asociados", label: "Diseño y desarrollo web", image: "/images/home/2.png" },
  { id: "logistica-gruas", name: "Logística y Grúas Toluca", label: "Software a la medida", image: "/images/home/3.png" },
  { id: "servicio-auditivo", name: "Servicio Integral Auditivo", label: "Sitio web y experiencia digital", image: "/images/home/4.png" },
  { id: "makita", name: "Makita México", label: "Diseño gráfico y materiales de marca", image: "/images/home/5.png" },
  { id: "fitos", name: "Fitos", label: "Branding y diseño de empaque", image: "/images/home/6.png" },
];
