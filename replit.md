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

- `artifacts/fmly-bzns` — FMLY BZNS marketing site (React + Vite, wouter routing). Ported from a Next.js app (Vercel/v0 import). Frontend-only; no backend or DB. Pages: `/`, `/about`, `/andreasone`, `/community`, `/crew`, `/events`, `/join`, `/media`, `/partnerships`, `/shop`. Visual identity preserved via plain CSS in `src/index.css` (no Tailwind classes are used by the app code).
- `artifacts/api-server` — scaffolded Express API server (no routes yet beyond healthcheck).
- `artifacts/mockup-sandbox` — scaffolded design sandbox.
