import { Link } from 'wouter';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';

export default function AndreasOnePage() {
  return (
    <main>
      <SiteHeader />
      <section className="section pageHero card">
        <p className="eyebrow">Founder Pathway</p>
        <h1>AndreasOne experience coming soon</h1>
        <p>Explore the founder’s world soon. Preview AndreasOne in development and get update alerts.</p>
        <form className="signalForm">
          <input type="email" placeholder="Email for AndreasOne updates" aria-label="Email" />
          <button type="submit">Notify Me</button>
        </form>
        <Link href="/" className="inlineLink">Return to FMLY BZNS</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
