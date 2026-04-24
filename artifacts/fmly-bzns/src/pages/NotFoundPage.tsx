import { Link } from 'wouter';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';

export default function NotFoundPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section pageHero card">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page you're looking for doesn't exist or has moved.</p>
        <Link href="/" className="inlineLink">Return to FMLY BZNS</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
