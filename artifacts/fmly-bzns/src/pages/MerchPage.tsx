import { Link } from "wouter";
import { FaShoppingCart } from "react-icons/fa";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ShopifyBuyButtons } from "@/components/ShopifyBuyButtons";
import { useCart } from "@/lib/cart";

export default function MerchPage() {
  const { count } = useCart();

  return (
    <main>
      <SiteHeader />
      <PageHero
        title="Merch · Drops"
        subtitle="Clothing, accessories, prints and music. Editorial drops connected to the dancefloor and the diaspora."
      />

      <section className="section fmly-shopify-section">
        <p className="eyebrow">All products</p>
        <div className="merchHeadRow">
          <h2>Pre-order now</h2>
          <div className="merchHeadActions">
            <Link href="/cart" className="cartIconBtn" aria-label={count > 0 ? `Cart (${count} items)` : "Cart"}>
              <FaShoppingCart aria-hidden focusable="false" />
              {count > 0 ? <span className="cartBadge">{count}</span> : null}
            </Link>
            <a
              href="https://fmly-bzns-2.myshopify.com/"
              target="_blank"
              rel="noreferrer"
              className="shopAllBtn"
            >
              Shop all →
            </a>
            <a
              href="https://fmly-bzns-2.myshopify.com/cart"
              target="_blank"
              rel="noreferrer"
              className="shopAllBtn shopAllBtn--filled"
            >
              Checkout
            </a>
          </div>
        </div>
        <ShopifyBuyButtons />
      </section>

      <SiteFooter />
    </main>
  );
}
