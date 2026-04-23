import Link from 'next/link';
import { navItems } from '@/lib/siteData';

export function SiteFooter() {
  return (
    <footer className="footer section">
      <div>
        <h3>FMLY BZNS</h3>
        <p>Global movement for sound, culture, and community.</p>
      </div>
      <div className="footerLinks">
        {navItems.map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </div>
      <form className="signalForm">
        <label htmlFor="footer-email">Join the signal</label>
        <input id="footer-email" type="email" placeholder="Email address" />
        <button type="submit">Subscribe</button>
      </form>
      <small>© {new Date().getFullYear()} FMLY BZNS. AndreasOne experience coming soon.</small>
    </footer>
  );
}
