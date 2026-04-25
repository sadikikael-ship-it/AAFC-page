import type { SiteEvent } from "@/data/events";

export function EventCard({ event }: { event: SiteEvent }) {
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
        <div className="eventCardActions">
          <a
            href={event.ticketUrl}
            target="_blank"
            rel="noreferrer"
            className="ctaBtn"
          >
            Buy Tickets
          </a>
          <a
            href={event.detailsUrl ?? event.ticketUrl}
            target="_blank"
            rel="noreferrer"
            className="smallBtn ghost"
          >
            Details
          </a>
        </div>
      </div>
    </article>
  );
}
