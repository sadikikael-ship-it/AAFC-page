# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

- **`artifacts/fmly-bzns`** — FMLY BZNS web app (React + Vite + Tailwind v4 + wouter). Ported from a Vercel/v0 project. Frontend-only marketing/community site with pages for Home, Events, Music, Crew, Merch, Collaborations, Contact, and Cart. Uses shadcn UI primitives, framer-motion, and a localStorage-backed cart.
- **`artifacts/api-server`** — Shared Express API scaffold (currently only `/api/healthz`). Not started by default; the FMLY BZNS app does not require it.
- **`artifacts/mockup-sandbox`** — Design sandbox for canvas-based UI prototyping.

## Notes for FMLY BZNS

- Fonts: a custom `Fungus` OTF is loaded from `attached_assets/` via `src/fonts.ts`; Inter is loaded via Google Fonts in `index.html`.
- `src/pages/CartPage.tsx` POSTs to `/api/checkout/session` to start a checkout. No backend route is implemented for this in the current scaffold (it was not in the imported source either) — wiring it up to the api-server is left for a future task if real checkout is desired.
