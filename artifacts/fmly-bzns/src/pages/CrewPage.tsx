import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { CrewCard } from "@/components/CrewCard";
import { crew, tierOrder } from "@/data/crew";

export default function CrewPage() {
  const tiers = tierOrder
    .map((tier) => ({ tier, members: crew.filter((m) => m.tier === tier) }))
    .filter(({ members }) => members.length > 0);

  return (
    <main>
      <SiteHeader />
      <PageHero
        title="The FMLY"
        subtitle="DJs, producers, selectors, culture builders, and world makers — the people building FMLY BZNS across cities and dancefloors."
      />

      <section className="section crewSection">
        {tiers.map(({ tier, members }) => (
          <div key={tier} className="crewTier">
            <p className="eyebrow crewTierLabel">{tier}</p>
            <div className="crewGrid">
              {members.map((member) => (
                <CrewCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        ))}
      </section>

      <SiteFooter />
    </main>
  );
}
