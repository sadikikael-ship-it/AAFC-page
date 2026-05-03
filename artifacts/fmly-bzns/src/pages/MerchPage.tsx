import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { MerchCard } from "@/components/MerchCard";
import { merch, featuredMerch } from "@/data/merch";
import { siteLinks } from "@/data/siteLinks";

export default function MerchPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        title="Merch · Drops"
        subtitle="Clothing, accessories, prints and music. Editorial drops connected to the dancefloor and the diaspora."
        actions={
          <a
            href={siteLinks.shop}
            target="_blank"
            rel="noreferrer"
            className="ctaBtn"
          >
            Open the shop
          </a>
        }
      />

      <section className="section">
        <p className="eyebrow">All products</p>
        <h2>The full collection</h2>
        <div className="merchGrid merchGrid--page">
          {merch.map((m) => (
            <MerchCard key={m.id} item={m} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
