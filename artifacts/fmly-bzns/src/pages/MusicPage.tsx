import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { SoundCloudEmbed } from "@/components/SoundCloudEmbed";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { SocialIcon } from "@/components/SocialIcon";
import { mixes, weeklyMix } from "@/data/mixes";
import { videos, featuredVideo, youtubeChannelUrl } from "@/data/media";
import { siteLinks } from "@/data/siteLinks";

export default function MusicPage() {
  const otherVideos = videos.filter((v) => v.id !== featuredVideo.id);

  return (
    <main>
      <SiteHeader />
      <PageHero
        title="FMLY BZNS — Music & Mixes"
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

      <section className="section weeklyBand">
        <p className="eyebrow">Weekly Mix</p>
        <h2>{weeklyMix.title}</h2>
        <p className="weeklyDesc">{weeklyMix.description}</p>
        <SoundCloudEmbed url={weeklyMix.soundcloudUrl} title={weeklyMix.title} />
      </section>

      <section className="section mediaBand">
        <p className="eyebrow">FMLY BZNS · YouTube</p>
        <h2>{featuredVideo.title}</h2>
        <YouTubeEmbed
          videoId={featuredVideo.youtubeId}
          title={featuredVideo.title}
        />
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

      <section className="section">
        <p className="eyebrow">All mixes</p>
        <h2>The FMLY catalog</h2>
        <div className="mixGrid">
          {mixes.map((m) => (
            <article key={m.id} className="mixDeepCard">
              <SoundCloudEmbed url={m.soundcloudUrl} title={m.title} height={180} visual={false} />
              <div className="mixDeepBody">
                <h3>{m.title}</h3>
                <p className="mixCardArtist">by {m.artist}</p>
                <p className="mixDeepDesc">{m.description}</p>
                <div className="tagRow">
                  {m.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={m.externalUrl ?? siteLinks.social.soundcloud}
                  target="_blank"
                  rel="noreferrer"
                  className="smallBtn"
                >
                  Open on SoundCloud
                </a>
              </div>
            </article>
          ))}
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
          </a>
          <a
            href={siteLinks.social.spotify}
            target="_blank"
            rel="noreferrer"
            className="platformCard platformCard--sp"
          >
            <SocialIcon name="Spotify" />
            <span>Spotify</span>
          </a>
          <a
            href={youtubeChannelUrl}
            target="_blank"
            rel="noreferrer"
            className="platformCard platformCard--yt"
          >
            <SocialIcon name="YouTube" />
            <span>YouTube</span>
          </a>
          <a
            href={siteLinks.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="platformCard platformCard--ig"
          >
            <SocialIcon name="Instagram" />
            <span>Instagram</span>
          </a>
          <a
            href={siteLinks.social.tiktok}
            target="_blank"
            rel="noreferrer"
            className="platformCard platformCard--tk"
          >
            <SocialIcon name="TikTok" />
            <span>TikTok</span>
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
