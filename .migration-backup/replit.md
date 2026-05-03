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

- **`artifacts/fmly-bzns`** — FMLY BZNS web app (React + Vite + Tailwind v4 + wouter). Ported from a Vercel/v0 project. Marketing/community site with pages for Home, Events, Music, Crew, Merch, Collaborations, Contact, and Cart. Uses shadcn UI primitives, framer-motion, and a localStorage-backed cart. The cart's "Checkout" button calls `POST /api/checkout/session` on the api-server, so both the web and api-server workflows must be running for the full cart flow to work.
- **`artifacts/api-server`** — Shared Express API serving `/api/healthz` and `/api/checkout/session` (demo mode — returns a generated `sessionId` and a `redirectUrl` pointing to `/cart/success`; no real Stripe yet). Used by the FMLY BZNS cart flow.
- **`artifacts/mockup-sandbox`** — Design sandbox for canvas-based UI prototyping. Not started by default.

## Notes for FMLY BZNS

- Fonts: a custom `Fungus` OTF is loaded from `attached_assets/` via `src/fonts.ts`; Inter is loaded via Google Fonts in `index.html`.
- Cart checkout is currently a demo flow. To plug in real Stripe, replace the handler in `artifacts/api-server/src/routes/checkout.ts` and switch the response `mode` to `"stripe"` with a real Stripe Checkout `redirectUrl` — the frontend in `src/pages/CartPage.tsx` already handles both modes.
