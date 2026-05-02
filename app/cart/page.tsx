import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export default function CartPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section eventsBand">
        <p className="eyebrow">Cart / Checkout</p>
        <h1>Merch + Tickets Cart</h1>
        <p>Checkout/payment integration coming soon. Merch and ticket purchases will be available here.</p>
        <p>Future-ready for Stripe, Shopify, Square, or another checkout provider.</p>
      </section>
      <SiteFooter />
    </main>
  );
}
