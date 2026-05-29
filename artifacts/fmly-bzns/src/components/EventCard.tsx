import { useState } from "react";
import type { SiteEvent } from "@/data/events";
import { EventDetailsModal } from "./EventDetailsModal";

export function EventCard({ event }: { event: SiteEvent }) {
  const [open, setOpen] = useState(false);
  const hasTiers = !!event.tiers && event.tiers.length > 0;
  const hasModalContent =
    hasTiers ||
    !!event.lineup?.length ||
    !!event.highlights?.length ||
    !!event.longDescription;

  return (
    <>
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
            {hasTiers ? (
              <button
                type="button"
                className="ctaBtn"
                onClick={() => setOpen(true)}
              >
                Buy Tickets
              </button>
            ) : event.ticketUrl ? (
              <a
                href={event.ticketUrl}
                target="_blank"
                rel="noreferrer"
                className="ctaBtn"
              >
                Buy Tickets
              </a>
            ) : event.learnMoreUrl ? (
              <a
                href={event.learnMoreUrl}
                target="_blank"
                rel="noreferrer"
                className="ctaBtn"
              >
                Learn More
              </a>
            ) : null}
            {hasModalContent ? (
              <button
                type="button"
                className="smallBtn ghost"
                onClick={() => setOpen(true)}
              >
                Details
              </button>
            ) : event.detailsUrl ? (
              <a
                href={event.detailsUrl}
                target="_blank"
                rel="noreferrer"
                className="smallBtn ghost"
              >
                Details
              </a>
            ) : null}
          </div>
        </div>
      </article>
      {open ? (
        <EventDetailsModal event={event} onClose={() => setOpen(false)} />
      ) : null}
    </>
  );
}
