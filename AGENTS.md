# Repository Guidelines

## Project Structure & Module Organization

This repository is a Vite + React + TypeScript + MDX notebook for Quantum Field Theory notes.

- `src/main.tsx` bootstraps React and imports global styles.
- `src/App.tsx` defines hash-routed pages.
- `src/pages/` contains top-level views such as Home, Chapters, and Topics.
- `src/articles/` contains long-form MDX chapter content.
- `src/components/` contains shared layout, MDX helpers, and interactive figures.
- `src/data/` stores chapter and topic metadata.
- `src/index.css` and `src/article-upgrades.css` define global and article-specific styling.
- `public/` contains static assets such as `favicon.svg`.
- `dist/` and `node_modules/` are generated and should not be edited manually.

## Build, Test, and Development Commands

- `npm install` installs dependencies. If the global npm cache has permission issues, use `npm install --cache /tmp/qft-npm-cache`.
- `npm run dev` starts the local Vite server.
- `npm run build` runs TypeScript project checks and creates a production build in `dist/`.
- `npm run lint` runs ESLint across the repository.
- `npm run preview` serves the production build locally for final checks.

## Coding Style & Naming Conventions

Use TypeScript and React function components. Keep components focused and prefer existing patterns in `src/components/` before adding abstractions. Use 2-space indentation, single quotes, and no semicolons, matching the current code. Name React components in `PascalCase`, data files in descriptive lower-case names, and route slugs in kebab-case, for example `relativistic-quantum-mechanics`.

MDX articles should import `ArticleLayout` and define a clear `toc` array matching visible section IDs.

## Testing Guidelines

There is no dedicated test framework yet. Treat `npm run lint` and `npm run build` as the required verification gate for every change. For UI or styling changes, run `npm run dev` and inspect the affected routes in a browser, including a narrow mobile viewport when equations or grids are touched.

## Commit & Pull Request Guidelines

This checkout has no git history, so no existing commit convention can be inferred. Use concise imperative commit messages such as `Add QFT contributor guide` or `Refine chapter layout`. Pull requests should include a short summary, verification commands run, affected routes, and screenshots for visual changes.

## Content Guidance

Keep explanations precise and mathematically readable. Use KaTeX math in MDX for equations, avoid raw HTML unless layout requires it, and keep chapter metadata in `src/data/chapters.ts` synchronized with new article routes.
