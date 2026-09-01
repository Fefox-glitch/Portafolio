<div align="center">

# Fernando Troncoso · Software Portfolio

**Portafolio bilingüe enfocado en ingeniería de software, IA aplicada y automatización.**

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

## Sobre el proyecto

Este sitio presenta mi experiencia y proyectos como sistemas completos, no únicamente como interfaces. La narrativa está orientada a reclutadores y equipos técnicos: cada caso explica el problema abordado, el resultado técnico y las tecnologías utilizadas.

La interfaz utiliza español latinoamericano por defecto e incorpora un selector persistente para inglés.

## Proyectos destacados

| Proyecto | Enfoque | Tecnologías principales |
| --- | --- | --- |
| [Enterprise RAG Assistant](https://github.com/Fefox-glitch/Enterprise-RAG-Assistant) | Inteligencia documental con respuestas citadas | Next.js, FastAPI, pgvector, OpenAI, Docker |
| [VideoVault](https://github.com/Fefox-glitch/VaultVideo-Portfolio) | Procesamiento multimedia asíncrono | Next.js, PostgreSQL, Redis, FFmpeg, Playwright |
| [QuímicaPro](https://github.com/Fefox-glitch/Qu-micaPro) | Experiencia educativa de escritorio | Python, PyQt5, Supabase, GitHub Actions |

## Experiencia de usuario

- Identidad visual oscura con alto contraste y acentos propios.
- Diseño responsive desde navegación hasta casos de estudio.
- Contenido completo en español e inglés.
- Navegación semántica y enlace para saltar al contenido.
- Estados de foco visibles y soporte para `prefers-reduced-motion`.
- Metadatos Open Graph, descripción SEO, favicon propio y tema del navegador.
- Enlaces directos a código, LinkedIn y correo electrónico.

## Desarrollo local

Requiere Node.js 18 o posterior y npm 9 o posterior.

```bash
git clone https://github.com/Fefox-glitch/Portafolio.git
cd Portafolio
npm install
npm run dev
```

La aplicación estará disponible en la URL indicada por Vite, normalmente `http://localhost:5173`.

## Validación

```bash
npm run lint
npm run typecheck
npm run build
```

El build de producción se genera en `dist/`. Ninguna variable de entorno es necesaria para mostrar el portafolio.

## Despliegue

El repositorio incluye configuración para Netlify:

- comando de build: `npm run build`;
- directorio publicado: `dist`;
- redirección SPA: `/* /index.html 200`.

Cada push a la rama configurada en Netlify puede generar un despliegue automático.

## Estructura

```text
src/
├── components/
│   ├── Header.tsx       # Navegación responsive y selector de idioma
│   ├── Hero.tsx         # Propuesta de valor y foco profesional
│   ├── Projects.tsx     # Casos de estudio seleccionados
│   ├── Skills.tsx       # Áreas de especialidad
│   ├── Experience.tsx   # Trayectoria y formación
│   └── Contact.tsx      # Conversión y enlaces profesionales
├── App.tsx              # Estado de idioma y composición
└── index.css            # Sistema visual y accesibilidad
```

## Autor

Fernando Troncoso Ortiz · [GitHub](https://github.com/Fefox-glitch) · [LinkedIn](https://www.linkedin.com/in/fernando-troncoso-ortiz-91119111b/)

Este repositorio contiene mi portafolio personal. El contenido biográfico y la identidad visual no se ofrecen como plantilla de uso general.
