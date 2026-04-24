import { PageHero } from '@/components/PageHero';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';

export default function JoinPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero title="Join / Newsletter" subtitle="Tap into upcoming cities, releases, drops, and private access announcements." />
      <section className="section card">
        <form className="signalForm gridForm">
          <input type="email" placeholder="Email" aria-label="Email" />
          <input type="tel" placeholder="Phone (optional)" aria-label="Phone" />
          <input type="text" placeholder="City" aria-label="City" />
          <select aria-label="Interests">
            <option>Choose Interests</option>
            <option>Events</option>
            <option>Music / Mixes</option>
            <option>Shop / Drops</option>
            <option>Partnership News</option>
          </select>
          <button type="submit">Join the Signal</button>
        </form>
      </section>
      <section className="section card">
        <h2>Integration Readiness</h2>
        <ul>
          <li>CRM-ready field structure for segmentation.</li>
          <li>ManyChat and automation handoff hooks.</li>
          <li>Retargeting pixel placement zones and event-based CTA tracking.</li>
          <li>Lifecycle messaging by city, interest, and event intent.</li>
        </ul>
      </section>
      <SiteFooter />
    </main>
  );
}
