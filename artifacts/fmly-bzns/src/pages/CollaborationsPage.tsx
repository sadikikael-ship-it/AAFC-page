import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { Marquee } from "@/components/Marquee";
import { collaborators, marqueeItems } from "@/data/collaborators";
import { Link } from "wouter";

const groupOrder = ["Festival", "Venue", "Artist", "Brand", "City"] as const;

export default function CollaborationsPage() {
  const grouped = groupOrder.map((kind) => ({
    kind,
    items: collaborators.filter((c) => c.kind === kind),
  }));

  return (
    <main>
      <SiteHeader />
      <PageHero
        title="Collaborations"
        subtitle="Festivals, venues, artists, brands and cities we've built with — past, present, and what's coming."
        actions={
          <Link href="/contact" className="ctaBtn">
            Propose a collaboration
          </Link>
        }
      />

      <section className="section marqueeBand">
        <Marquee items={marqueeItems} speedSeconds={42} />
      </section>

      {/* FEATURED ARTISTS — collaborators with a bio */}
      {(() => {
        const featured = collaborators.filter((c) => c.bio);
        if (!featured.length) return null;
        return (
          <section className="section featuredCollabBand">
            <p className="eyebrow">Featured artists</p>
            <h2>Featured FMLY DJs &amp; Artists</h2>
            <div className="featuredCollabGrid">
              {featured.map((c) => (
                <article key={c.name} className={`featuredCollabCard featuredCollabCard--${c.kind.toLowerCase()}`}>
                  <div className="featuredCollabTop">
                    <span className={`pill pill--${c.kind.toLowerCase()}`}>
                      {c.kind}
                    </span>
                  </div>
                  <h3 className="featuredCollabName">{c.name}</h3>
                  {c.role && <p className="featuredCollabRole">{c.role}</p>}
                  {c.bio && <p className="featuredCollabBio">{c.bio}</p>}
                </article>
              ))}
            </div>
          </section>
        );
      })()}

      {grouped.map((group) => {
        const plural = group.kind === "City" ? "Cities" : `${group.kind}s`;
        return (
        <section key={group.kind} className="section">
          <p className="eyebrow">{plural}</p>
          <h2>{plural}</h2>
          <div className="collabPills">
            {group.items.map((c) =>
              c.url ? (
                <a
                  key={c.name}
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`pill pill--${c.kind.toLowerCase()} pill--link`}
                >
                  {c.name}
                  <em>{c.kind}</em>
                </a>
              ) : (
                <span
                  key={c.name}
                  className={`pill pill--${c.kind.toLowerCase()}`}
                >
                  {c.name}
                  <em>{c.kind}</em>
                </span>
              ),
            )}
          </div>
        </section>
        );
      })}

      <SiteFooter />
    </main>
  );
}
