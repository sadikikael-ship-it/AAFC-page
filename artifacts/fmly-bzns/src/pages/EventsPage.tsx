import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { EventCard } from "@/components/EventCard";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { events, featuredEventVideo, type EventType } from "@/data/events";

const filters: ("All" | EventType)[] = [
  "All",
  "Festival Takeover",
  "Festival",
  "Party",
  "Activation",
  "Community",
];

export default function EventsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const visible = useMemo(() => {
    if (filter === "All") return events;
    return events.filter((e) => e.type === filter);
  }, [filter]);

  return (
    <main>
      <SiteHeader />
      <PageHero
        title="Events & Takeovers"
        subtitle="Festivals, festival takeovers, parties, and FMLY BZNS community activations."
        background="https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=2200&q=80"
      />

      <section className="section">
        <article className="eventVideoCard" aria-labelledby="event-video-title">
          <p className="eyebrow">Festival Takeover Preview</p>
          <h3 id="event-video-title">{featuredEventVideo.title}</h3>
          <YouTubeEmbed
            videoId={featuredEventVideo.youtubeId}
            title={featuredEventVideo.title}
          />
        </article>

        <div className="filterRow" role="tablist" aria-label="Filter events">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              className={`filterChip ${filter === f ? "filterChip--on" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="eventGrid">
          {visible.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
        {visible.length === 0 ? (
          <p className="emptyMsg">
            No events of this type right now — check back soon.
          </p>
        ) : null}
      </section>

      <SiteFooter />
    </main>
  );
}
