import Link from 'next/link';
import { navItems } from '@/lib/siteData';

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
    </header>
  );
}
