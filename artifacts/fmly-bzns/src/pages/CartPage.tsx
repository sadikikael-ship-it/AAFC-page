import { useState } from "react";
import { Link, useLocation } from "wouter";
import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useCart, formatPrice } from "@/lib/cart";
import { merch } from "@/data/merch";

const SHOPIFY_DOMAIN = "5cbegm-kb.myshopify.com";

export default function CartPage() {
  const { items, totalCents, count, setQty, remove } = useCart();
  const [, navigate] = useLocation();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const apiBase = import.meta.env.BASE_URL.replace(/\/$/, "");

  const merchItems = items.filter((it) => it.kind === "merch");
  const ticketItems = items.filter((it) => it.kind === "ticket");

  const buildShopifyCheckoutUrl = (): string | null => {
    const lines: string[] = [];
    const attrs: string[] = [];
    for (const it of merchItems) {
      // cart id format: `merch:<merchId>:<size>` or `merch:<merchId>`
      const [, merchId] = it.id.split(":");
      const product = merch.find((m) => m.id === merchId);
      if (!product?.shopifyVariantId) continue;
      lines.push(`${product.shopifyVariantId}:${it.qty}`);
      const size = it.metadata?.size;
      if (size) {
        const key = `Size — ${product.name} (${product.collection})`;
        attrs.push(`attributes[${encodeURIComponent(key)}]=${encodeURIComponent(size)}`);
      }
    }
    if (lines.length === 0) return null;
    const query = attrs.length ? `?${attrs.join("&")}` : "";
    return `https://${SHOPIFY_DOMAIN}/cart/${lines.join(",")}${query}`;
  };

  const handleCheckout = async () => {
    if (items.length === 0) return;
    setSubmitting(true);
    setError(null);

    // If there's any merch in the cart, route to Shopify.
    if (merchItems.length > 0) {
      const url = buildShopifyCheckoutUrl();
      if (!url) {
        setError("Could not build Shopify checkout — missing variant info.");
        setSubmitting(false);
        return;
      }
      window.location.href = url;
      return;
    }

    // Tickets-only → existing Stripe flow.
    try {
      const res = await fetch(`/api/checkout/session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: ticketItems.map((it) => ({
            id: it.id,
            kind: it.kind,
            name: it.name,
            subtitle: it.subtitle,
            priceCents: it.priceCents,
            qty: it.qty,
            metadata: it.metadata,
          })),
          successUrl: `${apiBase}/cart/success`,
          cancelUrl: `${apiBase}/cart`,
        }),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Checkout failed (${res.status})`);
      }
      const data = (await res.json()) as {
        mode: "demo" | "stripe";
        sessionId: string;
        redirectUrl: string;
      };
      if (data.mode === "stripe") {
        window.location.href = data.redirectUrl;
      } else {
        navigate(`/cart/success?session=${encodeURIComponent(data.sessionId)}&mode=demo`);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Checkout failed");
      setSubmitting(false);
    }
  };

  const hasMerch = merchItems.length > 0;
  const hasTickets = ticketItems.length > 0;
  const mixed = hasMerch && hasTickets;

  return (
    <main>
      <SiteHeader />
      <section className="section cartHeader">
        <p className="eyebrow">Cart</p>
        <h1>Your Cart</h1>
        <p className="heroLead">
          {count > 0
            ? `${count} item${count === 1 ? "" : "s"} ready for checkout.`
            : "Your cart is empty. Add tickets or merch to get started."}
        </p>
      </section>

      <section className="section cartSection">
        {items.length === 0 ? (
          <div className="cartEmpty">
            <p>Nothing here yet.</p>
            <div className="buttonRow">
              <Link href="/events" className="ctaBtn">
                Browse Events
              </Link>
              <Link href="/merch" className="smallBtn">
                Shop Merch
              </Link>
            </div>
          </div>
        ) : (
          <div className="cartGrid">
            <ul className="cartLines">
              {items.map((item) => (
                <li key={item.id} className="cartLine">
                  {item.image ? (
                    <div
                      className="cartLineImage"
                      style={{ backgroundImage: `url(${item.image})` }}
                      role="img"
                      aria-label={item.name}
                    />
                  ) : (
                    <div className="cartLineImage cartLineImage--placeholder" />
                  )}
                  <div className="cartLineBody">
                    <p className="eyebrow">
                      {item.kind === "ticket" ? "Ticket" : "Merch"}
                    </p>
                    <h3 className="cartLineName">{item.name}</h3>
                    {item.subtitle ? (
                      <p className="cartLineSub">{item.subtitle}</p>
                    ) : null}
                    <p className="cartLinePrice">
                      {formatPrice(item.priceCents)}{" "}
                      <span className="cartLineEach">each</span>
                    </p>
                  </div>
                  <div className="cartLineControls">
                    <div className="qtyRow" aria-label="Quantity">
                      <button
                        type="button"
                        className="qtyBtn"
                        onClick={() => setQty(item.id, item.qty - 1)}
                        aria-label="Decrease quantity"
                      >
                        <FaMinus aria-hidden focusable="false" />
                      </button>
                      <span className="qtyValue">{item.qty}</span>
                      <button
                        type="button"
                        className="qtyBtn"
                        onClick={() => setQty(item.id, item.qty + 1)}
                        aria-label="Increase quantity"
                      >
                        <FaPlus aria-hidden focusable="false" />
                      </button>
                    </div>
                    <p className="cartLineSubtotal">
                      {formatPrice(item.priceCents * item.qty)}
                    </p>
                    <button
                      type="button"
                      className="cartLineRemove"
                      onClick={() => remove(item.id)}
                      aria-label={`Remove ${item.name}`}
                    >
                      <FaTrashAlt aria-hidden focusable="false" />
                      <span>Remove</span>
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <aside className="cartSummary" aria-label="Order summary">
              <h2>Order summary</h2>
              <dl className="cartSummaryList">
                <div>
                  <dt>Subtotal</dt>
                  <dd>{formatPrice(totalCents)}</dd>
                </div>
                <div>
                  <dt>Taxes & fees</dt>
                  <dd>Calculated at checkout</dd>
                </div>
                <div className="cartSummaryTotal">
                  <dt>Total</dt>
                  <dd>{formatPrice(totalCents)}</dd>
                </div>
              </dl>
              <button
                type="button"
                className="ctaBtn cartCheckoutBtn"
                onClick={handleCheckout}
                disabled={submitting}
              >
                {submitting
                  ? "Processing…"
                  : hasMerch
                    ? "Checkout on Shopify"
                    : "Checkout"}
              </button>
              {error ? <p className="cartError">{error}</p> : null}
              {mixed ? (
                <p className="cartNote">
                  Tickets and merch use separate checkouts. This button will
                  send your merch to Shopify — your tickets will stay in the
                  cart so you can check them out separately.
                </p>
              ) : hasMerch ? (
                <p className="cartNote">
                  You'll be redirected to Shopify to complete your merch
                  purchase securely.
                </p>
              ) : (
                <p className="cartNote">
                  Demo mode: no real payment is captured. Once Stripe keys are
                  added, this button will redirect to a secure Stripe-hosted
                  checkout.
                </p>
              )}
            </aside>
          </div>
        )}
      </section>

      <SiteFooter />
    </main>
  );
}
