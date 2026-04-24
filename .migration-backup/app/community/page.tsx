import { PageHero } from '@/components/PageHero';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';

export default function CommunityPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero title="Community" subtitle="Movement-first stories, testimonials, and visual proof from around the world." />
      <section className="section gridTwo">
        <article className="card"><h2>Recap Stories</h2><p>Narrative modules for city recaps and community moments.</p></article>
        <article className="card"><h2>Testimonials</h2><p>Audience voices, collaborator notes, and culture proof highlights.</p></article>
      </section>
      <section className="section card">
        <h2>Join CTA</h2>
        <p>Own your connection to the movement through direct channels, not just social feeds.</p>
        <a className="btn primary" href="/join">Join the Signal</a>
      </section>
      <SiteFooter />
    </main>
  );
}
