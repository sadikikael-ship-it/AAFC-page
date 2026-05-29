import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { Marquee } from "@/components/Marquee";
import { collaborators, marqueeItems, type Collaborator } from "@/data/collaborators";
import { Link } from "wouter";
import { FaInstagram, FaSpotify, FaSoundcloud, FaGlobe } from "react-icons/fa";

const groupOrder = ["Festival", "Venue", "Artist", "Brand", "City"] as const;

function SocialIcons({ c }: { c: Collaborator }) {
  const links = [
    { url: c.instagramUrl, icon: <FaInstagram aria-hidden focusable="false" />, label: "Instagram" },
    { url: c.spotifyUrl, icon: <FaSpotify aria-hidden focusable="false" />, label: "Spotify" },
    { url: c.soundcloudUrl, icon: <FaSoundcloud aria-hidden focusable="false" />, label: "SoundCloud" },
    ...(c.url && !c.url.startsWith("/") && c.kind !== "Festival" && c.kind !== "Brand"
      ? [{ url: c.url, icon: <FaGlobe aria-hidden focusable="false" />, label: "Website" }]
      : []),
  ].filter((l) => l.url);

  if (links.length === 0) return null;

  return (
    <>
      {links.map(({ url, icon, label }) => (
        <span
          key={label}
          className="pillIgBtn"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            window.open(url, "_blank", "noopener,noreferrer");
          }}
          role="link"
          tabIndex={0}
          aria-label={`${c.name} on ${label}`}
          onKeyDown={(e) => {
            if (e.key === "Enter") window.open(url, "_blank", "noopener,noreferrer");
          }}
        >
          {icon}
        </span>
      ))}
    </>
  );
}

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
                const hasSocials = c.instagramUrl || c.spotifyUrl || c.soundcloudUrl;
                const isClickable = c.url || hasSocials;
                const pillClass = `pill pill--${c.kind.toLowerCase()}${isClickable ? " pill--link" : ""}`;
                const inner = (
                  <>
                    {c.name}
                    <em>{c.kind}</em>
                    <SocialIcons c={c} />
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
                  <span key={c.name} className={pillClass}>
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
