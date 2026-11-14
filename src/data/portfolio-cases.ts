import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** Datos del portafolio: public/data/proyectos.json (se leen desde el servidor). */
export interface PortfolioCase {
  id: string;
  name: string;
  client?: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  url?: string;
}

type JsonRecord = Record<string, unknown>;

function isRecord(value: unknown): value is JsonRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function requiredText(item: JsonRecord, key: string): string | null {
  const value = item[key];
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

function safeLink(value: unknown): string | undefined {
  if (typeof value !== "string" || !value.trim()) return undefined;
  const url = value.trim();
  if (/^https?:\/\/[^\s]+$/i.test(url) || /^\/(?!\/)[^\s]*$/.test(url)) return url;
  return undefined;
}

/**
 * Se evalúa al solicitar /proyectos, para que los cambios en el JSON
 * aparezcan sin modificar componentes. En despliegues basados en Git,
 * modificar un archivo del repositorio implica publicar una nueva versión.
 */
export async function getPortfolioCases(): Promise<PortfolioCase[]> {
  const file = join(process.cwd(), "public", "data", "proyectos.json");
  try {
    const parsed: unknown = JSON.parse(await readFile(file, "utf8"));
    if (!isRecord(parsed) || !Array.isArray(parsed.proyectos)) {
      throw new Error("El archivo debe contener un arreglo llamado 'proyectos'.");
    }

    const ids = new Set<string>();
    const result: { project: PortfolioCase; order: number }[] = [];

    parsed.proyectos.forEach((raw: unknown, index: number) => {
      if (!isRecord(raw) || raw.publicado === false) return;
      const id = requiredText(raw, "id");
      const name = requiredText(raw, "nombre");
      const category = requiredText(raw, "tipo");
      const description = requiredText(raw, "descripcion");
      const image = requiredText(raw, "imagen");

      if (!id || !name || !category || !description || !image || ids.has(id)) {
        console.warn(`[Portafolio] Proyecto ${index + 1} omitido: falta un campo obligatorio o el ID está duplicado.`);
        return;
      }
      ids.add(id);

      const tags = Array.isArray(raw.etiquetas)
        ? raw.etiquetas.filter((tag): tag is string => typeof tag === "string" && !!tag.trim()).map((tag) => tag.trim())
        : [];
      const order = typeof raw.orden === "number" && Number.isFinite(raw.orden) ? raw.orden : index + 1;
      result.push({
        project: {
          id,
          name,
          client: requiredText(raw, "cliente") ?? undefined,
          category,
          description,
          image,
          tags,
          url: safeLink(raw.enlace),
        },
        order,
      });
    });

    result.sort((a, b) => a.order - b.order);
    return result.map((entry) => entry.project);
  } catch (error) {
    console.error("[Portafolio] No se pudo leer public/data/proyectos.json:", error);
    return [];
  }
}
