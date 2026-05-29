import { Router, type IRouter } from "express";
import { randomUUID } from "crypto";
import { z } from "zod/v4";

const router: IRouter = Router();

const CheckoutItemSchema = z.object({
  id: z.string(),
  kind: z.string().optional(),
  name: z.string().optional(),
  subtitle: z.string().nullable().optional(),
  priceCents: z.number().int().nonnegative().optional(),
  qty: z.number().int().positive().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

const CheckoutSessionRequestSchema = z.object({
  items: z.array(CheckoutItemSchema).min(1),
  successUrl: z.string().min(1),
  cancelUrl: z.string().min(1).optional(),
});

router.post("/checkout/session", (req, res) => {
  const parsed = CheckoutSessionRequestSchema.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ issues: parsed.error.issues }, "Invalid checkout payload");
    res.status(400).json({
      error: "Invalid checkout payload",
      issues: parsed.error.issues,
    });
    return;
  }

  const sessionId = randomUUID();
  const successUrl = parsed.data.successUrl || "/cart/success";
  const separator = successUrl.includes("?") ? "&" : "?";
  const redirectUrl = `${successUrl}${separator}session=${encodeURIComponent(
    sessionId,
  )}&mode=demo`;

  req.log.info(
    { sessionId, itemCount: parsed.data.items.length },
    "Created demo checkout session",
  );

  res.json({
    mode: "demo" as const,
    sessionId,
    redirectUrl,
  });
});

export default router;
