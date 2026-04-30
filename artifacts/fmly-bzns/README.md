# FMLY BZNS

Vite + React + Tailwind v4 web app.

## Run locally

```sh
pnpm install
pnpm --filter @workspace/fmly-bzns run dev
```

Defaults to `http://localhost:5173/` when `PORT` is not set.

## Build

```sh
pnpm --filter @workspace/fmly-bzns run build
```

Output is written to `artifacts/fmly-bzns/dist/public/`.

## Deploy to Vercel

This artifact ships with a `vercel.json`. To deploy:

1. Push this repo to GitHub.
2. In Vercel, **Add New… → Project**, import the repo.
3. Set **Root Directory** to `artifacts/fmly-bzns`.
4. Vercel will pick up `vercel.json` automatically — framework is `vite`, build runs at the monorepo root via pnpm, and the SPA rewrites send every path to `index.html`.
5. Click **Deploy**.

No environment variables are required for the static frontend. If you wire the
cart's `POST /api/checkout/session` to a real backend later (see
`artifacts/api-server`), point the frontend at it via `VITE_API_BASE` (you'll
need to add that to `src/pages/CartPage.tsx`).

## Deploy on Replit

The same code also runs as a Replit artifact via the workflow that's already
configured here. The Replit-specific Vite plugins only activate when `REPL_ID`
is set, so they don't run in the Vercel build.
