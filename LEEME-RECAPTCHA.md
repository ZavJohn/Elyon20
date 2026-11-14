# Elyon Devs 2.0 — Corrección de reCAPTCHA en Contacto

## Diagnóstico

En la consola de producción se observó: `script: true`, `googleAPI: 'object'`, `contenedor: true`, `widget: false`.
Esto confirma que existe el contenedor y la API de Google, pero no se ha insertado el iframe de la casilla. No demuestra por sí solo una causa única; el ajuste refuerza la sincronización de la inicialización.

## Cambio

Solo se modifica `src/components/contact/ContactForm.tsx`. La casilla se crea mediante `grecaptcha.render()` cuando la API está lista; se usa `grecaptcha.ready()` y una espera limitada para evitar la carrera entre el script y React.

## Aplicar (desde la raíz del proyecto, una sola vez)

```bash
patch --dry-run -p1 < ajustes-elyon-devs-v3.patch
patch -p1 < ajustes-elyon-devs-v3.patch
npm run build
```

Ejecutar el segundo comando **solo si la prueba anterior no tiene errores**. Luego publicar:

```bash
git add src/components/contact/ContactForm.tsx
git commit -m "fix: inicializar recaptcha al estar lista la API"
git push origin main
```

En Hostinger esperar la implementación nueva; abrir `/contacto` en ventana privada y comprobar la casilla, resolverla y hacer un envío real.

Si la casilla sigue sin aparecer, buscar en la consola el mensaje `Error al renderizar reCAPTCHA` o revisar bloqueos del navegador; compartir ese error sin revelar claves.

No cambiar `RECAPTCHA_SECRET_KEY`; debe seguir siendo una variable privada del servidor. Las variables `NEXT_PUBLIC_` se incorporan en la compilación.
