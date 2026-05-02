import Link from 'next/link';
import { navItems, socialLinks } from '@/lib/siteData';
import { SocialIcon } from './SocialIcon';

export function SiteFooter() {
  return (
    <footer className="footer section">
      <div className="footerTop compactFooter">
        <div className="footerLogo" aria-label="FMLY BZNS logo wordmark">
          <span className="fm">FMLY</span>
          <span className="bz">BZNS</span>
        </div>
        <div className="footerLinks">
          {navItems.slice(0, 6).map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </div>
        <div className="iconRow compact" aria-label="all social links">
          {socialLinks.map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}><SocialIcon name={label} /></a>
          ))}
        </div>
      </div>
      <small>© {new Date().getFullYear()} FMLY BZNS</small>
    </footer>
  );
}
