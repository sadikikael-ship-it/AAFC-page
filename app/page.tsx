import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { crew, events, media, socialLinks } from '@/lib/siteData';

export default function HomePage() {
  return (
    <main>
      <SiteHeader />

      <section className="hero section openBand">
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
        </div>
      </section>

      <section className="section introBand">
        <p>
          FMLY BZNS is a movement-led ecosystem: events, music releases, artist collaborations,
          visual storytelling, and limited drops rooted in Black global rhythm culture.
        </p>
      </section>

      <section className="section imageSplit">
        <div>
          <p className="eyebrow">Upcoming Events</p>
          <h2>Next cities on the signal</h2>
          {events.map((event) => (
            <article key={event.title} className="listItem">
              <h3>{event.title}</h3>
              <p>
                {event.date} · {event.city} · {event.venue} · {event.time}
              </p>
              <a href="#">Tickets + details</a>
            </article>
          ))}
          <Link href="/events" className="inlineLink">
            All events
          </Link>
        </div>
        <div className="imagePanel eventsImage" />
      </section>

      <section className="section imageSplit reverse">
        <div className="imagePanel mediaImage" />
        <div>
          <p className="eyebrow">Music / Media</p>
          <h2>Soundtrack for the movement</h2>
          {media.map((item) => (
            <article key={item.title} className="listItem">
              <h3>{item.title}</h3>
              <p>{item.kind}</p>
              <a href="#">{item.cta}</a>
            </article>
          ))}
          <div className="musicLinks inlineMusic">
            {socialLinks.map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer">
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

      <section className="section imageSplit">
        <div className="imagePanel shopImage" />
        <div>
          <p className="eyebrow">Shop</p>
          <h2>Limited drops and collectible editions</h2>
          <p>
            Art prints, capsule garments, and drop-led objects designed as part of the FMLY BZNS
            world.
          </p>
          <Link href="/shop" className="inlineLink">
            Enter shop
          </Link>
        </div>
      </section>

      <section className="section signupLight">
        <p className="eyebrow">Stay close</p>
        <h2>Get early access to events, music, and drops.</h2>
        <form className="signalForm simpleSignup">
          <input type="email" placeholder="Email address" aria-label="Email" />
          <button type="submit">Sign up</button>
        </form>
      </section>

      <SiteFooter />
    </main>
  );
}
