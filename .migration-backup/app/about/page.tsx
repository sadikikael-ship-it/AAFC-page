import { PageHero } from '@/components/PageHero';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        title="About FMLY BZNS"
        subtitle="A global platform shaping dance music, nightlife, and culture through intentional collective work."
      />
      <section className="section gridTwo">
        <article className="card">
          <h2>Mission</h2>
          <p>Build elevated cultural experiences that connect sound, healing, style, and community.</p>
        </article>
        <article className="card">
          <h2>Origin Story</h2>
          <p>
            Born from grassroots event culture and diasporic creativity, FMLY BZNS became a shared
            ecosystem for artists, curators, and communities.
          </p>
        </article>
      </section>
      <section className="section card">
        <h2>Collective Philosophy</h2>
        <p>
          We champion cultural integrity, community ownership, and world-building across music, art,
          and nightlife.
        </p>
      </section>
      <section className="section card">
        <h2>Collaborator / Press / Proof</h2>
        <p>Reserved modules for logos, testimonials, and media mentions.</p>
      </section>
      <section className="section buttonRow">
        <a href="/join" className="btn primary">Join the Community</a>
        <a href="/partnerships" className="btn secondary">Partner with FMLY BZNS</a>
      </section>
      <SiteFooter />
    </main>
  );
}
