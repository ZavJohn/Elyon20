"use client";

import { useState } from "react";
import { site } from "@/data/site";

interface BrandLogoProps { footer?: boolean }

export function BrandLogo({ footer = false }: BrandLogoProps) {
  const [error, setError] = useState(false);
  return (
    <a className={`brand ${footer ? "brand--footer" : ""}`} href="/" aria-label="Elyon Devs, ir al inicio">
      {!error ? (
        <img
          className={`brand-logo ${footer ? "brand-logo--footer" : ""}`}
          src={site.logoUrl}
          alt="Elyon Devs"
          width={190}
          height={64}
          onError={() => setError(true)}
        />
      ) : (
        <>
          <span className="brand-symbol" aria-hidden="true"><span /></span>
          <span className="brand-text">elyon<span>devs</span><i>.</i></span>
        </>
      )}
    </a>
  );
}
