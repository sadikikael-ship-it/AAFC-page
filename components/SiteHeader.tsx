import Link from 'next/link';
import { navItems, socialLinks } from '@/lib/siteData';
import { SocialIcon } from './SocialIcon';

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <Link href="/" className="brand">
        FMLY BZNS
      </Link>
      <nav>
        {navItems.map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </nav>
      <div className="iconRow" aria-label="music and social links">
        {socialLinks.slice(0, 5).map(([label, href]) => (
          <a key={label} href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer" aria-label={label} title={label}>
            <SocialIcon name={label} />
          </a>
        ))}
      </div>
    </header>
  );
}
