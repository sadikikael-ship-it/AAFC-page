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

## Artifacts

### FMLY BZNS (`artifacts/fmly-bzns/`)
- **Type**: React + Vite web app
- **Preview path**: `/`
- **Port**: 22076
- **Description**: FMLY BZNS — a global music & culture collective platform. Features events, music, crew, merch, collaborations, and contact pages. Includes an in-app shopping cart (localStorage-based), event ticket tiers, and a custom Afro-futurist design with decorative rail borders.
- **Key files**:
  - `src/App.tsx` — router (wouter), CartProvider, SiteShell wrapper
  - `src/index.css` — full custom CSS (brand colors, layout, components)
  - `src/fonts.ts` — loads custom Fungus font from `attached_assets/`
  - `src/data/` — static data for events, crew, merch, mixes, collaborators
  - `src/lib/cart.tsx` — localStorage cart context
  - `src/pages/` — route-level page components
  - `src/components/` — shared UI components + shadcn/ui

### API Server (`artifacts/api-server/`)
- **Type**: Express 5 API
- **Preview path**: `/api`
- **Description**: Shared backend server. Currently only has a health endpoint. No database schema defined yet (app is frontend-only with static data).

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Assets

- `attached_assets/Fungus_1777077019582.otf` — custom "Fungus" display font used for headings
