import { PageHero } from '@/components/PageHero';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { destinationLinks } from '@/lib/siteData';

const products = [
  ['Limited Canvas Print', 'Edition of 50 · Signed'],
  ['Night Circuit Jacket', 'Capsule apparel · Drop 01'],
  ['Movement Poster Series', 'Collector set · Archival stock']
];

export default function ShopPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero title="Shop / Drops" subtitle="Premium art, limited releases, and editorial commerce for collectors." />
      <section className="section cards3">
        {products.map(([title, meta]) => (
          <article key={title} className="card">
            <p className="eyebrow">Limited Release</p>
            <h3>{title}</h3>
            <p>{meta}</p>
            <a href={destinationLinks.shop} target="_blank" rel="noreferrer" className="btn secondary">View Drop</a>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
