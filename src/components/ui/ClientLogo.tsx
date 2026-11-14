"use client";

import { useState } from "react";

export function ClientLogo({ name, src }: { name: string; src: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="clients-logo">
      {failed ? <strong className="clients-logo__fallback">{name}</strong> : (
        <img src={src} alt={`Logotipo de ${name}`} loading="lazy" decoding="async" onError={() => setFailed(true)} />
      )}
    </div>
  );
}
