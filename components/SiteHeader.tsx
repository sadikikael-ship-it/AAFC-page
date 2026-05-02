import Link from 'next/link';
import { navItems, socialLinks } from '@/lib/siteData';
import { SocialIcon } from './SocialIcon';

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <div className="headerLeft">
        <Link href="/" className="brand" aria-label="FMLY BZNS home">
          <span className="brandFm">FMLY</span> <span className="brandBz">BZNS</span>
        </Link>
      </div>
      <nav>
        {navItems.map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </nav>
      <div className="headerRight">
        <div className="iconRow" aria-label="social links">
          {socialLinks.map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
              <SocialIcon name={label} />
            </a>
          ))}
          <Link href="/cart" aria-label="Cart" title="Cart">
            <SocialIcon name="Cart" />
          </Link>
        </div>
      </div>
    </header>
  );
}
