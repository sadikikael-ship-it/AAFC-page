import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { Marquee } from "@/components/Marquee";
import { collaborators, marqueeItems } from "@/data/collaborators";
import { Link } from "wouter";
import { FaInstagram } from "react-icons/fa";

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

      {grouped.map((group) => {
        const plural = group.kind === "City" ? "Cities" : `${group.kind}s`;
        return (
          <section key={group.kind} className="section">
            <p className="eyebrow">{plural}</p>
            <h2>{plural}</h2>
            <div className="collabPills">
              {group.items.map((c) => {
                const isInternal = c.url?.startsWith("/");
                const pillClass = `pill pill--${c.kind.toLowerCase()}${c.url || c.instagramUrl ? " pill--link" : ""}`;
                const inner = (
                  <>
                    {c.name}
                    <em>{c.kind}</em>
                    {c.instagramUrl && (
                      <span
                        className="pillIgBtn"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          window.open(c.instagramUrl, "_blank", "noopener,noreferrer");
                        }}
                        role="link"
                        tabIndex={0}
                        aria-label={`${c.name} on Instagram`}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") window.open(c.instagramUrl, "_blank", "noopener,noreferrer");
                        }}
                      >
                        <FaInstagram aria-hidden focusable="false" />
                      </span>
                    )}
                  </>
                );

                if (isInternal && c.url) {
                  return (
                    <Link key={c.name} href={c.url} className={pillClass}>
                      {inner}
                    </Link>
                  );
                }
                if (c.url) {
                  return (
                    <a key={c.name} href={c.url} target="_blank" rel="noreferrer" className={pillClass}>
                      {inner}
                    </a>
                  );
                }
                return (
                  <span key={c.name} className={`pill pill--${c.kind.toLowerCase()}${c.instagramUrl ? " pill--link" : ""}`}>
                    {inner}
                  </span>
                );
              })}
            </div>
          </section>
        );
      })}

      <SiteFooter />
    </main>
  );
}
