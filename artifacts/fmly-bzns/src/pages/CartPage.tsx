import { useState } from "react";
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

  const handleCheckout = async () => {
    if (items.length === 0) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(`/api/checkout/session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((it) => ({
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
                {submitting ? "Processing…" : "Checkout"}
              </button>
              {error ? <p className="cartError">{error}</p> : null}
              <p className="cartNote">
                Demo mode: no real payment is captured. Once Stripe keys are added,
                this button will redirect to a secure Stripe-hosted checkout.
              </p>
            </aside>
          </div>
        )}
      </section>

      <SiteFooter />
    </main>
  );
}
