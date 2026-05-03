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
  priceCents: number;
  description: string;
  maxPerOrder?: number;
  soldOut?: boolean;
  badge?: string;
}

export interface SiteEvent {
  id: string;
  title: string;
  type: EventType;
  city: string;
  venue: string;
  date: string;
  time?: string;
  address?: string;
  ageRestriction?: string;
  image: string;
  gallery?: string[];
  lineup?: string[];
  highlights?: string[];
  ticketUrl?: string;
  learnMoreUrl?: string;
  detailsUrl?: string;
  description?: string;
  longDescription?: string;
  tiers?: TicketTier[];
}

export const events: SiteEvent[] = [
  {
    id: "lib-crossroads",
    title: "FMLY BZNS takeover: The Crossroads at Lightning in a Bottle",
    type: "Festival Takeover",
    city: "Buena Vista Lake, CA",
    venue: "Lightning in a Bottle Festival",
    date: "May 24, 2026",
    time: "8PM – 4AM",
    address: "Buena Vista Aquatic Recreation Area, Kern County, CA",
    ageRestriction: "All ages (18+ for camping without guardian)",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&q=80",
    lineup: [
      "FMLY BZNS resident DJs",
      "Global selectors from Ghana, Zimbabwe, Netherlands, Egypt, Colombia, Jamaica, Venezuela, California, and beyond",
    ],
    highlights: [
      "Full 8-hour, night-to-dawn session",
      "Amapiano, Afro-House, Gqom, Baile Funk, Dancehall, and global club",
      "Rooted in Afro-diaspora sound",
      "High-intensity late-night rave",
    ],
    description:
      "FMLY BZNS takes over The Crossroads at Lightning in a Bottle for a full 8-hour, night-to-dawn session—Sunday, May 24 from 8PM–4AM—bringing a global lineup of selectors and artists from Ghana, Zimbabwe, Netherlands, Egypt, Colombia, Jamaica, Venezuela, California, and beyond into one unified frequency. Rooted in Afro-diaspora sound and built for the late-night rave, this is a high-intensity journey through Amapiano, Afro-House, Gqom, Baile Funk, Dancehall, and global club.",
    longDescription:
      "Tickets for Lightning in a Bottle are sold by the festival directly. Visit the LIB website for tickets and festival info.",
    learnMoreUrl: "https://www.libfestival.org/",
  },
  {
    id: "the-gathering",
    title: "FMLY BZNS x Gateway Mendocino: THE GATHERING",
    type: "Festival Takeover",
    city: "Northern California",
    venue: "Gateway Mendocino",
    date: "July 30 – August 2, 2026",
    time: "Gates open Thursday noon · Music until late Sunday",
    address: "Gateway Mendocino, Northern California",
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
      "3-day, 3-night immersion in Northern California",
      "Global Dance Music Culture meets nature, community, and intention",
      "Sunlit sessions by the water into late-night dancefloors",
      "Boutique microfestival — limited capacity",
    ],
    description:
      "FMLY BZNS returns with Gateway Mendocino for The Gathering 2026, July 30 – August 2—a 3-day, 3-night immersion where Global Dance Music Culture meets nature, community, and intention. Set deep in Northern California's landscape, this boutique microfestival blends Afro-diaspora sound with transformational energy—flowing from sunlit sessions by the water into late-night dancefloors that carry the energy deep into the night.",
    longDescription:
      "Limited capacity. Bring your people. Tickets available on Eventbrite.",
    ticketUrl:
      "https://www.eventbrite.com/e/fmly-bzns-the-gathering-tickets-1986467302175?aff=erelexpmlt",
    tiers: [
      {
        id: "ga-weekend",
        name: "GA Weekend Pass",
        priceCents: 24900,
        description:
          "All four days. Access to all music, art, and wellness programming.",
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
    id: "felix-sf",
    title: "FMLY BZNS: The Felix SF",
    type: "Party",
    city: "San Francisco, CA",
    venue: "The Felix SF",
    date: "June 6, 2026",
    time: "Doors 9PM",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1600&q=80",
    lineup: ["AndreasOne", "SAGE", "One Lovell"],
    highlights: [
      "Sound, style, and late-night connection",
      "Amapiano, Afro-House, Dancehall, and global club",
      "One of San Francisco's most refined dancefloor settings",
    ],
    description:
      "FMLY BZNS takes over The Felix SF on June 6, 2026 for a night rooted in sound, style, and late-night connection—bringing Global Dance Music Culture into one of San Francisco's most refined dancefloor settings. Featuring AndreasOne, SAGE, and One Lovell, expect a seamless blend of Afro-diaspora rhythms moving through Amapiano, Afro-House, Dancehall, and global club.",
    longDescription:
      "Featuring AndreasOne, SAGE, and One Lovell. Tickets at the door and online — details coming soon.",
  },
  {
    id: "nakey-island-ssbd",
    title: "FMLY BZNS takeover: Nakey Island at Same Same But Different",
    type: "Festival Takeover",
    city: "TBA",
    venue: "Same Same But Different Festival",
    date: "TBA 2026",
    image:
      "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "6-hour takeover on Nakey Island",
      "Sun-soaked, beachside journey of Global Dance Music Culture",
      "Amapiano, Afro-Latin House, Dancehall, Baile Funk, and beyond",
      "Rooted in Afro-diaspora rhythms, shaped by island energy",
    ],
    description:
      "FMLY BZNS lands on Nakey Island at Same Same But Different for a 6-hour takeover—bringing a sun-soaked, beachside journey of Global Dance Music Culture to the water's edge. Rooted in Afro-diaspora rhythms and shaped by island energy, the sound drifts through Amapiano, Afro-Latin House, Dancehall, Baile Funk, and beyond.",
    longDescription:
      "Tickets for Same Same But Different are sold by the festival directly. Visit the SSBD website for more info.",
    learnMoreUrl: "https://www.ssbdfest.com/",
  },
];
