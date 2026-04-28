import { Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

export default function CartPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Cart"
        title="Cart & Checkout"
        subtitle="One place for FMLY BZNS merch, event tickets, and bundles."
      />

      <section className="section">
        <article className="cartCallout">
          <p className="eyebrow">Coming soon</p>
          <h2>Checkout & payment integration coming soon.</h2>
          <p>
            Merch and ticket purchases will be available here. We're connecting
            the cart to a checkout provider — until then, individual items
            link out to their existing product or ticket page.
          </p>
          <p className="cartCalloutNote">
            Built to support Stripe, Shopify, Square, or another provider when
            we plug it in.
          </p>
          <div className="buttonRow">
            <Link href="/merch" className="ctaBtn">
              Browse Merch
            </Link>
            <Link href="/events" className="smallBtn">
              See Upcoming Events
            </Link>
            <Link href="/contact" className="smallBtn ghost">
              Ask about a bundle
            </Link>
          </div>
        </article>
      </section>

      <SiteFooter />
    </main>
  );
}
