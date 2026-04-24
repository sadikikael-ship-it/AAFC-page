import { Link } from 'wouter';
import { navItems, socialLinks } from '@/lib/siteData';
import { SocialIcon } from './SocialIcon';

export function SiteFooter() {
  return (
    <footer className="footer section">
      <div className="footerTop">
        <div className="footerLogo" aria-label="FMLY BZNS logo wordmark">
          <span className="fm">FMLY</span>
          <span className="bz">BZNS</span>
        </div>
        <div className="footerLinks">
          {navItems.slice(0, 5).map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </div>
        <div className="iconRow compact" aria-label="all social and music links">
          {socialLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noreferrer"
              aria-label={label}
              title={label}
            >
              <SocialIcon name={label} />
            </a>
          ))}
        </div>
      </div>
      <form className="signalForm footerSignup" action="/join" method="get">
        <input id="footer-email" type="email" name="email" placeholder="Email for early access" required />
        <button type="submit">Join</button>
      </form>
      <small>© {new Date().getFullYear()} FMLY BZNS</small>
    </footer>
  );
}
