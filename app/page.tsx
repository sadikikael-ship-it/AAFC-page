import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { crew, events, lineupDays, media, primaryTicketUrl, shopItems } from '@/lib/siteData';

export default function HomePage() {
  return (
    <main>
      <SiteHeader />

      <section className="hero section afroHero">
        <p className="eyebrow">FMLY BZNS · GLOBAL CULTURE FESTIVAL SERIES</p>
        <h1>PROUDLY CELEBRATING CULTURE THROUGH SOUND, ART & MOVEMENT</h1>
        <p>Summer Signal Circuit 2026 · New York · Paris · Lagos</p>
        <div className="buttonRow">
          <a href={primaryTicketUrl} target="_blank" rel="noreferrer" className="ctaBtn">
            Book Now
          </a>
          <Link href="/events" className="linkBtn">
            Full Schedule
          </Link>
        </div>
      </section>

      <section className="section lineupBand">
        <p className="eyebrow">Meet Your 2026 Line-Up</p>
        <div className="lineupGrid">
          {lineupDays.map(([day, desc], idx) => (
            <article key={day} className="lineupItem">
              <span>{String(idx + 1).padStart(2, '0')}/03</span>
              <h3>{day}</h3>
              <p>{desc}</p>
              <a href={primaryTicketUrl} target="_blank" rel="noreferrer" className="smallBtn">
                Book Now
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section eventsBand">
        <p className="eyebrow">Upcoming Events</p>
        <h2>Tickets Live</h2>
        <div className="eventGrid">
          {events.map((event) => (
            <article key={event.title} className="eventItem">
              <div className="eventThumb" style={{ background: event.image }} />
              <h3>{event.title}</h3>
              <p>
                {event.city} · {event.venue}
              </p>
              <p>
                {event.date} · {event.time}
              </p>
              <div className="buttonRow">
                <a href={event.ticketUrl} target="_blank" rel="noreferrer" className="smallBtn">
                  Buy Tickets
                </a>
                <Link href={event.detailsUrl} className="smallBtn ghost">
                  Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section imageSplit reverse patternBandAlt">
        <div className="imagePanel mediaImage" />
        <div>
          <p className="eyebrow">Music / Media</p>
          <h2>Curated mixes from the collective</h2>
          {media.map((item) => (
            <article key={item.title} className="listItem">
              <h3>{item.title}</h3>
              <p>{item.kind}</p>
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.cta}
              </a>
            </article>
          ))}
          <Link href="/media" className="inlineLink">
            Explore all music
          </Link>
        </div>
      </section>

      <section className="section crewBand">
        <p className="eyebrow">Crew</p>
        <h2>Collective builders behind FMLY BZNS</h2>
        <div className="crewList">
          {crew.map(([name, role]) => (
            <article key={name}>
              <h3>{name}</h3>
              <p>{role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shopEditorial patternBand">
        <div className="featureProduct imagePanel shopImage" />
        <div>
          <p className="eyebrow">Merch / Art Drops</p>
          <h2>Festival editions and visual capsules</h2>
          <div className="productGrid">
            {shopItems.map(([title, price]) => (
              <article key={title} className="productCard">
                <h3>{title}</h3>
                <p>{price}</p>
                <a href="https://shop.fmlybzns.com" target="_blank" rel="noreferrer" className="inlineLink">
                  Shop now
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section signupLight">
        <p className="eyebrow">Sign up for updates</p>
        <h2>Get ticket alerts, lineup drops, and city announcements.</h2>
        <form className="signalForm simpleSignup" action="/join" method="get">
          <input type="email" placeholder="Email address" name="email" aria-label="Email" required />
          <button type="submit">Keep me updated</button>
        </form>
      </section>

      <SiteFooter />
    </main>
  );
}
