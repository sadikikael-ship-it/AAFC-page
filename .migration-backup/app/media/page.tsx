import { PageHero } from '@/components/PageHero';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { media } from '@/lib/siteData';

export default function MediaPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero title="Music / Mixes / Media" subtitle="A curated archive of mixes, playlists, films, and visual storytelling." />
      <section className="section cards3">
        {media.map((item) => (
          <article className="card" key={item.title}>
            <p className="eyebrow">{item.kind}</p>
            <h3>{item.title}</h3>
            <p>Embed-ready card for Spotify, SoundCloud, YouTube, and platform-native releases.</p>
            <a href={item.url} target="_blank" rel="noreferrer" className="inlineLink">{item.cta}</a>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
