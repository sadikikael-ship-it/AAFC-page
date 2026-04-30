import { Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function NotFoundPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section pageHero">
        <p className="eyebrow">404</p>
        <h1>Off the dancefloor.</h1>
        <p>
          The page you're looking for has moved or never existed. Head back
          home or check the events.
        </p>
        <div className="buttonRow">
          <Link href="/" className="ctaBtn">
            Back to home
          </Link>
          <Link href="/events" className="smallBtn ghost">
            See events
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
