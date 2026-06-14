# QFT Learning Notebook

A Vite, React, TypeScript, and MDX website for personal Quantum Field Theory notes.

## What is included

- Hash-routed static app suitable for local use or GitHub Pages.
- MDX chapter pages with KaTeX math rendering.
- Local TypeScript metadata for chapters and study topics.
- Distill-inspired reading layout with sidenotes, callouts, and interactive teaching figures.
- First chapter: Relativistic Quantum Mechanics.

## Local development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run lint
npm run build
```

## Content structure

- `src/articles/` contains long-form MDX chapters.
- `src/data/chapters.ts` stores chapter metadata.
- `src/data/topics.ts` stores the study map.
- `src/components/` contains the reader layout and interactive figures.
