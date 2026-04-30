import { Router, type IRouter, type Request, type Response } from "express";
import { randomBytes } from "node:crypto";

interface CheckoutItemInput {
  id?: unknown;
  kind?: unknown;
  name?: unknown;
  subtitle?: unknown;
  priceCents?: unknown;
  qty?: unknown;
  metadata?: unknown;
}

interface NormalizedItem {
  id: string;
  kind: string;
  name: string;
  subtitle?: string;
  priceCents: number;
  qty: number;
  metadata?: Record<string, string>;
}

function normalizeItems(raw: unknown): NormalizedItem[] | null {
  if (!Array.isArray(raw)) return null;
  const out: NormalizedItem[] = [];
  for (const entry of raw) {
    if (!entry || typeof entry !== "object") return null;
    const it = entry as CheckoutItemInput;
    if (
      typeof it.id !== "string" ||
      typeof it.name !== "string" ||
      typeof it.priceCents !== "number" ||
      typeof it.qty !== "number" ||
      it.qty < 1 ||
      it.priceCents < 0
    ) {
      return null;
    }
    const item: NormalizedItem = {
      id: it.id,
      kind: typeof it.kind === "string" ? it.kind : "item",
      name: it.name,
      priceCents: Math.round(it.priceCents),
      qty: Math.floor(it.qty),
    };
    if (typeof it.subtitle === "string") item.subtitle = it.subtitle;
    if (
      it.metadata &&
      typeof it.metadata === "object" &&
      !Array.isArray(it.metadata)
    ) {
      const md: Record<string, string> = {};
      for (const [k, v] of Object.entries(it.metadata as Record<string, unknown>)) {
        if (typeof v === "string") md[k] = v;
      }
      item.metadata = md;
    }
    out.push(item);
  }
  return out;
}

const router: IRouter = Router();

/**
 * Creates a checkout session.
 *
 * Two modes:
 * - DEMO mode (default — no `STRIPE_SECRET_KEY` env): returns a fake session id
 *   so the frontend can navigate to its success page and confirm the flow.
 * - STRIPE mode (when `STRIPE_SECRET_KEY` is set): creates a real Stripe
 *   Checkout session and returns its hosted URL. The frontend redirects to it.
 *
 * Wire-up for live Stripe: install `stripe` (`pnpm add -w stripe`), set
 * `STRIPE_SECRET_KEY` in env vars, and uncomment the marked block below.
 */
router.post("/session", async (req: Request, res: Response) => {
  const items = normalizeItems((req.body as { items?: unknown })?.items);
  if (!items || items.length === 0) {
    res.status(400).json({ error: "No items provided" });
    return;
  }

  const successUrl =
    typeof req.body?.successUrl === "string" ? req.body.successUrl : "/cart/success";
  const cancelUrl =
    typeof req.body?.cancelUrl === "string" ? req.body.cancelUrl : "/cart";

  const totalCents = items.reduce((acc, it) => acc + it.priceCents * it.qty, 0);
  const sessionId = `demo_${randomBytes(8).toString("hex")}`;

  const stripeKey = process.env["STRIPE_SECRET_KEY"];
  if (!stripeKey) {
    // DEMO MODE — simulate a checkout session.
    res.json({
      mode: "demo",
      sessionId,
      redirectUrl: `${successUrl}?session=${encodeURIComponent(sessionId)}&mode=demo`,
      totalCents,
      items,
    });
    return;
  }

  // LIVE STRIPE MODE — once `stripe` is installed and the env var is set:
  //
  //   const Stripe = (await import("stripe")).default;
  //   const stripe = new Stripe(stripeKey);
  //   const session = await stripe.checkout.sessions.create({
  //     mode: "payment",
  //     line_items: items.map((it) => ({
  //       price_data: {
  //         currency: "usd",
  //         unit_amount: it.priceCents,
  //         product_data: {
  //           name: it.name,
  //           description: it.subtitle,
  //           metadata: it.metadata,
  //         },
  //       },
  //       quantity: it.qty,
  //     })),
  //     success_url: `${successUrl}?session={CHECKOUT_SESSION_ID}`,
  //     cancel_url: cancelUrl,
  //   });
  //   res.json({ mode: "stripe", sessionId: session.id, redirectUrl: session.url });
  //   return;

  // Until then, fall back to demo mode so the frontend keeps working.
  res.json({
    mode: "demo",
    sessionId,
    redirectUrl: `${successUrl}?session=${encodeURIComponent(sessionId)}&mode=demo`,
    totalCents,
    items,
    note: "STRIPE_SECRET_KEY is set but Stripe SDK is not yet wired up. See routes/checkout.ts.",
  });
});

export default router;
