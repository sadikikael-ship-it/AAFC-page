import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useCart, formatPrice } from "@/lib/cart";

export default function CartPage() {
  const { items, totalCents, count, setQty, remove } = useCart();
  const [, navigate] = useLocation();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const apiBase = import.meta.env.BASE_URL.replace(/\/$/, "");

  // Only tickets live in the internal cart — merch is fully handled by Shopify's drawer.
  const ticketItems = items.filter((it) => it.kind === "ticket");

  // On mount, open the Shopify cart drawer if it's available.
  // If there are no tickets either, send the user to the merch section.
  useEffect(() => {
    const shopifyOpened =
      typeof window.openShopifyCart === "function" && window.openShopifyCart();

    if (!shopifyOpened && ticketItems.length === 0) {
      // Nothing to show — redirect to merch.
      navigate("/merch");
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleCheckout = async () => {
    if (ticketItems.length === 0) return;
    setSubmitting(true);
    setError(null);

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

  // If there are no ticket items, just show a minimal redirect page while
  // the Shopify drawer opens (or the redirect fires).
  if (ticketItems.length === 0) {
    return (
      <main>
        <SiteHeader />
        <section className="section cartHeader">
          <p className="eyebrow">Cart</p>
          <h1>Your Cart</h1>
          <p className="heroLead">Opening your cart…</p>
        </section>
        <section className="section cartSection">
          <div className="cartEmpty">
            <p>Your merch cart is managed by Shopify.</p>
            <div className="buttonRow">
              <Link href="/merch" className="ctaBtn">
                Shop Merch
              </Link>
              <Link href="/events" className="smallBtn">
                Browse Events
              </Link>
            </div>
          </div>
        </section>
        <SiteFooter />
      </main>
    );
  }

  return (
    <main>
      <SiteHeader />
      <section className="section cartHeader">
        <p className="eyebrow">Cart</p>
        <h1>Your Cart</h1>
        <p className="heroLead">
          {count > 0
            ? `${count} ticket${count === 1 ? "" : "s"} ready for checkout.`
            : "Your cart is empty."}
        </p>
      </section>

      <section className="section cartSection">
        <div className="cartGrid">
          <ul className="cartLines">
            {ticketItems.map((item) => (
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
                  <p className="eyebrow">Ticket</p>
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
                <dt>Taxes &amp; fees</dt>
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
              {submitting ? "Processing…" : "Checkout"}
            </button>
            <Link
              href="/events"
              className="smallBtn cartCheckoutBtn"
              style={{ textAlign: "center", display: "block" }}
            >
              ← Back to Events
            </Link>
            {error ? <p className="cartError">{error}</p> : null}
            <p className="cartNote">
              Secure checkout powered by Stripe. No payment is captured until
              your order is confirmed.
            </p>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
