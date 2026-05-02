import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { collaborators, events, merchProducts, siteLinks, socialLinks, weeklyMix } from '@/lib/siteData';
import { SocialIcon } from '@/components/SocialIcon';

const pillars = [
  ['Sound', 'Original music, edits, and the FMLY MXTP series — soundtracks for the global dancefloor.'],
  ['Dancefloor', 'Curated events, takeovers, and immersive spaces built for movement.'],
  ['Visual World', 'Creative direction, projections, fashion, and full-spectrum vibe curation.'],
  ['Collaborations', 'Festivals, brand partnerships, and custom cultural activations.']
] as const;

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <section className="hero section openHero">
        <p className="eyebrow">Global Dance Music Culture</p>
        <h1>THIS IS FMLY BZNS. A GLOBAL DANCEFLOOR.</h1>
        <p>Music. Movement. Energy. Connection.</p>
        <div className="buttonRow heroButtons">
          <a href="#weekly-mix" className="ctaBtn">Listen to Mixes</a>
          <a href="#events" className="smallBtn">View Events</a>
          <a href="#mailing-list" className="smallBtn ghost">Join the Mailing List</a>
        </div>
      </section>

      <section className="section introBand patternBand">
        <h2>Who We Are</h2>
        <p>A collective of DJs, producers, curators, and culture builders shaping sound into experience. We create spaces where rhythm leads, energy flows, and movement becomes connection — rooted in Afro-diaspora sound and global dancefloor culture.</p>
      </section>

      <section id="weekly-mix" className="section eventsBand">
        <p className="eyebrow">{weeklyMix.label}</p>
        <h2>Weekly Mix</h2>
        <h3>{weeklyMix.title}</h3>
        <p>{weeklyMix.description}</p>
        <div className="tagRow"><span>Weekly</span><span>Afro-House</span><span>Amapiano</span></div>
        <iframe title="FMLY weekly mix" className="mediaEmbed" src={weeklyMix.soundcloudEmbed} />
        <div className="socialIconOnlyRow">
          <a href={weeklyMix.soundcloudUrl} target="_blank" rel="noreferrer" aria-label="SoundCloud"><SocialIcon name="SoundCloud" /></a>
          <a href={weeklyMix.spotifyUrl} target="_blank" rel="noreferrer" aria-label="Spotify"><SocialIcon name="Spotify" /></a>
        </div>
      </section>

      <section className="section signupLight">
        <h2>What We Do</h2>
        <p className="eyebrow">Sound. Space. Experience. Culture.</p>
        <div className="cards3">{pillars.map(([t,d]) => <article key={t} className="eventItem"><h3>{t}</h3><p>{d}</p></article>)}</div>
      </section>

      <section id="events" className="section crewBand">
        <h2>Upcoming Events & Takeovers</h2>
        <div className="eventGrid">
          {events.map((e) => <article key={e.title} className="eventItem"><h3>{e.title}</h3><p>{e.details}</p><p>{e.description}</p><a href={e.url} target={e.url.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="smallBtn">{e.cta}</a>{e.featuredTicket ? <p><a href={siteLinks.events.theGatheringTickets} target="_blank" rel="noreferrer" className="inlineLink">Eventbrite Ticket Page</a></p> : null}</article>)}
        </div>
        <h3>Upcoming Event Preview</h3>
        <div className="videoWrap"><iframe src={siteLinks.media.upcomingEventVideoEmbed} title="Takeover Preview" allowFullScreen /></div>
      </section>

      <section className="section shopEditorial patternBand">
        <div className="featureProduct imagePanel shopImage" />
        <div><h2>Merch / Drops</h2><div className="productGrid">{merchProducts.map((p)=> <article key={p.name} className="productCard"><img src={p.image} alt={p.name} className="productThumb"/><h3>{p.name}</h3><p>{p.type} · {p.price}</p><Link href={p.cartUrl} className="inlineLink">Add to Cart</Link></article>)}</div></div>
      </section>

      <section className="section eventsBand">
        <h2>The FMLY</h2>
        <p><strong>Core Frequency:</strong> ANDREASONE, ONE LOVELL, OBE (INTELLIGENTREBELLION).</p>
        <p><strong>Sound & Vision:</strong> DAVIX (DOJO IN THE SKY).</p>
        <p><strong>World Builders:</strong> JUSTIN + NED (GATEWAY MENDOCINO).</p>
        <p><strong>Featured Artists & Selectors:</strong> AMALYN, DYOPS, RAEYA, WEIRDOWITHSOUL, DANNI G, DJ KOBIE, DJ IJO, LITTLE DINOSAUR, KMNI, SPEKT1, CANNABA55, DJ ATREAU, SAGE.</p>
      </section>

      <section className="section patternBandAlt">
        <h2>Collaborations</h2>
        <div className="collabGrid">{Object.entries(collaborators).map(([k,v]) => <article key={k} className="card"><h3>{k}</h3><p>{v.join(' · ')}</p></article>)}</div>
      </section>

      <section id="mailing-list" className="section signupLight finalCtaBand">
        <h2>Get Mixes, Tickets, and Drops</h2>
        <form className="signalForm gridForm" action="/join" method="get">
          <input name="name" placeholder="Name (optional)" />
          <input name="city" placeholder="City (optional)" />
          <input type="email" name="email" placeholder="Email" required />
          <button type="submit">Join the Mailing List</button>
        </form>
      </section>

      <section className="section crewBand">
        <h2>Contact / Booking</h2>
        <p>Event inquiries, bookings, festival takeovers, partnerships, and merch inquiries.</p>
        <a href={siteLinks.contactEmail} className="inlineLink">hello@fmlybzns.com</a>
      </section>

      <SiteFooter />
    </main>
  );
}
