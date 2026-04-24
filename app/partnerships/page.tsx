import { PageHero } from '@/components/PageHero';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';

export default function PartnershipsPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero title="Partnerships / Booking" subtitle="Inquiries for venues, promoters, collaborators, sponsors, and brand partners." />
      <section className="section card">
        <form className="signalForm gridForm">
          <input type="text" placeholder="Name" aria-label="Name" />
          <input type="email" placeholder="Email" aria-label="Email" />
          <input type="text" placeholder="Organization" aria-label="Organization" />
          <select aria-label="Inquiry type">
            <option>Booking Category</option>
            <option>Venue Booking</option>
            <option>Festival / Promoter</option>
            <option>Brand Partnership</option>
            <option>Collaboration</option>
            <option>Sponsorship</option>
          </select>
          <textarea rows={5} placeholder="Project details" aria-label="Project details" />
          <button type="submit">Submit Inquiry</button>
        </form>
      </section>
      <section className="section card">
        <h2>Optional Deck / EPK</h2>
        <p>Reserved module for downloadable credentials and brand documents.</p>
      </section>
      <SiteFooter />
    </main>
  );
}
