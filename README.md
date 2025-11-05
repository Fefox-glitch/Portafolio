# Portafolio de Fernando Troncoso Ortiz

Proyecto de portafolio personal construido con Vite, React, TypeScript y Tailwind CSS.

## Requisitos
- Node.js `>=18` (Netlify usa Node 18, fijado en `netlify.toml`).
- npm `>=9`.

## Inicio Rápido

```bash
# Instalar dependencias
npm install

# Desarrollo (servidor local con HMR)
npm run dev

# Compilar para producción
npm run build

# Previsualizar la compilación localmente (sirve ./dist)
npm run preview
```

Nota (Windows/PowerShell): si aparece un error de ejecución para `npm.ps1`, usa `npm.cmd` en lugar de `npm`.

## Stack Técnico
- Vite 5 + React + TypeScript
- Tailwind CSS + PostCSS
- Configuración de despliegue: Netlify (`netlify.toml` y `public/_redirects`)

## Estructura del Proyecto

```
project/
├─ index.html            # SEO básico, idioma, meta etiquetas
├─ netlify.toml          # Configuración de build y Node 18
├─ public/_redirects     # Reglas de redirección (SPA)
├─ src/                  # Código de la aplicación
│  ├─ main.tsx           # Punto de entrada
│  ├─ App.tsx            # Composición de vistas
│  ├─ components/        # Secciones del portafolio
│  └─ index.css          # Estilos globales (Tailwind)
└─ vite.config.ts        # Configuración de Vite
```

## Desarrollo
- `npm run dev` abre el servidor de desarrollo de Vite.
- Código fuente en `src/`.
- Estilos utilitarios con Tailwind; configura temas en `tailwind.config.js`.

## Construcción y Previsualización
- `npm run build` genera `dist/` con assets optimizados.
- `npm run preview` sirve `dist/` en `http://localhost:4173/`.

## Despliegue en Netlify
1. Conectar el repositorio (`Fefox-glitch/Portafolio`) desde Netlify: New site from Git.
2. Configuración de build:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Entorno:
   - `netlify.toml` define `NODE_VERSION = "18"` en `[build.environment]`.
4. Redirecciones:
   - `public/_redirects` contiene `/* /index.html 200` para SPA.

Cada push a `main` disparará un deploy automático.

## Variables de Entorno
- Prefijo `VITE_` para variables consumidas en el cliente (ej. `VITE_API_URL`).
- En Netlify, configúralas en Site settings → Build & deploy → Environment.

## Flujo Git
```bash
# Rama principal
git branch -M main

# Configurar remoto y subir
git remote add origin https://github.com/Fefox-glitch/Portafolio.git
git push -u origin main

# Publicar cambios futuros
git add . && git commit -m "feat: ..." && git push
```

## Accesibilidad y SEO
- `index.html` incluye idioma `es`, título y meta etiquetas (description, og, twitter).
- `Header` añade roles/atributos ARIA para navegación y menú móvil.

## Resolución de Problemas
- PowerShell Execution Policy: si `npm` falla, usa `npm.cmd`.
- Browserslist: para actualizar estadísticas, ejecuta `npx update-browserslist-db@latest` (opcional).

## Licencia
Este portafolio es de uso personal de Fernando Troncoso Ortiz.