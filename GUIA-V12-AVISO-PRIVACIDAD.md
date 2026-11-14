# Elyon Devs 2.0 — V12 · Aviso de privacidad

Nueva ruta: `/aviso-de-privacidad`. No modifica el Home, galería ni Servicios.

## Antes de publicar: datos indispensables

1. Completar `src/data/privacy.ts` con el **nombre o razón social legal exacta** del responsable y su **domicilio completo**. `Elyon Devs` solo figura como marca comercial mientras no se confirme el responsable. El domicilio es requerido por el art. 15 de la LFPDPPP; que el sitio atienda en todo México no sustituye ese domicilio.
2. Revisar que `contacto@elyondevs.com` sea un canal atendido para derechos ARCO y designar a la persona/departamento responsable.
3. Verificar proveedores realmente utilizados (Resend, Calendly, WhatsApp, reCAPTCHA, GA4/GTM, servicios de hosting); desactivar o ajustar las cláusulas que no correspondan y revisar transferencias y contratos con encargados.
4. No activar etiquetas analíticas o de marketing no esenciales sin instrumentar el aviso y los controles de preferencias/consentimiento que resulten exigibles.
5. Confirmar la forma de obtener autorizaciones de imagen y voz en producciones, podcasts y transmisiones.
6. Revisar el aviso con asesoría jurídica antes de publicarlo, particularmente los tratamientos de BOCCA para clientes y eventuales datos personales sensibles.
7. El aviso de SIAuditivo proporcionado como referencia no pudo consultarse desde el origen, por lo que no se copió ni se atribuyó redacción de ese sitio. Se utilizó como base la LFPDPPP vigente con última reforma DOF 14-11-2025.

## Integración

- `src/app/aviso-de-privacidad/page.tsx`: página con cabecera interior y aviso integral.
- `src/app/aviso-de-privacidad/privacidad.css`: estilos locales Bootstrap + identidad Elyon.
- `src/data/privacy.ts`: datos de identidad legal a confirmar.
- `src/data/site.ts`: URL interna `/aviso-de-privacidad`.
- `src/components/layout/Footer.tsx`: enlace interno sin abrir otra pestaña.
- `src/components/contact/ContactForm.tsx`: aviso breve y casilla de lectura.
- `src/app/contacto/contacto.css`: estilos del aviso breve.

## Prueba

```bash
patch --dry-run -p1 < ajustes-elyon-devs-v3.patch
patch -p1 < ajustes-elyon-devs-v3.patch
npm run dev
```

Abrir `http://localhost:3000/aviso-de-privacidad`. No aplicar dos veces el mismo parche.

Base jurídica de referencia: Ley Federal de Protección de Datos Personales en Posesión de los Particulares, texto de Cámara de Diputados, última reforma DOF 14-11-2025, arts. 15, 16, 18, 21-36.
# Elyon Devs 2.0 — V12 · Aviso de privacidad

Nueva ruta: `/aviso-de-privacidad`. No modifica el Home, galería ni Servicios.

## Antes de publicar: datos indispensables

1. Completar `src/data/privacy.ts` con el **nombre o razón social legal exacta** del responsable y su **domicilio completo**. `Elyon Devs` solo figura como marca comercial mientras no se confirme el responsable. El domicilio es requerido por el art. 15 de la LFPDPPP; que el sitio atienda en todo México no sustituye ese domicilio.
2. Revisar que `contacto@elyondevs.com` sea un canal atendido para derechos ARCO y designar a la persona/departamento responsable.
3. Verificar proveedores realmente utilizados (Resend, Calendly, WhatsApp, reCAPTCHA, GA4/GTM, servicios de hosting); desactivar o ajustar las cláusulas que no correspondan y revisar transferencias y contratos con encargados.
4. No activar etiquetas analíticas o de marketing no esenciales sin instrumentar el aviso y los controles de preferencias/consentimiento que resulten exigibles.
5. Confirmar la forma de obtener autorizaciones de imagen y voz en producciones, podcasts y transmisiones.
6. Revisar el aviso con asesoría jurídica antes de publicarlo, particularmente los tratamientos de BOCCA para clientes y eventuales datos personales sensibles.
7. El aviso de SIAuditivo proporcionado como referencia no pudo consultarse desde el origen, por lo que no se copió ni se atribuyó redacción de ese sitio. Se utilizó como base la LFPDPPP vigente con última reforma DOF 14-11-2025.

## Integración

- `src/app/aviso-de-privacidad/page.tsx`: página con cabecera interior y aviso integral.
- `src/app/aviso-de-privacidad/privacidad.css`: estilos locales Bootstrap + identidad Elyon.
- `src/data/privacy.ts`: datos de identidad legal a confirmar.
- `src/data/site.ts`: URL interna `/aviso-de-privacidad`.
- `src/components/layout/Footer.tsx`: enlace interno sin abrir otra pestaña.
- `src/components/contact/ContactForm.tsx`: aviso breve y casilla de lectura.
- `src/app/contacto/contacto.css`: estilos del aviso breve.

## Prueba

```bash
patch --dry-run -p1 < ajustes-elyon-devs-v3.patch
patch -p1 < ajustes-elyon-devs-v3.patch
npm run dev
```

Abrir `http://localhost:3000/aviso-de-privacidad`. No aplicar dos veces el mismo parche.

Base jurídica de referencia: Ley Federal de Protección de Datos Personales en Posesión de los Particulares, texto de Cámara de Diputados, última reforma DOF 14-11-2025, arts. 15, 16, 18, 21-36.
