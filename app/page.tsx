import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { events, media } from '@/lib/siteData';

const sitemap = [
  'Home',
  'About FMLY BZNS',
  'Events',
  'Music / Mixes / Media',
  'Community',
  'Shop / Drops',
  'Partnerships / Booking',
  'Join / Newsletter',
  'AndreasOne (Coming Soon)'
];

export default function HomePage() {
  return (
    <main>
      <SiteHeader />

      <section className="hero section">
        <p className="eyebrow">Global Cultural Platform</p>
        <h1>Enter the world
          <br />of FMLY BZNS</h1>
        <p>
          Curating the evolution of global dance music culture through events, media, art, and
          community-first experiences.
        </p>
        <div className="buttonRow">
          <Link href="/events" className="btn primary">
            View Events
          </Link>
          <Link href="/join" className="btn secondary">
            Join the Community
          </Link>
          <Link href="/about" className="btn tertiary">
            Explore the Movement
          </Link>
        </div>
      </section>

      <section className="section manifesto">
        <p>
          We build rooms where rhythm becomes language, mural color becomes memory, and people become the movement.
        </p>
      </section>

      <section className="section gridTwo">
        <div>
          <p className="eyebrow">What FMLY BZNS Is</p>
          <h2>A collective, a platform, and a living creative ecosystem.</h2>
          <p>
            FMLY BZNS unites nightlife, music curation, cultural storytelling, premium drops, and
            community power into one digital mothership.
          </p>
        </div>
        <div className="card featureCard">
          <p className="eyebrow">Featured Signal</p>
          <h3>Lineup Drop: Summer Signal Circuit 2026</h3>
          <p>Three cities. One sound system. Limited early-release access now live.</p>
          <Link href="/events" className="inlineLink">
            Unlock Drop Details
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <p className="eyebrow">Upcoming Events</p>
          <h2>Built for movement, sound, and community.</h2>
        </div>
        <div className="cards3">
          {events.map((event) => (
            <article key={event.title} className="card eventCard">
              <div className="eventArt" style={{ background: event.image }} />
              <h3>{event.title}</h3>
              <p>
                {event.city} · {event.venue}
              </p>
              <p>
                {event.date} · {event.time}
              </p>
              <div className="buttonRow compact">
                <a className="btn secondary" href={event.ticket}>
                  Tickets
                </a>
                <Link className="btn tertiary" href={event.details}>
                  Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <p className="eyebrow">Music / Mixes / Media</p>
          <h2>Curated long-form listening and visual world-building.</h2>
        </div>
        <div className="cards3">
          {media.map((item) => (
            <article key={item.title} className="card">
              <p className="eyebrow">{item.kind}</p>
              <h3>{item.title}</h3>
              <a href="#" className="inlineLink">
                {item.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section gridTwo">
        <div className="card">
          <p className="eyebrow">Community / Culture</p>
          <h3>Where culture becomes experience.</h3>
          <p>
            Crowd diaries, recap films, testimonials, and living proof from dance floors across
            New York, Paris, Lagos, and beyond.
          </p>
          <Link href="/community" className="inlineLink">
            Explore Community Energy
          </Link>
        </div>
        <div className="card">
          <p className="eyebrow">Shop / Drops</p>
          <h3>Premium editions for collectors.</h3>
          <p>
            Limited canvas prints, capsule apparel, and high-margin art drops with editorial
            storytelling and scarcity framing.
          </p>
          <Link href="/shop" className="inlineLink">
            Preview Current Drop
          </Link>
        </div>
      </section>

      <section className="section gridTwo">
        <div>
          <p className="eyebrow">Collective Preview</p>
          <h2>Intentional, bass-driven, community-led.</h2>
          <p>
            FMLY BZNS exists at the intersection of nightlife, healing arts, and future-facing
            creative direction.
          </p>
        </div>
        <div className="card">
          <p className="eyebrow">Credibility Signals</p>
          <ul>
            <li>Festival collaborators and venue partners</li>
            <li>Press and cultural platform mentions</li>
            <li>Brand and sponsorship-ready social proof</li>
          </ul>
        </div>
      </section>

      <section className="section card">
        <p className="eyebrow">Partnerships / Booking</p>
        <h2>Business-ready inquiries for venues, promoters, sponsors, and collaborators.</h2>
        <Link href="/partnerships" className="btn primary">
          Open Inquiry Form
        </Link>
      </section>

      <section className="section card andreasTease">
        <p className="eyebrow">Founder Pathway</p>
        <h3>AndreasOne experience coming soon.</h3>
        <p>Preview the founder’s world in development while the FMLY BZNS platform scales.</p>
        <Link href="/andreasone" className="inlineLink">
          Explore AndreasOne Teaser
        </Link>
      </section>

      <section className="section joinSignal">
        <p className="eyebrow">Join the Signal</p>
        <h2>Get access to drops, cities, and releases.</h2>
        <form className="signalForm gridForm">
          <input type="email" placeholder="Email" aria-label="Email" />
          <input type="tel" placeholder="SMS / Phone (optional)" aria-label="Phone" />
          <input type="text" placeholder="City / Region" aria-label="City" />
          <select aria-label="Interests">
            <option>Interest focus</option>
            <option>Events</option>
            <option>Music / Media</option>
            <option>Drops / Shop</option>
            <option>Partnerships</option>
          </select>
          <button type="submit">Tap Into the Movement</button>
        </form>
      </section>

      <section className="section">
        <p className="eyebrow">Sitemap</p>
        <div className="cards3">
          {sitemap.map((item) => (
            <article key={item} className="card">
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
