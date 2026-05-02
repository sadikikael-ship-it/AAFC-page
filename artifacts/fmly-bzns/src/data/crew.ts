export type CrewTier =
  | "Core Frequency"
  | "Sound & Vision"
  | "World Builders"
  | "Featured FMLY DJs"
  | "Selectors & Contributors";

export interface CrewMember {
  name: string;
  handle?: string;
  role: string;
  city?: string;
  image: string;
  bio: string;
  tier: CrewTier;
  soundcloudUrl?: string;
  instagramUrl?: string;
}

export const crew: CrewMember[] = [
  {
    name: "ANDREASONE",
    role: "Founder · Creative Direction · Sound",
    city: "Oakland / Global",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80",
    bio: "Sets the vision. Shapes the rooms. Moves the culture.",
    tier: "Core Frequency",
  },
  {
    name: "ONE LOVELL",
    role: "Selector · Operations",
    city: "Bay Area",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=80",
    bio: "Mashups, edits, and deep cuts—blending Dancehall, Afro R&B, and global rhythm with precision.",
    tier: "Core Frequency",
  },
  {
    name: "OBE (INTELLIGENTREBELLION)",
    handle: "INTELLIGENTREBELLION",
    role: "Fashion · Space · Movement",
    city: "Oakland",
    image:
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=900&q=80",
    bio: "Building the look, shaping the energy, and connecting the dots behind the scenes.",
    tier: "Core Frequency",
  },
  {
    name: "DAVIX (DOJO IN THE SKY)",
    handle: "DOJO IN THE SKY",
    role: "Live Sound · Production",
    city: "Bay Area",
    image:
      "https://images.unsplash.com/photo-1492288991661-058aa541ff43?auto=format&fit=crop&w=900&q=80",
    bio: "Bringing live energy, instrumentation, and studio depth into the FMLY frequency. Founder of Dojo in the Sky and Secret Sessions.",
    tier: "Sound & Vision",
  },
  {
    name: "JUSTIN (GATEWAY MENDOCINO)",
    handle: "GATEWAY MENDOCINO",
    role: "Space Holder · Experience · Operations",
    city: "Mendocino, CA",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    bio: "Co-creating the environment where The Gathering comes to life.",
    tier: "World Builders",
  },
  {
    name: "NED (GATEWAY MENDOCINO)",
    handle: "GATEWAY MENDOCINO",
    role: "Visionary · Benefactor",
    city: "Mendocino, CA",
    image:
      "https://images.unsplash.com/photo-1502767089025-6572583495b9?auto=format&fit=crop&w=900&q=80",
    bio: "Holding the foundation for immersive, nature-rooted experiences. From cannabis to plant medicine culture and beyond.",
    tier: "World Builders",
  },
  {
    name: "AMALYN",
    role: "Vocalist · Live Energy",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    bio: "Soulful presence and melodic energy woven into the dancefloor.",
    tier: "Featured FMLY DJs",
  },
  {
    name: "DYOPS",
    role: "Selector · Global Grooves",
    image:
      "https://images.unsplash.com/photo-1496440737103-cd596325d314?auto=format&fit=crop&w=900&q=80",
    bio: "Sexy, soulful, late-night energy that keeps bodies moving. Founder of LUSH.",
    tier: "Featured FMLY DJs",
  },
  {
    name: "RAEYA",
    role: "Selector · Afro-Diaspora Sound",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    bio: "Smooth blends, deep cuts, and intentional movement.",
    tier: "Featured FMLY DJs",
  },
  {
    name: "WEIRDOWITHSOUL",
    role: "Selector · Culture Carrier",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80",
    bio: "Afro-rooted selector and Event Curator with a forward-thinking edge. Founder of AfroSauce.",
    tier: "Featured FMLY DJs",
  },
  {
    name: "DANNI G",
    role: "Selector · Global Club",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=80",
    bio: "High-energy sets with range, rhythm, and presence.",
    tier: "Selectors & Contributors",
  },
  {
    name: "DJ KOBIE",
    role: "Selector · Afrohouse Roots",
    image:
      "https://images.unsplash.com/photo-1502767089025-6572583495b9?auto=format&fit=crop&w=900&q=80",
    bio: "Timeless grooves with deep cultural foundation.",
    tier: "Selectors & Contributors",
  },
  {
    name: "DJ IJO",
    role: "Selector · Amapiano / 3-Step / Gqom",
    image:
      "https://images.unsplash.com/photo-1492288991661-058aa541ff43?auto=format&fit=crop&w=900&q=80",
    bio: "South African rhythms, deep bounce, and underground heat.",
    tier: "Selectors & Contributors",
  },
  {
    name: "LITTLE DINOSAUR",
    role: "Selector · Techno / Global Grooves · Culture Curator",
    image:
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=900&q=80",
    bio: "Intentional sets that move between soulful and high energy. Founder of HUES the Color of Sound.",
    tier: "Selectors & Contributors",
  },
  {
    name: "KMNI",
    role: "Selector · Afro Tech / Global House",
    image:
      "https://images.unsplash.com/photo-1496440737103-cd596325d314?auto=format&fit=crop&w=900&q=80",
    bio: "Driving, percussive energy with global reach.",
    tier: "Selectors & Contributors",
  },
  {
    name: "SPEKT1",
    role: "Selector · Global Bass",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    bio: "Heavy rhythms and cross-genre movement.",
    tier: "Selectors & Contributors",
  },
  {
    name: "CANNABA55",
    role: "Selector · Dancefloor Energy",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    bio: "Raw bassie selections built for movement and connection.",
    tier: "Selectors & Contributors",
  },
  {
    name: "DJ ATREAU",
    role: "Selector · Open Format / Afro Dancehall Global",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80",
    bio: "Versatile, intuitive, and dialed into the room.",
    tier: "Selectors & Contributors",
  },
  {
    name: "SAGE",
    role: "Selector · Global Grooves",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=80",
    bio: "Intentional sets that move between soulful and high energy.",
    tier: "Selectors & Contributors",
  },
];

export const tierOrder: CrewTier[] = [
  "Core Frequency",
  "Sound & Vision",
  "World Builders",
  "Featured FMLY DJs",
  "Selectors & Contributors",
];
