import Link from 'next/link';
import { navItems, socialLinks } from '@/lib/siteData';

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
      <div className="socialMini" aria-label="music and social links">
        {socialLinks.slice(0, 3).map(([label, href]) => (
          <a key={label} href={href} target="_blank" rel="noreferrer">
            {label}
          </a>
        ))}
      </div>
    </header>
  );
}
