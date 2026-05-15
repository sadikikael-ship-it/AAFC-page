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
    instagramUrl: "https://www.instagram.com/andreasone/",
  },
  {
    name: "ONE LOVELL",
    role: "Selector · Operations · Vibe Curation",
    city: "Bay Area",
    image: "/crew-2.jpg",
    bgPosition: "center top",
    bio: "Mashups, edits, and deep cuts—blending Dancehall, Afro R&B, and global rhythm with precision.",
    tier: "Core Frequency",
    instagramUrl: "https://www.instagram.com/onelovell/",
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
    instagramUrl: "https://www.instagram.com/intelligentrebellion/",
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
    instagramUrl: "https://www.instagram.com/davixdojointhesky/",
  },
  {
    name: "JUSTIN (GATEWAY MENDOCINO)",
    handle: "GATEWAY MENDOCINO",
    role: "Space Holder · Experience · Operations",
    city: "Mendocino, CA",
    image: "/crew-justin-2026.jpg",
    bgPosition: "center 15%",
    bio: "Co-creating the environment where The Gathering comes to life.",
    tier: "World Builders",
    instagramUrl: "https://www.instagram.com/just_in_mendo/",
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
    instagramUrl: "https://www.instagram.com/gatewaymendocino/",
  },
  {
    name: "AMALYN",
    role: "Vocalist · Live Energy",
    image: "/crew-amalyn.png",
    bgPosition: "center 45%",
    bio: "Soulful presence and melodic energy woven into the dancefloor.",
    tier: "Featured FMLY DJs and Artists",
    instagramUrl: "https://www.instagram.com/amalynoficial/",
  },
  {
    name: "WEIRDOWITHSOUL",
    role: "Selector · Culture Carrier",
    image: "/crew-weirdowithsoul.png",
    bgPosition: "center 25%",
    bio: "Afro-rooted selector and Event Curator with a forward-thinking edge. Founder of AfroSauce.",
    tier: "Featured FMLY DJs and Artists",
    instagramUrl: "https://www.instagram.com/weirdowithsoul/",
  },
  {
    name: "RAEYA",
    role: "Selector · Afro-Diaspora Sound",
    image: "/crew-raeya.png",
    bgPosition: "center top",
    bio: "Smooth blends, deep cuts, and intentional movement.",
    tier: "Featured FMLY DJs and Artists",
    instagramUrl: "https://www.instagram.com/purestardust/",
  },
  {
    name: "DYOPS",
    role: "Selector · Global Grooves",
    image: "/crew-dyops.png",
    bgPosition: "center top",
    bio: "Sexy, soulful, late-night energy that keeps bodies moving. Founder of LUSH.",
    tier: "Featured FMLY DJs and Artists",
    instagramUrl: "https://www.instagram.com/dj.dyops/",
  },
  {
    name: "LIONIZE",
    role: "Selector · Open Format",
    image: "/crew-blvkh3ro.png",
    bgPosition: "center 20%",
    bio: "Bay Area legend and founding member of Blessed Coast Sound.",
    tier: "Featured FMLY DJs and Artists",
    instagramUrl: "https://www.instagram.com/lionize___/",
  },
  {
    name: "BLVK H3RO",
    role: "Artist",
    image: "/crew-lionize.jpg",
    bgPosition: "center 20%",
    bio: "Grammy-nominated reggae dancehall singer and global warrior for peace.",
    tier: "Featured FMLY DJs and Artists",
    instagramUrl: "https://www.instagram.com/blvkh3ro/",
  },
  {
    name: "DJ KOBIE",
    role: "Selector · Afrohouse Roots",
    image: "/crew-dj-kobie.png",
    bgPosition: "center 30%",
    bio: "Timeless grooves with deep cultural foundation. Repping Trinidad to Norcal and the Globe.",
    tier: "Selectors & Contributors",
    instagramUrl: "https://www.instagram.com/kobie_quashie/",
    soundcloudUrl: "https://soundcloud.com/kobiequashie",
  },
  {
    name: "DANNI G",
    role: "Selector · Global Club",
    image: "/crew-danni-g.png",
    bgPosition: "center top",
    bio: "High-energy sets with range, rhythm, and presence.",
    tier: "Selectors & Contributors",
    instagramUrl: "https://www.instagram.com/dannig/",
  },
  {
    name: "DJ IJO",
    role: "Selector · Amapiano / 3-Step / Gqom",
    image: "/crew-dj-ijo.png",
    bgPosition: "center top",
    bio: "South African rhythms, deep bounce, and underground heat.",
    tier: "Selectors & Contributors",
    instagramUrl: "https://www.instagram.com/djijo17/",
  },
  {
    name: "LITTLE DINOSAUR",
    role: "Selector · Techno / Global Grooves · Culture Curator",
    image: "/crew-little-dinosaur.png",
    bgPosition: "center top",
    bio: "Intentional sets that move between soulful and high energy. Founder of HUES the Color of Sound.",
    tier: "Selectors & Contributors",
    instagramUrl: "https://www.instagram.com/littledinosaur/",
  },
  {
    name: "CANNABA55",
    role: "Selector · Dancefloor Energy · Global Bass",
    image: "/crew-cannaba55.png",
    bgPosition: "center 20%",
    bio: "Raw selections built for movement and connection. Global Bangers.",
    tier: "Selectors & Contributors",
    instagramUrl: "https://www.instagram.com/cannaba55/",
  },
  {
    name: "KMNI",
    role: "Selector · Afro Tech / Global House",
    image: "/crew-kmni.png",
    bgPosition: "center 20%",
    bio: "Driving, percussive energy with global reach. Deep roots in a current global format hailing from Cameroon.",
    tier: "Selectors & Contributors",
    instagramUrl: "https://www.instagram.com/kmnimusic/",
  },
  {
    name: "SAGE",
    role: "Selector · Global Grooves",
    image: "/crew-sage.png",
    bgPosition: "center top",
    bio: "Intentional sets that move between soulful and high energy.",
    tier: "Selectors & Contributors",
    instagramUrl: "https://www.instagram.com/thenameis_sage/",
  },
  {
    name: "SPEKT1",
    role: "Selector · Global Bass · Polyrhythmic Vibe Setter",
    image: "/crew-spekt1.png",
    bgPosition: "center top",
    bio: "Heavy rhythms and cross-genre movement. Founder of We Got This.",
    tier: "Selectors & Contributors",
    instagramUrl: "https://www.instagram.com/spekt1/",
  },
  {
    name: "DJ ATREAU",
    role: "Selector · Open Format / Afro Dancehall Global",
    image: "/crew-dj-atreau.png",
    bgPosition: "center 10%",
    bio: "Versatile, intuitive, and dialed into the room.",
    tier: "Selectors & Contributors",
    instagramUrl: "https://www.instagram.com/djatreau/",
  },
];

export const tierOrder: CrewTier[] = [
  "Core Frequency",
  "Sound & Vision",
  "World Builders",
  "Featured FMLY DJs and Artists",
  "Selectors & Contributors",
];
