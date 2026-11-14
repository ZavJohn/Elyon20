export interface Client {
  name: string;
  image: string;
}

// Orden de nombres para los archivos numerados en public/images/clientes/1.png, 2.png...
// Si agregas más empresas, puedes ampliar esta lista para mejorar su texto alternativo.
export const clients: Client[] = [
  { name: "Makita", image: "/images/clientes/1.png" },
  { name: "LEGO", image: "/images/clientes/2.png" },
  { name: "Mattel", image: "/images/clientes/3.png" },
  { name: "ADT", image: "/images/clientes/4.png" },
  { name: "CONALEP", image: "/images/clientes/5.png" },
  { name: "Centro Educativo Newton", image: "/images/clientes/6.png" },
  { name: "Rea Torres y Asociados", image: "/images/clientes/7.png" },
  { name: "BNI Toluca", image: "/images/clientes/8.png" },
  { name: "Servicio Integral Auditivo", image: "/images/clientes/9.png" },
  { name: "DIF Temoaya", image: "/images/clientes/10.png" },
  { name: "Camino Nuevo", image: "/images/clientes/11.png" },
  { name: "Recolse", image: "/images/clientes/12.png" },
];
