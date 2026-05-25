# Sablee

Sitio web oficial del equipo **SABLE** — división de STEM Racing República Dominicana. Landing page con estética racing/brutalist, pensada para presentar al crew, la competencia, merchandising, patrocinadores y canales de apoyo.

Idioma por defecto: **español** (conmutación a inglés desde el header o el footer).

## Características

- **Hero** a pantalla completa con imagen del equipo y telemetría animada
- **Equipo** — carrusel de integrantes con swipe, teclado y transiciones de entrada/salida
- **Competencia** — información sobre [STEM Racing RD](https://stemracingrd.com/)
- **Merchandising** — piezas del equipo (no es tienda; no está a la venta)
- **Patrocinadores** — tarjetas de aliados con vista ampliada al hacer clic
- **Modal CTA** — sponsor vs apoyo en Instagram ([@sablee.st](https://www.instagram.com/sablee.st))
- **i18n** — español e inglés
- **Responsive** — móvil, tablet y desktop
- **Accesibilidad** — respeta `prefers-reduced-motion`

## Aliados actuales

| Aliado | Logo |
|--------|------|
| Solvex | Socio técnico |
| Motoruedas | Aliado |
| RBW Auto Import | Aliado |
| Apolo 27 GT | Aliado |
| Junta Municipal San Luis | Aliado institucional |

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 6](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- Fuentes: Big Shoulders Display, New Amsterdam, Syncopate, JetBrains Mono

## Requisitos

- Node.js 20+ (recomendado)
- npm 10+

## Instalación

```bash
git clone <url-del-repositorio>
cd sablee
npm install
```

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo (Vite) |
| `npm run build` | Compilación TypeScript + build de producción en `dist/` |
| `npm run preview` | Vista previa del build de producción |

## Estructura del proyecto

```
sablee/
├── public/images/          # Assets estáticos (logos, fotos, merch)
├── src/
│   ├── components/         # Secciones y UI (Hero, Team, About, Shop, Partners, etc.)
│   ├── context/            # Idioma y modal CTA
│   ├── constants/          # Enlaces externos (Instagram)
│   ├── data/               # Datos del equipo
│   ├── hooks/              # Animaciones al scroll (useSectionReveal)
│   ├── i18n/               # Traducciones ES / EN
│   ├── App.tsx
│   └── index.css           # Tema, utilidades y animaciones
├── index.html
├── package.json
└── vite.config.ts
```

## Añadir un patrocinador

1. Coloca el logo en `public/images/`.
2. Edita `src/components/PartnersSection.tsx` — array `PARTNERS`.
3. Añade las claves de traducción en `src/i18n/translations.ts` (`partners.*-label`).
4. Usa `lightPad: true` si el logo es oscuro y necesita fondo blanco en la tarjeta.

## Añadir un integrante del equipo

Edita `src/data/teamMembers.ts` y las traducciones bajo `team.members.<id>.*` en `src/i18n/translations.ts`.

## Variables de entorno

No se requieren variables de entorno para el desarrollo local. Si en el futuro se añaden, usa `.env` (ya ignorado en `.gitignore`) y documenta `.env.example`.

## Build de producción

```bash
npm run build
```

Los archivos listos para desplegar quedan en `dist/`. Compatible con hosting estático (Vercel, Netlify, GitHub Pages, etc.).

## Licencia

Proyecto privado del equipo SABLE. Todos los derechos reservados.
