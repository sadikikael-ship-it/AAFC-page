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
  ticketUrl: string;
  detailsUrl?: string;
  description?: string;
}

export const events: SiteEvent[] = [
  {
    id: "brooklyn-pulse",
    title: "Signal Night: Brooklyn Pulse",
    type: "Party",
    city: "Brooklyn, NY",
    venue: "The Foundry Hall",
    date: "May 22, 2026",
    time: "10:00 PM – 4:00 AM",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1400&q=80",
    ticketUrl: "https://ra.co/events/2090508",
    description:
      "Late-night Amapiano, Afro-house and global bass with the full FMLY BZNS resident lineup.",
  },
  {
    id: "paris-session",
    title: "Bass Ritual: Paris Session",
    type: "Party",
    city: "Paris, FR",
    venue: "Palais Electrique",
    date: "June 14, 2026",
    time: "11:00 PM – 5:00 AM",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1400&q=80",
    ticketUrl: "https://ra.co/events/2090511",
    description:
      "Diaspora bass weight, dub plates and FMLY MXTP guests. Doors 11pm.",
  },
  {
    id: "lagos-rooftop",
    title: "FMLY x Lagos Rooftop",
    type: "Activation",
    city: "Lagos, NG",
    venue: "Skyline Yard",
    date: "July 3, 2026",
    time: "9:30 PM",
    image:
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1400&q=80",
    ticketUrl: "https://ra.co/events/2090516",
    description:
      "Rooftop sundown set into the night with regional selectors and live percussion.",
  },
  {
    id: "field-day-takeover",
    title: "Field Day: FMLY BZNS Takeover",
    type: "Festival Takeover",
    city: "London, UK",
    venue: "Field Day Festival",
    date: "August 15, 2026",
    time: "3:00 PM – 10:00 PM",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1400&q=80",
    ticketUrl: "https://fielddayfestivals.com/tickets",
    description:
      "Curated daytime stage takeover featuring six FMLY BZNS residents and special guests.",
  },
  {
    id: "berlin-ritual",
    title: "Movement Ritual: Berlin",
    type: "Party",
    city: "Berlin, DE",
    venue: "Säule",
    date: "September 5, 2026",
    time: "Midnight – 8:00 AM",
    image:
      "https://images.unsplash.com/photo-1574391884720-bbc049ec09ad?auto=format&fit=crop&w=1400&q=80",
    ticketUrl: "https://ra.co/events/2090519",
    description:
      "All-night ritual with a four-room program — main floor, sound system, healing corner, and listening space.",
  },
  {
    id: "afronation-stage",
    title: "Afro Nation: FMLY BZNS Stage",
    type: "Festival",
    city: "Portimão, PT",
    venue: "Afro Nation Festival",
    date: "July 11–14, 2026",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1400&q=80",
    ticketUrl: "https://www.afronation.com/portugal",
    description:
      "Three-day stage program at Afro Nation, with a community-focused listening tent during the day.",
  },
  {
    id: "community-cookout",
    title: "Community Cookout & Listening",
    type: "Community",
    city: "Brooklyn, NY",
    venue: "Herbert Von King Park",
    date: "August 30, 2026",
    time: "2:00 PM – 8:00 PM",
    image:
      "https://images.unsplash.com/photo-1496024840928-4c417adf211d?auto=format&fit=crop&w=1400&q=80",
    ticketUrl: "https://www.eventbrite.com/",
    description:
      "Free, family-friendly cookout — vinyl, healing arts, food, and the FMLY MXTP live recording.",
  },
];
