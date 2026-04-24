import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { crew, destinationLinks, events, media, socialLinks, shopItems } from '@/lib/siteData';
import { SocialIcon } from '@/components/SocialIcon';

export default function HomePage() {
  return (
    <main>
      <SiteHeader />

      <section className="hero section openHero" id="top">
        <p className="eyebrow">FMLY BZNS · CULTURE MOVES IN CIRCLES</p>
        <h1>A GLOBAL COLLECTIVE FOR SOUND, STYLE, AND GATHERING.</h1>
        <p>
          FMLY BZNS connects nightlife, art, community, and premium drops across cities. This is the digital home for
          our movement.
        </p>
        <div className="buttonRow">
          <a href={destinationLinks.tickets} target="_blank" rel="noreferrer" className="ctaBtn">
            Explore Events
          </a>
          <Link href="/media" className="linkBtn">
            Listen to Mixes
          </Link>
        </div>
      </section>

      <section className="section introBand patternBand" aria-labelledby="intro-title">
        <p className="eyebrow">What is FMLY BZNS</p>
        <h2 id="intro-title">Creative collective. Music platform. Event ecosystem.</h2>
        <p>
          We build experiences that center diaspora rhythm, visual culture, and real community energy. From club nights
          and city takeovers to curated mixes and limited art drops, FMLY BZNS is where people, sound, and style meet.
        </p>
      </section>

      <section className="section eventsBand" aria-labelledby="events-title">
        <p className="eyebrow">Upcoming Events</p>
        <h2 id="events-title">City dates live now</h2>
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
              <div className="buttonRow tightButtons">
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

      <section className="section imageSplit reverse patternBandAlt" aria-labelledby="music-title">
        <div className="imagePanel mediaImage" />
        <div>
          <p className="eyebrow">Music / Media</p>
          <h2 id="music-title">Featured mixes, live sets, and visual moments</h2>
          {media.map((item) => (
            <article key={item.title} className="listItem">
              <h3>{item.title}</h3>
              <p>{item.kind}</p>
              <a href={item.url} target="_blank" rel="noreferrer" className="inlineLink">
                {item.cta}
              </a>
            </article>
          ))}
          <div className="musicLinks" aria-label="social listening links">
            {socialLinks.map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <SocialIcon name={label} /> {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section crewBand" aria-labelledby="crew-title">
        <p className="eyebrow">Crew / Collective</p>
        <h2 id="crew-title">Humans behind the movement</h2>
        <div className="crewList">
          {crew.map(([name, role]) => (
            <article key={name}>
              <h3>{name}</h3>
              <p>{role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shopEditorial patternBand" aria-labelledby="shop-title">
        <div className="featureProduct imagePanel shopImage" />
        <div>
          <p className="eyebrow">Shop / Drops</p>
          <h2 id="shop-title">Limited capsules built from sound and style</h2>
          <div className="productGrid">
            {shopItems.map(([title, price]) => (
              <article key={title} className="productCard">
                <h3>{title}</h3>
                <p>{price}</p>
                <a href={destinationLinks.shop} target="_blank" rel="noreferrer" className="inlineLink">
                  Shop now
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section signupLight" aria-labelledby="join-title">
        <p className="eyebrow">Join the community</p>
        <h2 id="join-title">Get city alerts, ticket drops, and mix updates.</h2>
        <form className="signalForm simpleSignup" action={destinationLinks.newsletter} method="get">
          <input type="email" placeholder="Email address" name="email" aria-label="Email" required />
          <button type="submit">Join FMLY BZNS</button>
        </form>
      </section>

      <SiteFooter />
    </main>
  );
}
