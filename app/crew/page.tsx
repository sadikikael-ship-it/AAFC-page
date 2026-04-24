import { PageHero } from '@/components/PageHero';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { crew } from '@/lib/siteData';

export default function CrewPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        title="Crew"
        subtitle="DJs, producers, hosts, designers, and builders shaping the FMLY BZNS movement."
      />
      <section className="section crewList">
        {crew.map(([name, role]) => (
          <article key={name}>
            <h3>{name}</h3>
            <p>{role}</p>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
