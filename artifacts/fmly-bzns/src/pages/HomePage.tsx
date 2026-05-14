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
import { AdinkraDivider } from "@/components/DecorativeElements";
import { siteLinks, socialList } from "@/data/siteLinks";
import { events, featuredEventVideo } from "@/data/events";
import { weeklyMix } from "@/data/mixes";
import { crew } from "@/data/crew";
import { merch } from "@/data/merch";
import { collaborators, marqueeItems } from "@/data/collaborators";

const whatWeDo = [
  {
    label: "Sound",
    headline: "Sound",
    body: "Original music, edits, and the FMLY MXTP series—soundtracks for the global dancefloor.",
  },
  {
    label: "Dancefloor",
    headline: "Dancefloor",
    body: "Curated events, takeovers, and immersive spaces built for movement.",
  },
  {
    label: "Visual World",
    headline: "Visual World",
    body: "Creative direction, projections, fashion, and full-spectrum vibe curation.",
  },
  {
    label: "Collaborations",
    headline: "Collaborations",
    body: "Festivals, brand partnerships, and custom cultural activations.",
  },
] as const;

export default function HomePage() {
  return (
    <main>
      <SiteHeader />

      {/* HERO */}
      <section className="section hero" id="top">
        <div className="heroInner">
          <div className="heroLogoWrap">
            {/* Left — 3 crowns stacked */}
            <div className="heroCrownCol" aria-hidden="true">
              <img src="/elements/crown-solo.png" className="heroCrown" alt="" />
              <img src="/elements/crown-solo.png" className="heroCrown" alt="" />
              <img src="/elements/crown-solo.png" className="heroCrown" alt="" />
            </div>

            <img
              src="/fmly-logo-color.png"
              alt="FMLY BZNS"
              className="brandLogo brandLogo--hero"
            />

            {/* Right — 3 crowns stacked */}
            <div className="heroCrownCol" aria-hidden="true">
              <img src="/elements/crown-solo.png" className="heroCrown" alt="" />
              <img src="/elements/crown-solo.png" className="heroCrown" alt="" />
              <img src="/elements/crown-solo.png" className="heroCrown" alt="" />
            </div>
          </div>
          <p className="eyebrow">Global Dance Music Culture</p>
          <h1>
            THIS IS FMLY BZNS.
            <br />
            A GLOBAL DANCEFLOOR.
          </h1>
          <p className="heroLead">Music. Movement. Energy. Connection.</p>
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
      <AdinkraDivider variant="full" />

      {/* WHO WE ARE */}
      <section className="section introBand patternBand">
        <p className="eyebrow">Who we are</p>
        <p className="introBandCopy">
          A collective of DJs, producers, curators, and culture builders—curating
          sound and shaping experience. We create spaces where rhythm leads, energy
          flows, and movement becomes connection—rooted in Afro-diaspora sound and
          global dancefloor culture.
        </p>
      </section>
      <AdinkraDivider variant="line" />

      {/* WHO WE ARE — above SoundCloud */}
      <section className="section soundIntro">
        <div className="mxtpTitleRow">
          <h2 className="soundIntroTitle">FMLY MXTP</h2>
          <img src="/fmly-mxtp-tape.png" alt="FMLY MXTP tape" className="mxtpTapeImg" />
        </div>
        <p className="soundIntroTagline">
          A global rotation of selectors shaping the sound of now — one mix at a time.
        </p>
        <p className="soundIntroCopy">
          Dropping every Monday on YouTube and SoundCloud, FMLY MXTP is an
          ongoing mix series spotlighting DJs and artists curating the evolution
          of Global Dance Music Culture. Each volume taps into the pulse of the
          diaspora — blending Amapiano, Dancehall, Afro-House, Baile Funk, R&B,
          Hip-Hop, and beyond — delivered through distinct voices with a deep
          sense of rhythm, intention, and movement. From rising selectors to
          established tastemakers, every mix is a journey designed for real
          dance floors, late nights, and global connection. Full mixes drop
          weekly — tap in.
        </p>
      </section>
      <AdinkraDivider variant="slim" />

      {/* WEEKLY MIX */}
      <section className="section weeklyBand" aria-labelledby="weekly-title">
        <div className="weeklyHeader">
          <p className="eyebrow">Updated every Monday</p>
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
        <SoundCloudEmbed url={weeklyMix.soundcloudUrl} title={weeklyMix.title} visual={false} />
        <div className="buttonRow">
          <a
            href={siteLinks.social.soundcloud}
            target="_blank"
            rel="noreferrer"
            className="ctaBtn"
          >
            Listen on SoundCloud
          </a>
          <a
            href={siteLinks.social.spotify}
            target="_blank"
            rel="noreferrer"
            className="smallBtn"
          >
            <SocialIcon name="Spotify" />
            &nbsp;Spotify
          </a>
          <Link href="/music" className="smallBtn ghost">
            All Mixes
          </Link>
        </div>
      </section>
      <AdinkraDivider variant="full" />

      {/* WHAT WE DO */}
      <section className="section patternBandAlt">
        <p className="eyebrow">What we do</p>
        <h2>Sound. Space. Experience. Culture.</h2>
        <div className="cards4">
          {whatWeDo.map(({ label, headline, body }) => (
            <article className="offeringCard" key={label}>
              <h3>{headline}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
      <AdinkraDivider variant="line" />

      {/* UPCOMING EVENTS */}
      <section className="section eventsBand" aria-labelledby="events-title">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">Upcoming</p>
            <h2 id="events-title">Upcoming Events &amp; Takeovers</h2>
          </div>
          <Link href="/events" className="smallBtn">
            All events
          </Link>
        </div>
        <article className="eventVideoCard" aria-labelledby="home-event-video">
          <p className="eyebrow">Festival Takeover Preview</p>
          <h3 id="home-event-video">{featuredEventVideo.title}</h3>
          <YouTubeEmbed
            videoId={featuredEventVideo.youtubeId}
            title={featuredEventVideo.title}
          />
        </article>
        <div className="eventGrid">
          {events.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      </section>
      <AdinkraDivider variant="slim" />

      {/* MUSIC / MIXES PREVIEW */}
      <section className="section musicPreview" aria-labelledby="music-title">
        <p className="eyebrow">Music &amp; mixes</p>
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
            href={siteLinks.social.spotify}
            target="_blank"
            rel="noreferrer"
            className="platformCard platformCard--sp"
          >
            <SocialIcon name="Spotify" />
            <span>Spotify</span>
            <em>Streaming releases</em>
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
      </section>
      <AdinkraDivider variant="full" />

      {/* MERCH */}
      <section className="section merchBand" aria-labelledby="merch-title">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">Merch · drops</p>
            <h2 id="merch-title">Wear the movement</h2>
          </div>
          <Link href="/merch" className="smallBtn">
            Shop all
          </Link>
        </div>
        <div className="merchGrid merchGrid--home">
          {merch.slice(0, 4).map((m) => (
            <MerchCard key={m.id} item={m} />
          ))}
        </div>
      </section>
      <AdinkraDivider variant="slim" />

      {/* CREW */}
      <section className="section crewBand" aria-labelledby="crew-title">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">The FMLY</p>
            <h2 id="crew-title">Meet the FMLY</h2>
          </div>
          <Link href="/crew" className="smallBtn">
            Full roster
          </Link>
        </div>
        <div className="crewGrid">
          {crew.slice(0, 6).map((m) => (
            <CrewCard key={m.name} member={m} />
          ))}
        </div>
      </section>
      <AdinkraDivider variant="line" />

      {/* COLLABORATIONS */}
      <section
        className="section collabBand patternBand"
        aria-labelledby="collab-title"
      >
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">Collaborations</p>
            <h2 id="collab-title">Artists, festivals &amp; creative partners</h2>
          </div>
          <Link href="/collaborations" className="smallBtn">
            All collaborators
          </Link>
        </div>
        <div className="collabPills">
          {collaborators.slice(0, 16).map((c) => (
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

      {/* MAILING LIST */}
      <section
        className="section mailingBand"
        aria-labelledby="mailing-title"
      >
        <div className="mailingInner">
          <p className="eyebrow">Get the signal</p>
          <h2 id="mailing-title">Mixes · Tickets · Drops</h2>
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
