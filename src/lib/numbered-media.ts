import { readdir } from "node:fs/promises";
import { join } from "node:path";

/**
 * Detecta imágenes numeradas (1.png, 2.png, 3.png...) sin listas manuales.
 * Se ejecuta en el servidor de Next.js; el navegador solo recibe las rutas.
 */
export async function getNumberedImages(folder: "clientes" | "home") {
  let filenames: string[];

  try {
    filenames = await readdir(join(process.cwd(), "public", "images", folder));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }

  return filenames
    .filter((filename) => /^[1-9]\d*\.png$/i.test(filename))
    .map((filename) => ({
      number: Number(filename.slice(0, -4)),
      src: `/images/${folder}/${filename}`,
    }))
    .filter((file) => Number.isSafeInteger(file.number))
    .sort((a, b) => a.number - b.number);
}
