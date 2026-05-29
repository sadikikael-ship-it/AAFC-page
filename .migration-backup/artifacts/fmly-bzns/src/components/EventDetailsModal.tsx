import { useEffect, useState } from "react";
import { Link } from "wouter";
import { FaTimes, FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import type { SiteEvent } from "@/data/events";
import { useCart, formatPrice } from "@/lib/cart";

interface Props {
  event: SiteEvent;
  onClose: () => void;
}

export function EventDetailsModal({ event, onClose }: Props) {
  const { add } = useCart();
  const [added, setAdded] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const handleAdd = (tierId: string, tierName: string, priceCents: number) => {
    add({
      id: `event:${event.id}:${tierId}`,
      kind: "ticket",
      name: tierName,
      subtitle: event.title,
      priceCents,
      image: event.image,
      metadata: {
        eventId: event.id,
        eventTitle: event.title,
        tierId,
      },
    });
    setAdded(tierId);
    window.setTimeout(() => setAdded((cur) => (cur === tierId ? null : cur)), 1800);
  };

  return (
    <div
      className="modalOverlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${event.id}`}
      onClick={onClose}
    >
      <div className="modalCard" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modalClose"
          aria-label="Close"
          onClick={onClose}
        >
          <FaTimes aria-hidden focusable="false" />
        </button>

        <div
          className="modalHero"
          style={{ backgroundImage: `url(${event.image})` }}
          role="img"
          aria-label={event.title}
        />

        <div className="modalBody">
          <p className="eyebrow">{event.type}</p>
          <h2 id={`modal-title-${event.id}`}>{event.title}</h2>

          <ul className="modalMetaList">
            <li>
              <FaCalendarAlt aria-hidden focusable="false" />
              <span>{event.date}</span>
            </li>
            {event.time ? (
              <li>
                <FaClock aria-hidden focusable="false" />
                <span>{event.time}</span>
              </li>
            ) : null}
            <li>
              <FaMapMarkerAlt aria-hidden focusable="false" />
              <span>
                <strong>{event.venue}</strong>
                {event.address ? ` · ${event.address}` : ` · ${event.city}`}
              </span>
            </li>
            {event.ageRestriction ? (
              <li>
                <span aria-hidden style={{ width: 16 }} />
                <span>{event.ageRestriction}</span>
              </li>
            ) : null}
          </ul>

          {event.longDescription ? (
            <p className="modalLead">{event.longDescription}</p>
          ) : event.description ? (
            <p className="modalLead">{event.description}</p>
          ) : null}

          {event.highlights && event.highlights.length > 0 ? (
            <div className="modalSection">
              <h3>What's included</h3>
              <ul className="modalBullets">
                {event.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {event.lineup && event.lineup.length > 0 ? (
            <div className="modalSection">
              <h3>Lineup</h3>
              <ul className="modalLineup">
                {event.lineup.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {event.tiers && event.tiers.length > 0 ? (
            <div className="modalSection">
              <h3>Tickets</h3>
              <div className="tierList">
                {event.tiers.map((tier) => (
                  <div key={tier.id} className="tierRow">
                    <div className="tierInfo">
                      <div className="tierTitleRow">
                        <h4>{tier.name}</h4>
                        {tier.badge ? (
                          <span className="tierBadge">{tier.badge}</span>
                        ) : null}
                      </div>
                      <p className="tierDesc">{tier.description}</p>
                      <p className="tierPrice">{formatPrice(tier.priceCents)}</p>
                    </div>
                    <div className="tierAction">
                      {tier.soldOut ? (
                        <span className="tierSold">Sold out</span>
                      ) : (
                        <button
                          type="button"
                          className={
                            added === tier.id ? "smallBtn added" : "smallBtn"
                          }
                          onClick={() =>
                            handleAdd(tier.id, tier.name, tier.priceCents)
                          }
                        >
                          {added === tier.id ? "Added ✓" : "Add to Cart"}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="modalCheckoutRow">
                <Link href="/cart" className="ctaBtn" onClick={onClose}>
                  Go to Cart & Checkout
                </Link>
                {event.learnMoreUrl ? (
                  <a
                    href={event.learnMoreUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="smallBtn ghost"
                  >
                    More Info
                  </a>
                ) : null}
              </div>
            </div>
          ) : (
            <div className="modalSection">
              <h3>Tickets</h3>
              <p className="modalLead">
                Tickets for this event are sold externally.
                {event.learnMoreUrl
                  ? " Use the link below for details and to purchase."
                  : ""}
              </p>
              {event.learnMoreUrl ? (
                <div className="modalCheckoutRow">
                  <a
                    href={event.learnMoreUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="ctaBtn"
                  >
                    Learn More & Buy Tickets
                  </a>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
