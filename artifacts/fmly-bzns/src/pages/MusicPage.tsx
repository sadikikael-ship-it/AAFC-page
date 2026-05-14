import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { SoundCloudEmbed } from "@/components/SoundCloudEmbed";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { SocialIcon } from "@/components/SocialIcon";
import { weeklyMix } from "@/data/mixes";
import { videos, featuredVideo, youtubeChannelUrl } from "@/data/media";
import { siteLinks } from "@/data/siteLinks";

export default function MusicPage() {
  const otherVideos = videos.filter((v) => v.id !== featuredVideo.id);

  return (
    <main>
      <SiteHeader />
      <PageHero
        title="Music & Mixes"
        subtitle="The weekly mix, the FMLY MXTP series, original releases, and live recordings — all in one place."
        actions={
          <>
            <a
              href={siteLinks.social.soundcloud}
              target="_blank"
              rel="noreferrer"
              className="ctaBtn"
            >
              SoundCloud
            </a>
            <a
              href={siteLinks.social.spotify}
              target="_blank"
              rel="noreferrer"
              className="smallBtn"
            >
              Spotify
            </a>
            <a
              href={youtubeChannelUrl}
              target="_blank"
              rel="noreferrer"
              className="smallBtn"
            >
              YouTube
            </a>
          </>
        }
      />

      {/* WEEKLY MIX */}
      <section className="section weeklyBand">
        <p className="eyebrow">Updated every Monday</p>
        <h2>{weeklyMix.title}</h2>
        {weeklyMix.subtitle ? <p className="weeklySubtitle">{weeklyMix.subtitle}</p> : null}
        <p className="weeklyDesc">{weeklyMix.description}</p>
        <div className="tagRow">
          {weeklyMix.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
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
        </div>
      </section>

      {/* FEATURED VIDEO */}
      <section className="section mediaBand">
        <p className="eyebrow">FMLY BZNS · YouTube</p>
        <h2>{featuredVideo.title}</h2>
        <YouTubeEmbed videoId={featuredVideo.youtubeId} title={featuredVideo.title} />
        <div className="buttonRow">
          <a
            href={youtubeChannelUrl}
            target="_blank"
            rel="noreferrer"
            className="ctaBtn"
          >
            Watch More on YouTube
          </a>
        </div>
      </section>

      {otherVideos.length > 0 ? (
        <section className="section mediaBand">
          <p className="eyebrow">More FMLY BZNS videos</p>
          <h2>Sets, recaps, and films</h2>
          <div className="videoGrid">
            {otherVideos.map((v) => (
              <article key={v.id} className="videoCard">
                <YouTubeEmbed videoId={v.youtubeId} title={v.title} />
                <div className="videoCardBody">
                  <span className="eyebrow">{v.kind}</span>
                  <h3>{v.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {/* FMLY BZNS x DOJO IN THE SKY */}
      <section className="section dojoSection">
        <p className="eyebrow">Production · Original Releases</p>
        <h2>FMLY BZNS x Dojo in the Sky</h2>
        <p className="dojoDesc">
          Working with production team Dojo In The Sky and international vocalists including BLVK H3RO, Kes Kross, Seun Kuti, Jade De LaFleur, and Amalyn.
        </p>
        <div className="dojoAlbumGrid">
          {/* TODO: Replace href="#" with Spotify link for Shine Ya Light */}
          <a href="#" className="dojoAlbumCard" target="_blank" rel="noopener noreferrer" aria-label="BLVK H3RO — Shine Ya Light on Spotify">
            <div className="dojoAlbumArt">
              <img src="/dojo-shine-ya-light.jpeg" alt="Shine Ya Light — BLVK H3RO" />
            </div>
            <p className="dojoAlbumTitle">Shine Ya Light</p>
            <p className="dojoAlbumArtist">BLVK H3RO</p>
          </a>
          {/* TODO: Replace href="#" with Spotify link for Scary Hours */}
          <a href="#" className="dojoAlbumCard" target="_blank" rel="noopener noreferrer" aria-label="Kes Kross — Scary Hours on Spotify">
            <div className="dojoAlbumArt">
              <img src="/dojo-scary-hours.jpeg" alt="Scary Hours — Kes Kross" />
            </div>
            <p className="dojoAlbumTitle">Scary Hours</p>
            <p className="dojoAlbumArtist">Kes Kross</p>
          </a>
          {/* TODO: Replace href="#" with Spotify link for Wave Remix */}
          <a href="#" className="dojoAlbumCard" target="_blank" rel="noopener noreferrer" aria-label="Jade de LaFleur & Seun Kuti — Wave Remix on Spotify">
            <div className="dojoAlbumArt">
              <img src="/dojo-wave-remix.jpeg" alt="Wave Remix — Jade de LaFleur & Seun Kuti" />
            </div>
            <p className="dojoAlbumTitle">Wave Remix</p>
            <p className="dojoAlbumArtist">Jade de LaFleur &amp; Seun Kuti</p>
          </a>
          {/* TODO: Replace href="#" with Spotify link for Breathe */}
          <a href="#" className="dojoAlbumCard" target="_blank" rel="noopener noreferrer" aria-label="Amalyn — Breathe on Spotify">
            <div className="dojoAlbumArt">
              <img src="/dojo-breathe.jpeg" alt="Breathe — Amalyn" />
            </div>
            <p className="dojoAlbumTitle">Breathe</p>
            <p className="dojoAlbumArtist">Amalyn</p>
          </a>
          {/* TODO: Replace href="#" with Spotify link for Pilates */}
          <a href="#" className="dojoAlbumCard" target="_blank" rel="noopener noreferrer" aria-label="Amalyn & BLVK H3RO — Pilates on Spotify">
            <div className="dojoAlbumArt">
              <img src="/dojo-pilates.jpeg" alt="Pilates — Amalyn & BLVK H3RO" />
            </div>
            <p className="dojoAlbumTitle">Pilates</p>
            <p className="dojoAlbumArtist">Amalyn &amp; BLVK H3RO</p>
          </a>
          {/* TODO: Replace href="#" with Spotify link for With the Blue */}
          <a href="#" className="dojoAlbumCard" target="_blank" rel="noopener noreferrer" aria-label="Melon Xion — With the Blue on Spotify">
            <div className="dojoAlbumArt">
              <img src="/dojo-with-the-blue.jpeg" alt="With the Blue — Melon Xion" />
            </div>
            <p className="dojoAlbumTitle">With the Blue</p>
            <p className="dojoAlbumArtist">Melon Xion</p>
          </a>
          {/* TODO: Replace href="#" with Spotify link for Higher Remix */}
          <a href="#" className="dojoAlbumCard" target="_blank" rel="noopener noreferrer" aria-label="Truthlive & Nina Grae — Higher Remix on Spotify">
            <div className="dojoAlbumArt">
              <img src="/dojo-higher-remix.jpeg" alt="Higher Remix — Truthlive & Nina Grae" />
            </div>
            <p className="dojoAlbumTitle">Higher Remix</p>
            <p className="dojoAlbumArtist">Truthlive &amp; Nina Grae</p>
          </a>
        </div>
      </section>

      {/* PLATFORM LINKS */}
      <section className="section musicPreview">
        <h2>Follow the music</h2>
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
            href={youtubeChannelUrl}
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

      <SiteFooter />
    </main>
  );
}
