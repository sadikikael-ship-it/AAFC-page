import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { CrewCard } from "@/components/CrewCard";
import { crew } from "@/data/crew";

export default function CrewPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        title="The Crew"
        subtitle="DJs, producers, hosts, designers, photographers and community leads — the people building FMLY BZNS across cities."
      />

      <section className="section">
        <div className="crewGrid">
          {crew.map((member) => (
            <CrewCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
