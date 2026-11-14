"use client";

import { useState } from "react";

interface ProjectThumbnailProps { src: string; name: string }

export function ProjectThumbnail({ src, name }: ProjectThumbnailProps) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="project-thumb">
      {failed ? (
        <div className="project-thumb__fallback" role="img" aria-label={`Miniatura pendiente: ${name}`}>
          <span>ELYON / PROYECTO</span>
          <strong>{name}</strong>
          <small>Imagen en preparación</small>
        </div>
      ) : (
        <img src={src} alt={`Vista del proyecto ${name}`} loading="lazy" decoding="async" onError={() => setFailed(true)} />
      )}
    </div>
  );
}
