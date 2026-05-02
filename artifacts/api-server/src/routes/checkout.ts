import { Router, type IRouter } from "express";
import { randomUUID } from "crypto";

const router: IRouter = Router();

router.post("/checkout/session", (req, res) => {
  const { items, successUrl, cancelUrl } = req.body as {
    items: Array<{
      id: string;
      kind: string;
      name: string;
      subtitle?: string;
      priceCents: number;
      qty: number;
      metadata?: Record<string, string>;
    }>;
    successUrl: string;
    cancelUrl: string;
  };

  if (!Array.isArray(items) || items.length === 0) {
    res.status(400).json({ error: "Cart is empty" });
    return;
  }

  const sessionId = randomUUID();

  res.json({
    mode: "demo",
    sessionId,
    redirectUrl: successUrl,
  });
});

export default router;
