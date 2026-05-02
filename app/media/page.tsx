import { PageHero } from '@/components/PageHero';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { siteLinks, weeklyMix } from '@/lib/siteData';
import { SocialIcon } from '@/components/SocialIcon';

export default function MediaPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero title="Music / Mixes" subtitle="FMLY BZNS mixes, sets, and media channels." />
      <section className="section eventsBand">
        <h2>{weeklyMix.title}</h2>
        <p>{weeklyMix.description}</p>
        <iframe title="FMLY mix embed" className="mediaEmbed" src={weeklyMix.soundcloudEmbed} />
        <div className="socialIconOnlyRow" aria-label="music channels">
          <a href={siteLinks.social.soundcloud} target="_blank" rel="noreferrer" aria-label="SoundCloud"><SocialIcon name="SoundCloud" /></a>
          <a href={siteLinks.social.spotify} target="_blank" rel="noreferrer" aria-label="Spotify"><SocialIcon name="Spotify" /></a>
          <a href={siteLinks.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"><SocialIcon name="YouTube" /></a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
