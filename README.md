# Sitio Dr. Eduardo Lanza — Abogado Penalista (CABA)

Sitio estático (HTML + CSS, sin frameworks ni build) con las 16 páginas del estudio.

## Estructura

```
index.html                                       Home
defensa-abuso-sexual.html
defensa-urgente-excarcelaciones.html
hostigamiento-y-maltrato.html
estafas-y-defraudaciones.html
delitos-contra-la-administracion-publica.html
delitos-economicos-y-contrabando.html
civil-danos-y-perjuicios.html
otras-areas.html
sobre-el-dr-lanza.html
contacto.html
css/estilos.css                                  Tokens de identidad + componentes compartidos
lesiones-y-delitos-culposos/
  index.html                                     Hub
  accidentes-de-transito.html
  accidentes-laborales.html
  mala-praxis.html
  lesiones-por-agresion.html
```

No hay build ni dependencias: es HTML/CSS plano, listo para servir tal cual.

## Deploy en Netlify

1. Conectar este repositorio de GitHub en Netlify ("Add new site" → "Import an existing project").
2. Build command: dejar vacío.
3. Publish directory: `.` (raíz del repo).
4. Deploy.

## Notas

- Todos los botones de WhatsApp usan el número real (`https://wa.me/5491126997557`) con mensajes pre-cargados distintos por página.
- El botón "Llamá ya" usa `tel:+541156076398` (línea 24hs).
- Las fotos y el video de Home/Sobre el Dr. Lanza son placeholders de stock — pendiente sesión de fotos/video real.
- Los ítems de nav "Defensa" y "Víctimas" son categorías sin página propia todavía (quedan como `#`).
