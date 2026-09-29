# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Design system & cover art

The site sits on a fixed three.js stage (`src/site/three/`): lacquered magenta
ribbons behind the hero, pricing and footer, and a hex force-field sphere behind
the process and use-case sections. Dark sections pick their set with
`data-stage="ribbons" | "shield"`; light content lives on `.sheet` panels that
slide over the stage.

Project, case-study and blog images in `public/covers/` are rendered from the
same ribbon scene. To regenerate them after editing `src/site/data/covers.ts`:

```bash
npm run dev          # in one terminal
npm run covers       # in another (uses Edge by default; set CHROME_PATH to use another Chromium)
```
