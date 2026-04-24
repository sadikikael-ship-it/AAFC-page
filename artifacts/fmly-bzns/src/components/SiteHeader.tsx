import { Link } from 'wouter';
import { destinationLinks, navItems, socialLinks } from '@/lib/siteData';
import { SocialIcon } from './SocialIcon';

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <div className="headerLeft">
        <Link href="/" className="brand">
          FMLY BZNS
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
        <div className="iconRow" aria-label="music and social links">
          {socialLinks.map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
              <SocialIcon name={label} />
            </a>
          ))}
        </div>
        <a href={destinationLinks.tickets} target="_blank" rel="noreferrer" className="headerTicket">
          Buy Tickets
        </a>
      </div>
    </header>
  );
}
