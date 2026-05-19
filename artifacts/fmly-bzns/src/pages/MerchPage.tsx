import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { MerchCard } from "@/components/MerchCard";
import { merch } from "@/data/merch";

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
          <h2>Shop now</h2>
          <a
            href="https://fmly-bzns-2.myshopify.com/"
            target="_blank"
            rel="noreferrer"
            className="shopAllBtn shopAllBtn--filled"
          >
            Shop all on Shopify →
          </a>
        </div>
        <div className="merchGrid">
          {merch.map((item) => (
            <MerchCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
