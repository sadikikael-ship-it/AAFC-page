import Link from 'next/link';
import { navItems, socialLinks } from '@/lib/siteData';

export function SiteFooter() {
  return (
    <footer className="footer section">
      <div>
        <h3>FMLY BZNS</h3>
        <p>
          Collective-led global sound platform rooted in events, mixes, and cultural gathering.
        </p>
      </div>
      <div className="footerLinks">
        {navItems.map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </div>
      <div className="musicLinks">
        {socialLinks.map(([label, href]) => (
          <a key={label} href={href} target="_blank" rel="noreferrer">
            {label}
          </a>
        ))}
      </div>
      <form className="signalForm footerSignup">
        <label htmlFor="footer-email">Early access: events, music, drops.</label>
        <div>
          <input id="footer-email" type="email" placeholder="Email address" />
          <button type="submit">Sign up</button>
        </div>
      </form>
      <small>© {new Date().getFullYear()} FMLY BZNS · AndreasOne experience coming soon.</small>
    </footer>
  );
}
