import type { SiteEvent } from "@/data/events";

export function EventCard({ event }: { event: SiteEvent }) {
  const primary = event.ticketUrl
    ? { href: event.ticketUrl, label: "Buy Tickets" }
    : event.learnMoreUrl
      ? { href: event.learnMoreUrl, label: "Learn More" }
      : event.detailsUrl
        ? { href: event.detailsUrl, label: "Details" }
        : null;

  return (
    <article className="eventCard">
      <div
        className="eventCardImage"
        style={{ backgroundImage: `url(${event.image})` }}
        role="img"
        aria-label={event.title}
      />
      <div className="eventCardBody">
        <p className="eyebrow">{event.type}</p>
        <h3 className="eventCardTitle">{event.title}</h3>
        <p className="eventCardMeta">
          <strong>{event.city}</strong> · {event.venue}
        </p>
        <p className="eventCardMeta">
          {event.date}
          {event.time ? ` · ${event.time}` : ""}
        </p>
        {event.description ? (
          <p className="eventCardDesc">{event.description}</p>
        ) : null}
        {primary ? (
          <div className="eventCardActions">
            <a
              href={primary.href}
              target="_blank"
              rel="noreferrer"
              className="ctaBtn"
            >
              {primary.label}
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
}
