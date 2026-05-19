import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ShopifyBuyButtons } from "@/components/ShopifyBuyButtons";

export default function MerchPage() {
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
          <a
            href="https://fmly-bzns-2.myshopify.com/"
            target="_blank"
            rel="noreferrer"
            className="shopAllBtn"
          >
            Shop all →
          </a>
        </div>
        <ShopifyBuyButtons />
      </section>

      <SiteFooter />
    </main>
  );
}
