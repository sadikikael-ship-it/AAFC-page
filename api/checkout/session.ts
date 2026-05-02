import type { VercelRequest, VercelResponse } from "@vercel/node";
import { randomUUID } from "crypto";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { items, successUrl } = req.body as {
    items?: Array<{ id: string; priceCents: number; qty: number }>;
    successUrl?: string;
    cancelUrl?: string;
  };

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: "Cart is empty" });
  }

  const sessionId = randomUUID();

  return res.json({
    mode: "demo",
    sessionId,
    redirectUrl: successUrl ?? "/",
  });
}
