import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { crew, events, media, socialLinks, shopItems } from '@/lib/siteData';

export default function HomePage() {
  return (
    <main>
      <SiteHeader />

      <section className="hero section openHero">
        <p className="eyebrow">Global Sound Collective</p>
        <h1>
          Enter the world
          <br />
          of FMLY BZNS
        </h1>
        <p>
          A DJ and creative collective building dance floors, sound journeys, and cultural gatherings
          across cities.
        </p>
        <div className="buttonRow">
          <Link href="/events" className="linkBtn">
            View events
          </Link>
          <Link href="/media" className="linkBtn">
            Listen to mixes
          </Link>
          <Link href="/crew" className="linkBtn">
            Meet the crew
          </Link>
        </div>
      </section>

      <section className="section introBand patternBand">
        <p>
          FMLY BZNS is a movement-led ecosystem: events, music releases, artist collaborations,
          visual storytelling, and limited drops rooted in Black global rhythm culture.
        </p>
      </section>

      <section className="section eventsBand">
        <p className="eyebrow">Upcoming Events</p>
        <h2>Next cities on the signal</h2>
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
          <h2>Soundtrack for the movement</h2>
          {media.map((item) => (
            <article key={item.title} className="listItem">
              <h3>{item.title}</h3>
              <p>{item.kind}</p>
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.cta}
              </a>
            </article>
          ))}
          <div className="musicLinks inlineMusic">
            {socialLinks.slice(0, 6).map(([label, href]) => (
              <a key={label} href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer">
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section crewBand">
        <p className="eyebrow">Crew</p>
        <h2>People behind the movement</h2>
        <div className="crewList">
          {crew.map(([name, role]) => (
            <article key={name}>
              <h3>{name}</h3>
              <p>{role}</p>
            </article>
          ))}
        </div>
        <Link href="/crew" className="inlineLink">
          Meet the full crew
        </Link>
      </section>

      <section className="section shopEditorial patternBand">
        <div className="featureProduct imagePanel shopImage" />
        <div>
          <p className="eyebrow">Shop / Drops</p>
          <h2>Collectible editions and capsule releases</h2>
          <div className="productGrid">
            {shopItems.map(([title, price]) => (
              <article key={title} className="productCard">
                <h3>{title}</h3>
                <p>{price}</p>
                <Link href="/shop" className="inlineLink">
                  Shop now
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section signupLight">
        <p className="eyebrow">Stay close</p>
        <h2>Get early access to events, music, and drops.</h2>
        <form className="signalForm simpleSignup" action="/join" method="get">
          <input type="email" placeholder="Email address" name="email" aria-label="Email" required />
          <button type="submit">Sign up</button>
        </form>
      </section>

      <SiteFooter />
    </main>
  );
}
