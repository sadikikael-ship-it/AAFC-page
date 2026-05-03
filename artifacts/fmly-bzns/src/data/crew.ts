export type CrewTier =
  | "Core Frequency"
  | "Sound & Vision"
  | "World Builders"
  | "Featured FMLY DJs and Artists"
  | "Selectors & Contributors";

export interface CrewMember {
  name: string;
  handle?: string;
  role: string;
  city?: string;
  image: string;
  bgPosition?: string;
  bio: string;
  tier: CrewTier;
  soundcloudUrl?: string;
  instagramUrl?: string;
}

export const crew: CrewMember[] = [
  {
    name: "ANDREASONE",
    role: "Founder · Creative Direction · Selector",
    city: "Oakland / Global",
    image: "/crew-andreasone.png",
    bgPosition: "center 10%",
    bio: "Sets the vision. Shapes the rooms. Moves the culture.",
    tier: "Core Frequency",
  },
  {
    name: "ONE LOVELL",
    role: "Selector · Operations · Vibe Curation",
    city: "Bay Area",
    image: "/crew-2.jpg",
    bgPosition: "center top",
    bio: "Mashups, edits, and deep cuts—blending Dancehall, Afro R&B, and global rhythm with precision.",
    tier: "Core Frequency",
  },
  {
    name: "OBE (INTELLIGENTREBELLION)",
    handle: "INTELLIGENTREBELLION",
    role: "Fashion · Space · Vibe Curation",
    city: "Oakland",
    image: "/crew-obe.jpg",
    bgPosition: "center 20%",
    bio: "Building the look, shaping the energy, and connecting the dots behind the scenes.",
    tier: "Core Frequency",
  },
  {
    name: "DAVIX (DOJO IN THE SKY)",
    handle: "DOJO IN THE SKY",
    role: "Live Sound · Production",
    city: "Bay Area",
    image: "/crew-davix.jpg",
    bgPosition: "center 20%",
    bio: "Bringing live energy, instrumentation, and studio depth into the FMLY frequency. Founder of Dojo in the Sky and Secret Sessions.",
    tier: "Sound & Vision",
  },
  {
    name: "JUSTIN (GATEWAY MENDOCINO)",
    handle: "GATEWAY MENDOCINO",
    role: "Space Holder · Experience · Operations",
    city: "Mendocino, CA",
    image: "/crew-justin.jpg",
    bgPosition: "center 15%",
    bio: "Co-creating the environment where The Gathering comes to life.",
    tier: "World Builders",
  },
  {
    name: "NED (GATEWAY MENDOCINO)",
    handle: "GATEWAY MENDOCINO",
    role: "Visionary · Benefactor",
    city: "Mendocino, CA",
    image: "/crew-ned.png",
    bgPosition: "center 15%",
    bio: "Holding the foundation for immersive, nature-rooted experiences. From cannabis to plant medicine culture and beyond.",
    tier: "World Builders",
  },
  {
    name: "AMALYN",
    role: "Vocalist · Live Energy",
    image: "/crew-amalyn.png",
    bgPosition: "center 45%",
    bio: "Soulful presence and melodic energy woven into the dancefloor.",
    tier: "Featured FMLY DJs and Artists",
  },
  {
    name: "WEIRDOWITHSOUL",
    role: "Selector · Culture Carrier",
    image: "/crew-weirdowithsoul.png",
    bgPosition: "center 25%",
    bio: "Afro-rooted selector and Event Curator with a forward-thinking edge. Founder of AfroSauce.",
    tier: "Featured FMLY DJs and Artists",
  },
  {
    name: "RAEYA",
    role: "Selector · Afro-Diaspora Sound",
    image: "/crew-raeya.png",
    bgPosition: "center top",
    bio: "Smooth blends, deep cuts, and intentional movement.",
    tier: "Featured FMLY DJs and Artists",
  },
  {
    name: "DYOPS",
    role: "Selector · Global Grooves",
    image: "/crew-dyops.png",
    bgPosition: "center top",
    bio: "Sexy, soulful, late-night energy that keeps bodies moving. Founder of LUSH.",
    tier: "Featured FMLY DJs and Artists",
  },
  {
    name: "DJ KOBIE",
    role: "Selector · Afrohouse Roots",
    image: "/crew-dj-kobie.png",
    bgPosition: "center 30%",
    bio: "Timeless grooves with deep cultural foundation.",
    tier: "Selectors & Contributors",
  },
  {
    name: "DANNI G",
    role: "Selector · Global Club",
    image: "/crew-danni-g.png",
    bgPosition: "center top",
    bio: "High-energy sets with range, rhythm, and presence.",
    tier: "Selectors & Contributors",
  },
  {
    name: "DJ IJO",
    role: "Selector · Amapiano / 3-Step / Gqom",
    image: "/crew-dj-ijo.png",
    bgPosition: "center top",
    bio: "South African rhythms, deep bounce, and underground heat.",
    tier: "Selectors & Contributors",
  },
  {
    name: "LITTLE DINOSAUR",
    role: "Selector · Techno / Global Grooves · Culture Curator",
    image: "/crew-little-dinosaur.png",
    bgPosition: "center top",
    bio: "Intentional sets that move between soulful and high energy. Founder of HUES the Color of Sound.",
    tier: "Selectors & Contributors",
  },
  {
    name: "CANNABA55",
    role: "Selector · Dancefloor Energy",
    image: "/crew-cannaba55.png",
    bgPosition: "center 20%",
    bio: "Raw bassie selections built for movement and connection.",
    tier: "Selectors & Contributors",
  },
  {
    name: "KMNI",
    role: "Selector · Afro Tech / Global House",
    image: "/crew-kmni.png",
    bgPosition: "center 20%",
    bio: "Driving, percussive energy with global reach.",
    tier: "Selectors & Contributors",
  },
  {
    name: "SAGE",
    role: "Selector · Global Grooves",
    image: "/crew-sage.png",
    bgPosition: "center top",
    bio: "Intentional sets that move between soulful and high energy.",
    tier: "Selectors & Contributors",
  },
  {
    name: "SPEKT1",
    role: "Selector · Global Bass",
    image: "/crew-spekt1.png",
    bgPosition: "center top",
    bio: "Heavy rhythms and cross-genre movement.",
    tier: "Selectors & Contributors",
  },
  {
    name: "DJ ATREAU",
    role: "Selector · Open Format / Afro Dancehall Global",
    image: "/crew-dj-atreau.png",
    bgPosition: "center 10%",
    bio: "Versatile, intuitive, and dialed into the room.",
    tier: "Selectors & Contributors",
  },
];

export const tierOrder: CrewTier[] = [
  "Core Frequency",
  "Sound & Vision",
  "World Builders",
  "Featured FMLY DJs and Artists",
  "Selectors & Contributors",
];
