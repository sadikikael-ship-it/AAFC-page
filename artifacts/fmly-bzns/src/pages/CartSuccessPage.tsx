import { useEffect, useState } from "react";
import { Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useCart } from "@/lib/cart";

export default function CartSuccessPage() {
  const { clear } = useCart();
  const [info, setInfo] = useState<{ session: string; demo: boolean } | null>(
    null,
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const session = params.get("session") ?? "";
    const demo = params.get("mode") === "demo";
    setInfo({ session, demo });
    clear();
  }, [clear]);

  return (
    <main>
      <SiteHeader />
      <section className="section successSection">
        <p className="eyebrow">Order confirmed</p>
        <h1>Thank you — you're in.</h1>
        <p className="heroLead">
          {info?.demo
            ? "This is a demo checkout — no payment was captured. When the live Stripe account is connected, this same flow will issue a real receipt and ticket confirmation."
            : "Your payment was processed. A receipt and ticket details have been sent to your email."}
        </p>

        {info?.session ? (
          <p className="successOrderId">
            <span className="eyebrow">Order reference</span>
            <code>{info.session}</code>
          </p>
        ) : null}

        <div className="buttonRow">
          <Link href="/events" className="ctaBtn">
            Browse more events
          </Link>
          <Link href="/merch" className="smallBtn">
            Shop merch
          </Link>
          <Link href="/" className="smallBtn ghost">
            Back to home
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
