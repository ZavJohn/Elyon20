# Elyon Devs

Primera versión propia del Home de Elyon Devs

## Stack

- Next.js (App Router) + React + TypeScript
- Bootstrap 5.3 para grid y utilidades
- CSS propio para la identidad visual y animaciones
- Lucide React para íconos
- Montserrat (texto) + Space Grotesk (títulos)

## Iniciar el proyecto (Zorin OS / Linux / macOS / Windows)

Requisitos: Node.js 20.9 o superior (recomendado Node.js 22 LTS) y npm.

```bash
npm install
npm run dev
```

Abrir http://localhost:3000

Para preparar producción:

```bash
npm run typecheck
npm run build
npm run start
```

## Cambios de identidad pendientes

1. **Verde oficial:** reemplazar `--color-green` y `--color-green-rgb` en `src/styles/design-tokens.css`. Actualmente es un tono provisional `#95E85C`.
2. **Logotipo oficial:** sustituir el wordmark tipográfico temporal de `Header.tsx` y `Footer.tsx` por el SVG autorizado.
3. **Portafolio:** sustituir las composiciones abstractas por imágenes y casos de estudio reales una vez facilitados los recursos y validada su publicación.
4. **Contenido editorial:** integrar Perspectiva TI y testimonios solo cuando estén disponibles los datos reales.
5. **Contacto:** el botón de agenda dirige temporalmente a la página existente `https://elyondevs.com/agendar/`. Más adelante implementar Calendly en ruta local y eventos GTM.

## Arquitectura

- `src/app`: App Router + metadatos SEO
- `src/components/layout`: header responsive y footer
- `src/components/ui`: componentes reutilizables
- `src/sections/home`: secciones del Home
- `src/data`: contenido editable y tipos
- `src/styles/design-tokens.css`: paleta y tipografías
- `src/styles/components.css`: CSS personalizado del sitio

## Bootstrap

Bootstrap se importa una única vez desde `src/app/layout.tsx`.
Se usa la cuadrícula (`container-xxl`, `row`, `col-lg-*`) y las utilidades de responsive.
El menú móvil utiliza estado de React: **no cargar el JS global de Bootstrap**, evitando conflictos de hidratación y dependencias innecesarias.

## Alcance de esta entrega

- Home con header responsivo, menú móvil, hero y destellos verdes.
- Diferenciadores, Nosotros, Portafolio conceptual, seis servicios, CTA y footer.
- Ajustes responsive y respeto a `prefers-reduced-motion`.
- Metadatos SEO básicos.

**No incluye todavía:** backend, formularios, panel administrable, páginas interiores, GSAP, implementación de GA4/GTM, CMS, imágenes definitivas ni auditoría de rendimiento en navegador real.

## Nota técnica

Este código se entregó como proyecto fuente. La instalación de dependencias y el `next build` deben ejecutarse en un entorno con acceso a npm. No se incluye `node_modules`.

## Segunda entrega — Tarjeta de contacto en movimiento + Video institucional

**Agregados al Home:**
- `src/sections/home/ProjectCallout.tsx`: tarjeta de contacto inspirada en el *concepto* visual de Home 8 Dark (después del Hero); botón enlazado a `site.bookingUrl`.
- `src/components/ui/FluidSculpture.tsx`: ilustración SVG original de acabado metálico verde; animación lenta mediante CSS, sin recursos de Frezzar.
- `src/sections/home/Showreel.tsx`: sección audiovisual (después de Nosotros) con reproductor nativo HTML5 cuando esté configurado el MP4, y una composición visual claramente etiquetada como video pendiente mientras no exista.
- `src/styles/motion-sections.css`: estilos propios, adaptaciones Bootstrap responsive y soporte `prefers-reduced-motion`.

### Publicar el video de Elyon Devs

1. Prepara un archivo MP4 (H.264 para compatibilidad amplia), idealmente 1920×1080, de 45–75 segundos. Optimiza su tamaño antes de publicar (faststart / compresión apropiada).
2. Colócalo en `public/videos/elyon-devs-showreel.mp4` (crea la carpeta `videos` si falta).
3. Abre `src/data/site.ts` y cambia la configuración a:

```ts
export const showreel: { src: string | null; poster: string | null } = {
  src: "/videos/elyon-devs-showreel.mp4",
  poster: "/images/portada-video.webp", // opcional, si existe
};
```

4. Si agregas una portada, coloca el archivo en `public/images/portada-video.webp`. Si no la tienes, usa `poster: null`.

El reproductor usa controles accesibles de HTML5, no tiene autoplay ni descarga el contenido completo de forma anticipada (`preload="metadata"`). El indicador de video pendiente no simula tener un video disponible.

### Guion sugerido (50–65 s)

- 00–08: Un reto empresarial y una idea por desarrollar.
- 08–23: Estrategia, diseño y desarrollo web/software.
- 23–38: Identidad gráfica y experiencias digitales.
- 38–52: Automatización, herramientas de IA y procesos más eficientes.
- 52–65: Proyectos y cierre: «Diseñamos soluciones, desarrollamos confianza». CTA: Agendar asesoría.

**Nota:** esta entrega incluye el reproductor, no un video institucional terminado; las imágenes o videos reales requieren materiales originales y autorizados.


## Actualización incremental 4 — medios y enlaces

- `public/images/logo.png`: logotipo oficial Elyon Devs (con transparencia de preferencia). Se adapta al header y al footer sin deformarse.
- `public/videos/home_elyon.mp4`: video institucional reproducible en popup desde el botón central. Si falta, aparece un mensaje al abrirlo.
- `public/images/home/`: miniaturas del portafolio, en WebP, 1200 × 900 px sugeridos: `newton.webp`, `rea-torres.webp`, `logistica-gruas.webp`, `servicio-auditivo.webp`, `makita.webp`, `fitos.webp`.
- `public/images/clientes/`: logos individuales aprobados en PNG con fondo transparente (nombres en `src/data/clients.ts`).
- Las miniaturas y logos faltantes muestran el nombre de la empresa de forma legible hasta subir archivos definitivos. Los pantallazos proporcionados son referencias; no se usaron recortes pequeños como logos finales.
- CTA de WhatsApp: `https://wa.me/527291315625`; el Hero y el enlace de agendar del footer siguen usando `/agendar/`.
- Verifica que la URL `/aviso-de-privacidad/` esté publicada antes de lanzar la web.
- Valida que los casos y marcas (especialmente Makita, LEGO, Mattel y ADT) cuenten con aprobación para mostrarse como clientes.
