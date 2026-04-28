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

- `artifacts/fmly-bzns` — FMLY BZNS marketing site (React + Vite, wouter routing). Pages: `/`, `/events`, `/music`, `/crew`, `/merch`, `/collaborations`, `/contact`, `/cart`, `/cart/success`. Visual identity preserved via plain CSS in `src/index.css` (no Tailwind classes are used by the app code).
  - Cart: `lib/cart.tsx` provides `CartProvider` + `useCart` (localStorage key `fmlybzns:cart:v1`). Header shows `.cartBadge` count. Items have `kind: "ticket" | "merch"`.
  - Event tickets: `data/events.ts` events may declare `tiers: TicketTier[]`. `EventCard` opens `EventDetailsModal` (full info + Add to Cart per tier) when tiers exist; otherwise falls back to `learnMoreUrl` / `ticketUrl`.
  - Merch: `data/merch.ts` items carry `priceCents`. `MerchCard` adds to cart with "Added ✓" feedback.
  - Checkout: `CartPage` POSTs to `/api/checkout/session`; in demo mode it navigates to `/cart/success?session=...&mode=demo`.
- `artifacts/api-server` — Express API. Routes: `/health`, `POST /checkout/session` (demo mode by default; switches to Stripe Checkout when `STRIPE_SECRET_KEY` is set and the marked block in `routes/checkout.ts` is uncommented after `pnpm add -w stripe`).
- `artifacts/mockup-sandbox` — scaffolded design sandbox.
