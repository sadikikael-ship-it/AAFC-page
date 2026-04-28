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

export interface SiteEvent {
  id: string;
  title: string;
  type: EventType;
  city: string;
  venue: string;
  date: string;
  time?: string;
  image: string;
  /** Direct ticket purchase URL — renders a "Buy Tickets" CTA when present. */
  ticketUrl?: string;
  /** Public info / lineup URL — renders a "Learn More" CTA when ticketUrl is absent. */
  learnMoreUrl?: string;
  detailsUrl?: string;
  description?: string;
}

// Edit this list to update the upcoming events shown across the site.
export const events: SiteEvent[] = [
  {
    id: "the-gathering",
    title: "The Gathering — Boutique Festival",
    type: "Festival Takeover",
    city: "Mendocino, CA",
    venue: "Gateway Mendocino",
    date: "Summer 2026",
    image:
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1600&q=80",
    ticketUrl: "https://shop.fmlybzns.com/the-gathering",
    description:
      "FMLY BZNS x Gateway Mendocino — a boutique festival in the redwoods. Music, ritual, and community over one weekend.",
  },
  {
    id: "lightning-in-a-bottle",
    title: "Lightning in a Bottle Takeover",
    type: "Festival Takeover",
    city: "Buena Vista Lake, CA",
    venue: "Lightning in a Bottle Festival",
    date: "May 21 – 26, 2026",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&q=80",
    learnMoreUrl: "https://lightninginabottle.org",
    description:
      "FMLY BZNS curates a stage takeover at Lightning in a Bottle — full lineup announcement coming soon.",
  },
];
