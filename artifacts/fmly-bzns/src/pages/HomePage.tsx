import { Link } from 'wouter';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { destinationLinks, events, shopItems, socialLinks } from '@/lib/siteData';
import { SocialIcon } from '@/components/SocialIcon';

const offerings = [
  ['Event Experiences', 'Curated parties, takeovers, and immersive dancefloor experiences'],
  ['Music + Mixes', 'Original releases, remixes, and the FMLY MXTP series'],
  ['Creative Direction', 'Visual identity, styling, projections, and vibe curation'],
  ['Bookings + Partnerships', 'Festivals, brand activations, sponsors, and custom collaborations']
] as const;

const featured = [
  ['The Gathering', 'Signature city-night series with intentional curation and global guests.'],
  ['FMLY MXTP', 'Rotating mix platform spotlighting diaspora-forward selectors and producers.'],
  ['Original Releases', 'Artist-led releases, edits, and collaborations across multiple sounds.'],
  ['Festival Takeovers', 'Large-scale appearances, stage programming, and culture-first experiences.']
] as const;

export default function HomePage() {
  return (
    <main>
      <SiteHeader />

      <section className="hero section openHero" id="top">
        <p className="eyebrow">FMLY BZNS</p>
        <h1>Curating the evolution of Global Dance Music Culture</h1>
        <p>
          FMLY BZNS blends Afro-diaspora club sounds, immersive event experiences, healing energy, and
          forward-thinking visual culture into one global movement.
        </p>
        <div className="buttonRow heroButtons">
          <a href={destinationLinks.tickets} target="_blank" rel="noreferrer" className="ctaBtn">
            See Upcoming Events
          </a>
          <a href="https://www.youtube.com/@FMLYBZNS" target="_blank" rel="noreferrer" className="smallBtn ghost">
            Watch / Listen
          </a>
          <Link href="/partnerships" className="smallBtn">
            Book FMLY BZNS
          </Link>
        </div>
      </section>

      <section className="section introBand patternBand">
        <h2>Brand Statement</h2>
        <p>
          FMLY BZNS is a collective of DJs, producers, musicians, and creatives building spaces where Amapiano,
          Dancehall, Afro-House, Afrobeats, Global Bass, Hip-Hop, Soul, and healing arts can coexist. Rooted in
          culture, movement, and freedom, we create experiences that feel elevated, intentional, and alive.
        </p>
      </section>

      <section className="section eventsBand">
        <h2>What We Do</h2>
        <div className="cards3">
          {offerings.map(([title, description]) => (
            <article className="eventItem" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section patternBandAlt">
        <h2>Upcoming / Featured</h2>
        <div className="eventGrid">
          {featured.map(([title, description], index) => (
            <article key={title} className="eventItem">
              <div className="eventThumb" style={{ background: events[index % events.length].image }} />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section crewBand">
        <h2>About / Mission</h2>
        <p>
          FMLY BZNS exists to bring the underrepresented to the forefront of festival and nightlife culture. We merge
          the energy of rave and sound system culture with the richness of the African diaspora, urban music, healing
          arts, and intentional community building.
        </p>
      </section>

      <section className="section signupLight">
        <h2>Visual + Cultural Identity</h2>
        <p>
          Afro-futurist visuals, projected graphics, custom fashion, live sewing, intentional spaces, healthy
          offerings, and high-touch curation all shape the FMLY BZNS experience.
        </p>
      </section>

      <section className="section shopEditorial patternBand" aria-labelledby="merch-title">
        <div className="featureProduct imagePanel shopImage" />
        <div>
          <p className="eyebrow">Merch / Drops</p>
          <h2 id="merch-title">Wear the movement</h2>
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

      <section className="section eventsBand finalCtaBand">
        <h2>Enter the world of FMLY BZNS</h2>
        <div className="buttonRow">
          <a href={socialLinks[0][1]} target="_blank" rel="noreferrer" className="smallBtn">
            Follow
          </a>
          <Link href="/partnerships" className="smallBtn ghost">
            Book
          </Link>
          <Link href="/partnerships" className="smallBtn">
            Partner
          </Link>
        </div>
        <form className="signalForm simpleSignup" action={destinationLinks.newsletter} method="get">
          <input type="email" placeholder="Email address" name="email" aria-label="Email" required />
          <button type="submit">Join the mailing list</button>
        </form>
        <div className="socialIconOnlyRow" aria-label="social links">
          {socialLinks.map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
              <SocialIcon name={label} />
            </a>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
