import { Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SoundCloudEmbed } from "@/components/SoundCloudEmbed";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { Marquee } from "@/components/Marquee";
import { EventCard } from "@/components/EventCard";
import { CrewCard } from "@/components/CrewCard";
import { MerchCard } from "@/components/MerchCard";
import { MailingListForm } from "@/components/MailingListForm";
import { SocialIcon } from "@/components/SocialIcon";
import { siteLinks, socialList } from "@/data/siteLinks";
import { events } from "@/data/events";
import { weeklyMix, mixes } from "@/data/mixes";
import { videos, featuredVideo } from "@/data/media";
import { crew } from "@/data/crew";
import { merch, featuredMerch } from "@/data/merch";
import { collaborators, marqueeItems } from "@/data/collaborators";

const offerings = [
  ["Event Experiences", "Curated parties, takeovers, and immersive dancefloors"],
  ["Music + Mixes", "Original releases, edits, and the FMLY MXTP series"],
  ["Creative Direction", "Visual identity, projections, fashion and vibe curation"],
  ["Bookings + Partnerships", "Festivals, brand activations, and custom collabs"],
] as const;

export default function HomePage() {
  return (
    <main>
      <SiteHeader />

      {/* HERO */}
      <section className="section hero" id="top">
        <div className="heroInner">
          <span
            className="brandWordmark brandWordmark--hero"
            aria-label="FMLY BZNS"
          >
            FMLY BZNS
          </span>
          <p className="eyebrow">Global movement · est. since the dancefloor</p>
          <h1>
            A global music + culture collective
            <br />
            built for the dancefloor.
          </h1>
          <p className="heroLead">
            FMLY BZNS blends Afro-diaspora club sounds, immersive event
            experiences, healing energy, and forward-thinking visual culture
            into one global movement.
          </p>
          <div className="buttonRow heroButtons">
            <Link href="/events" className="ctaBtn">
              View Events
            </Link>
            <Link href="/music" className="smallBtn">
              Listen to Mixes
            </Link>
            <Link href="/contact" className="smallBtn ghost">
              Join the Mailing List
            </Link>
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="section introBand patternBand">
        <p className="eyebrow">Who we are</p>
        <p className="introBandCopy">
          A collective of DJs, producers, hosts, designers, and culture
          builders. We program rooms where Amapiano, Dancehall, Afro-House,
          Afrobeats, Global Bass, Hip-Hop, Soul, and healing arts can coexist —
          rooted in culture, movement, and freedom.
        </p>
      </section>

      {/* WEEKLY MIX */}
      <section className="section weeklyBand" aria-labelledby="weekly-title">
        <div className="weeklyHeader">
          <p className="eyebrow">Weekly Mix · updated every Friday</p>
          <h2 id="weekly-title">{weeklyMix.title}</h2>
          <p className="weeklyDesc">{weeklyMix.description}</p>
          <div className="tagRow">
            {weeklyMix.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>
        <SoundCloudEmbed url={weeklyMix.soundcloudUrl} title={weeklyMix.title} />
        <div className="buttonRow">
          <a
            href={siteLinks.social.soundcloud}
            target="_blank"
            rel="noreferrer"
            className="ctaBtn"
          >
            Listen on SoundCloud
          </a>
          <Link href="/music" className="smallBtn ghost">
            All Mixes
          </Link>
        </div>
      </section>

      {/* FEATURED VIDEO + GRID */}
      <section className="section mediaBand" aria-labelledby="media-title">
        <p className="eyebrow">Featured media</p>
        <h2 id="media-title">{featuredVideo.title}</h2>
        <div className="mediaSplit">
          <YouTubeEmbed
            videoId={featuredVideo.youtubeId}
            title={featuredVideo.title}
          />
          <div className="mediaList">
            <p className="eyebrow">More from FMLY BZNS</p>
            {videos
              .filter((v) => v.id !== featuredVideo.id)
              .slice(0, 4)
              .map((v) => (
                <a
                  key={v.id}
                  href={
                    v.externalUrl ?? `https://www.youtube.com/watch?v=${v.youtubeId}`
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="mediaListItem"
                >
                  <span className="mediaListKind">{v.kind}</span>
                  <span className="mediaListTitle">{v.title}</span>
                  <span className="mediaListGo">Watch →</span>
                </a>
              ))}
            <a
              href={siteLinks.social.youtube}
              target="_blank"
              rel="noreferrer"
              className="smallBtn"
            >
              Open YouTube channel
            </a>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section patternBandAlt">
        <p className="eyebrow">What we do</p>
        <h2>Four worlds, one movement</h2>
        <div className="cards4">
          {offerings.map(([title, description]) => (
            <article className="offeringCard" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="section eventsBand" aria-labelledby="events-title">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">Upcoming</p>
            <h2 id="events-title">Events & Festival Takeovers</h2>
          </div>
          <Link href="/events" className="smallBtn">
            View all events
          </Link>
        </div>
        <div className="eventGrid">
          {events.slice(0, 3).map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      </section>

      {/* CREW */}
      <section className="section crewBand" aria-labelledby="crew-title">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">The crew</p>
            <h2 id="crew-title">Built by family</h2>
          </div>
          <Link href="/crew" className="smallBtn">
            Meet the full crew
          </Link>
        </div>
        <div className="crewGrid">
          {crew.slice(0, 6).map((m) => (
            <CrewCard key={m.name} member={m} />
          ))}
        </div>
      </section>

      {/* MERCH */}
      <section className="section merchBand" aria-labelledby="merch-title">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">Merch · drops</p>
            <h2 id="merch-title">Wear the movement</h2>
          </div>
          <a
            href={siteLinks.shop}
            target="_blank"
            rel="noreferrer"
            className="smallBtn"
          >
            Open the shop
          </a>
        </div>
        <div className="merchEditorial">
          <a
            href={featuredMerch.productUrl}
            target="_blank"
            rel="noreferrer"
            className="merchFeature"
            aria-label={`Featured drop: ${featuredMerch.name}`}
          >
            <div
              className="merchFeatureImage"
              style={{ backgroundImage: `url(${featuredMerch.image})` }}
            />
            <div className="merchFeatureBody">
              <p className="eyebrow">{featuredMerch.collection}</p>
              <h3>{featuredMerch.name}</h3>
              <p className="merchFeaturePrice">{featuredMerch.price}</p>
              <span className="linkBtn">Shop the drop →</span>
            </div>
          </a>
          <div className="merchGrid">
            {merch
              .filter((m) => m.id !== featuredMerch.id)
              .slice(0, 4)
              .map((m) => (
                <MerchCard key={m.id} item={m} />
              ))}
          </div>
        </div>
      </section>

      {/* COLLABORATIONS */}
      <section
        className="section collabBand patternBand"
        aria-labelledby="collab-title"
      >
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">Collaborations</p>
            <h2 id="collab-title">Artists, festivals & creative partners</h2>
          </div>
          <Link href="/collaborations" className="smallBtn">
            All collaborators
          </Link>
        </div>
        <div className="collabPills">
          {collaborators.slice(0, 14).map((c) => (
            <span key={c.name} className={`pill pill--${c.kind.toLowerCase()}`}>
              {c.name}
              <em>{c.kind}</em>
            </span>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <section className="section marqueeBand">
        <Marquee items={marqueeItems} />
      </section>

      {/* MUSIC PREVIEW */}
      <section className="section musicPreview" aria-labelledby="music-title">
        <p className="eyebrow">Music & mixes</p>
        <h2 id="music-title">Open the FMLY catalog</h2>
        <div className="musicPlatformRow">
          <a
            href={siteLinks.social.soundcloud}
            target="_blank"
            rel="noreferrer"
            className="platformCard platformCard--sc"
          >
            <SocialIcon name="SoundCloud" />
            <span>SoundCloud</span>
            <em>All FMLY MXTP releases</em>
          </a>
          <a
            href={siteLinks.social.youtube}
            target="_blank"
            rel="noreferrer"
            className="platformCard platformCard--yt"
          >
            <SocialIcon name="YouTube" />
            <span>YouTube</span>
            <em>Sets, recaps, and films</em>
          </a>
          <a
            href={siteLinks.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="platformCard platformCard--ig"
          >
            <SocialIcon name="Instagram" />
            <span>Instagram</span>
            <em>Daily clips and reels</em>
          </a>
          <a
            href={siteLinks.social.tiktok}
            target="_blank"
            rel="noreferrer"
            className="platformCard platformCard--tk"
          >
            <SocialIcon name="TikTok" />
            <span>TikTok</span>
            <em>From the floor</em>
          </a>
        </div>
        <div className="latestMixes">
          {mixes.slice(0, 3).map((m) => (
            <a
              key={m.id}
              href={siteLinks.social.soundcloud}
              target="_blank"
              rel="noreferrer"
              className="mixCard"
            >
              <span className="eyebrow">{m.tags[0]}</span>
              <strong>{m.title}</strong>
              <span className="mixCardArtist">by {m.artist}</span>
            </a>
          ))}
        </div>
      </section>

      {/* MAILING LIST */}
      <section
        className="section mailingBand"
        aria-labelledby="mailing-title"
      >
        <div className="mailingInner">
          <p className="eyebrow">Get the signal</p>
          <h2 id="mailing-title">Mixes · tickets · drops</h2>
          <p className="mailingLead">
            Join for weekly mixes, event announcements, ticket pre-sales, merch
            drops, festival takeovers, and collaboration news.
          </p>
          <MailingListForm />
        </div>
      </section>

      {/* CONTACT CTA */}
      <section
        className="section contactCtaBand"
        aria-labelledby="contact-title"
      >
        <p className="eyebrow">Booking · partnerships · press</p>
        <h2 id="contact-title">Book FMLY BZNS</h2>
        <p>
          Festivals, venues, brands, collaborators — talk to us about events,
          stage takeovers, and creative partnerships.
        </p>
        <div className="buttonRow">
          <Link href="/contact" className="ctaBtn">
            Start a conversation
          </Link>
          <a href={siteLinks.contact.booking} className="smallBtn ghost">
            Email bookings
          </a>
        </div>
        <div className="socialIconOnlyRow" aria-label="social links">
          {socialList.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              title={s.name}
            >
              <SocialIcon name={s.name} />
            </a>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
