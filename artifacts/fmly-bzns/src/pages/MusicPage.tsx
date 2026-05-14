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
          {/* TODO: Replace href="#" with actual Spotify track link */}
          {/* TODO: Replace albumArt src with actual album art image */}
          <a href="#" className="dojoAlbumCard" aria-label="BLVK H3RO on Spotify">
            <div className="dojoAlbumArt dojoAlbumArt--placeholder">
              <span>BLVK H3RO</span>
            </div>
            <p className="dojoAlbumName">BLVK H3RO</p>
          </a>
          {/* TODO: Replace href="#" with actual Spotify track link */}
          <a href="#" className="dojoAlbumCard" aria-label="Kes Kross on Spotify">
            <div className="dojoAlbumArt dojoAlbumArt--placeholder">
              <span>Kes Kross</span>
            </div>
            <p className="dojoAlbumName">Kes Kross</p>
          </a>
          {/* TODO: Replace href="#" with actual Spotify track link */}
          <a href="#" className="dojoAlbumCard" aria-label="Seun Kuti on Spotify">
            <div className="dojoAlbumArt dojoAlbumArt--placeholder">
              <span>Seun Kuti</span>
            </div>
            <p className="dojoAlbumName">Seun Kuti</p>
          </a>
          {/* TODO: Replace href="#" with actual Spotify track link */}
          <a href="#" className="dojoAlbumCard" aria-label="Jade De LaFleur on Spotify">
            <div className="dojoAlbumArt dojoAlbumArt--placeholder">
              <span>Jade De LaFleur</span>
            </div>
            <p className="dojoAlbumName">Jade De LaFleur</p>
          </a>
          {/* TODO: Replace href="#" with actual Spotify track link */}
          <a href="#" className="dojoAlbumCard" aria-label="Amalyn on Spotify">
            <div className="dojoAlbumArt dojoAlbumArt--placeholder">
              <span>Amalyn</span>
            </div>
            <p className="dojoAlbumName">Amalyn</p>
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
