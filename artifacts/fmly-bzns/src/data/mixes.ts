export interface Mix {
  id: string;
  title: string;
  artist: string;
  description: string;
  /** Full SoundCloud track or set URL (for the embed widget). */
  soundcloudUrl: string;
  /** Optional direct page link if the embed should not be used. */
  externalUrl?: string;
  /** Tags shown as pills on the card. */
  tags: string[];
  /** True for the homepage Weekly Mix slot. */
  weekly?: boolean;
}

export const mixes: Mix[] = [
  {
    id: "weekly-vol-12",
    title: "FMLY MXTP Vol. 12 — Sunset Circle",
    artist: "Nia Rhythm",
    description:
      "This week's selection — slow-burning Afro-house, broken Amapiano, and a finale of dub. Recorded live at the Brooklyn rooftop session.",
    soundcloudUrl: "https://soundcloud.com/fmlybzns",
    tags: ["Weekly", "Afro-House", "Amapiano"],
    weekly: true,
  },
  {
    id: "frequencies-04",
    title: "FMLY Frequencies Vol. 04",
    artist: "Malik Wave",
    description:
      "Producer-only edition. Original edits, unreleased flips and broken percussion from the FMLY studio.",
    soundcloudUrl: "https://soundcloud.com/fmlybzns",
    tags: ["Originals", "Edits"],
  },
  {
    id: "movement-broadcast",
    title: "Movement Broadcast — Studio Session",
    artist: "FMLY BZNS Residents",
    description:
      "Two-hour live broadcast filmed in the FMLY studio with the full resident crew on rotation.",
    soundcloudUrl: "https://soundcloud.com/fmlybzns",
    tags: ["Live", "Residents"],
  },
  {
    id: "diaspora-bass",
    title: "Diaspora Bass Vol. 02",
    artist: "Tariq Motion",
    description:
      "Sound system weight — UK funky, Baile, Gqom and Dancehall edits across 90 minutes.",
    soundcloudUrl: "https://soundcloud.com/fmlybzns",
    tags: ["Bass", "Sound System"],
  },
  {
    id: "ritual-radio",
    title: "Ritual Radio — Healing Set",
    artist: "Sade Sol",
    description:
      "Ambient, percussive and devotional — a sunrise listening set for the after-after.",
    soundcloudUrl: "https://soundcloud.com/fmlybzns",
    tags: ["Ambient", "Healing"],
  },
  {
    id: "lagos-night",
    title: "Lagos Night Tape",
    artist: "Andreas",
    description:
      "Recorded across three nights in Lagos. Afrobeats, log drum, and street-corner field recordings.",
    soundcloudUrl: "https://soundcloud.com/fmlybzns",
    tags: ["Afrobeats", "Field"],
  },
];

export const weeklyMix = mixes.find((m) => m.weekly) ?? mixes[0];
