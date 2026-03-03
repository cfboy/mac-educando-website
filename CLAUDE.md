# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MAC Educando is the marketing website for M Adviser and Consultant Inc., an educational services center in Puerto Rico. It is a single-page React application in Spanish with anchor-based scroll navigation (no router).

## Commands

```bash
pnpm dev          # Start local dev server with HMR
pnpm build        # Type-check (tsc -b) then bundle with Vite
pnpm lint         # Run ESLint
pnpm lint:fix     # Auto-fix ESLint issues
pnpm format       # Format with Prettier
pnpm format:check # Check formatting without writing
pnpm preview      # Preview production build locally
```

Package manager is **pnpm**. Do not use npm or yarn.

## Tech Stack

- React 19 + TypeScript (strict) + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite` plugin, theme tokens in `src/index.css`)
- Framer Motion for scroll/load animations
- shadcn/ui (new-york style) with CVA for component variants
- `cn()` utility from `src/lib/utils.ts` (clsx + tailwind-merge)

## Architecture

Single-page scroll layout. No router — sections use `id` attributes for anchor navigation.

**Page section order** (composed in `App.tsx`):
Navbar → Hero (`#inicio`) → Services (`#servicios`) → About (`#nosotros`) → Contact (`#contacto`) → Footer

**Key directories:**
- `src/components/sections/` — Full-page section components (hero, navbar, services, about, contact, footer)
- `src/components/ui/` — Reusable UI components (shadcn pattern)
- `src/hooks/` — Custom hooks (e.g., `use-theme.ts` for dark/light mode)
- `src/lib/` — Utilities
- `src/assets/images/logos/` — Brand logos (dark/light variants)

**Theme system:** `use-theme` hook manages dark/light mode via `.dark` class on `<html>` + CSS custom properties defined in `src/index.css`. Theme is stored in `localStorage` key `mac-theme`.

**Brand colors:** `mac-green` (primary) and `mac-orange` (accent) scales defined as CSS variables in `src/index.css` `@theme` block.

## Code Conventions

- **No semicolons**, single quotes, trailing commas (es5) — enforced by Prettier with `prettier-plugin-tailwindcss`
- **Import ordering** enforced by `eslint-plugin-import-x`: external packages → internal `@/` aliases, alphabetical within groups, type imports separated
- **Path alias:** `@` maps to `src/` (configured in Vite and tsconfig)
- **File naming:** kebab-case for files, PascalCase for component exports, camelCase for hooks, SCREAMING_SNAKE_CASE for constants
- **Animations pattern:** `motion.div` with `whileInView` + `viewport={{ once: true }}` for scroll-triggered animations; staggered cards use `delay: index * 0.1`

## Deployment

GitHub Actions deploys to GitHub Pages on push to `main`. Custom domain: maceducando.com (CNAME in `public/`). Vite `base` is set to `/mac-educando-website/`.
