import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { SoundCloudEmbed } from "@/components/SoundCloudEmbed";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { SocialIcon } from "@/components/SocialIcon";
import { weeklyMix, soundcloudProfileUrl } from "@/data/mixes";
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
        <p className="eyebrow">Weekly Mix · Updated Every Friday</p>
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

      {/* FULL SOUNDCLOUD CATALOG */}
      <section className="section scCatalogBand">
        <p className="eyebrow">The FMLY Catalog</p>
        <h2>All mixes on SoundCloud</h2>
        <p className="scCatalogLead">
          Every FMLY MXTP mix, live set, and recorded session lives on our
          SoundCloud. Browse the full catalog below or open the channel directly.
        </p>
        <div className="scCatalogEmbed">
          <iframe
            title="FMLY BZNS on SoundCloud"
            width="100%"
            height="450"
            allow="autoplay"
            src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(soundcloudProfileUrl)}&color=%23e87c35&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
            style={{ border: "none", borderRadius: "8px", display: "block" }}
          />
        </div>
        <div className="buttonRow">
          <a
            href={siteLinks.social.soundcloud}
            target="_blank"
            rel="noreferrer"
            className="ctaBtn"
          >
            Open FMLY BZNS on SoundCloud
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
