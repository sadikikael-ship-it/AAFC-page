export interface EventVideo {
  id: string;
  title: string;
  youtubeId: string;
  youtubeUrl: string;
  embedUrl: string;
}

export const eventVideos: EventVideo[] = [
  {
    id: "the-gathering-trailer",
    title: "The Gathering — Boutique Festival Trailer",
    youtubeId: "qMm-fpsLi7w",
    youtubeUrl: "https://www.youtube.com/watch?v=qMm-fpsLi7w",
    embedUrl: "https://www.youtube.com/embed/qMm-fpsLi7w",
  },
];

export const featuredEventVideo = eventVideos[0];

export type EventType =
  | "Festival Takeover"
  | "Party"
  | "Festival"
  | "Community"
  | "Activation";

export interface TicketTier {
  id: string;
  name: string;
  /** Price in cents (USD) — used for cart math. */
  priceCents: number;
  /** Short description — what's included. */
  description: string;
  /** Optional cap per order. Defaults to 8. */
  maxPerOrder?: number;
  soldOut?: boolean;
  /** Optional badge (e.g. "Early Bird", "Best Value"). */
  badge?: string;
}

export interface SiteEvent {
  id: string;
  title: string;
  type: EventType;
  city: string;
  venue: string;
  /** Display date string (e.g. "May 21 – 26, 2026"). */
  date: string;
  /** Optional doors / start time line (e.g. "Gates 12pm · Music 2pm"). */
  time?: string;
  /** Optional street address. */
  address?: string;
  /** Optional age restriction (e.g. "21+", "All ages"). */
  ageRestriction?: string;
  image: string;
  /** Optional gallery — additional event images. */
  gallery?: string[];
  /** Lineup / featured artists. */
  lineup?: string[];
  /** Bullets describing what's included / highlights. */
  highlights?: string[];
  /**
   * Direct ticket purchase URL — DEPRECATED for in-app cart flow.
   * If present without `tiers`, EventCard falls back to external link.
   */
  ticketUrl?: string;
  /** Public info / lineup URL — used as a "Learn More" external CTA. */
  learnMoreUrl?: string;
  detailsUrl?: string;
  description?: string;
  /** Long-form description shown in the details modal. */
  longDescription?: string;
  /** Ticket tiers sold via the in-app cart. */
  tiers?: TicketTier[];
}

// Edit this list to update the upcoming events shown across the site.
export const events: SiteEvent[] = [
  {
    id: "the-gathering",
    title: "The Gathering — Boutique Festival",
    type: "Festival Takeover",
    city: "Mendocino, CA",
    venue: "Gateway Mendocino",
    date: "August 14 – 16, 2026",
    time: "Gates Friday 2pm · Music until late Sunday",
    address: "Gateway Mendocino, Mendocino County, CA",
    ageRestriction: "21+ (with valid ID)",
    image:
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1600&q=80",
    ],
    lineup: [
      "FMLY BZNS DJs",
      "Special guests TBA",
      "Live percussion ensemble",
      "Sunset ritual set",
    ],
    highlights: [
      "Three days of music in the redwoods",
      "On-site camping & glamping options",
      "Curated food vendors and bar",
      "Wellness sessions, sound baths, art",
    ],
    description:
      "FMLY BZNS x Gateway Mendocino — a boutique festival in the redwoods. Music, ritual, and community over one weekend.",
    longDescription:
      "The Gathering is FMLY BZNS' flagship festival takeover — three days of Afro-diaspora club sounds, live percussion, and ritual programming on a private redwood property. Limited capacity. Bring your people.",
    tiers: [
      {
        id: "ga-weekend",
        name: "GA Weekend Pass",
        priceCents: 24900,
        description:
          "All three days. Access to all music, art, and wellness programming.",
        badge: "Best Value",
      },
      {
        id: "vip-weekend",
        name: "VIP Weekend Pass",
        priceCents: 49900,
        description:
          "Everything in GA + private viewing platform, dedicated bar, and welcome bag.",
      },
      {
        id: "saturday-only",
        name: "Saturday Day Pass",
        priceCents: 12900,
        description: "Single day pass for Saturday only.",
      },
      {
        id: "camping-addon",
        name: "Tent Camping Add-on",
        priceCents: 8900,
        description:
          "On-site tent camping for the full weekend. BYO tent. Add to any pass.",
      },
    ],
  },
  {
    id: "lightning-in-a-bottle",
    title: "Lightning in a Bottle Takeover",
    type: "Festival Takeover",
    city: "Buena Vista Lake, CA",
    venue: "Lightning in a Bottle Festival",
    date: "May 21 – 26, 2026",
    time: "Stage hours TBA",
    address: "Buena Vista Aquatic Recreation Area, Kern County, CA",
    ageRestriction: "All ages (18+ for camping without guardian)",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&q=80",
    lineup: [
      "FMLY BZNS resident DJs",
      "Stage takeover guest lineup TBA",
    ],
    highlights: [
      "FMLY BZNS curated stage at LIB 2026",
      "Full set times announced closer to date",
      "Tickets sold via Lightning in a Bottle",
    ],
    learnMoreUrl: "https://lightninginabottle.org",
    description:
      "FMLY BZNS curates a stage takeover at Lightning in a Bottle — full lineup announcement coming soon.",
    longDescription:
      "Tickets for Lightning in a Bottle are sold by the festival directly. We'll be hosting a curated stage with the FMLY BZNS sound — keep an eye out for the full lineup drop.",
  },
];
