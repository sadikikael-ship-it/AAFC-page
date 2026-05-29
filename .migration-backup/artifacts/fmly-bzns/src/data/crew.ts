export interface CrewMember {
  name: string;
  role: string;
  city?: string;
  image: string;
  bio?: string;
}

export const crew: CrewMember[] = [
  {
    name: "Andreas",
    role: "Founder / Creative Direction",
    city: "Brooklyn",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80",
    bio: "Sets the vision, programs the rooms, and connects the global FMLY BZNS lineup.",
  },
  {
    name: "Nia Rhythm",
    role: "Resident DJ / Host",
    city: "London",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=80",
    bio: "Resident selector across Afro-house, broken beat, and Amapiano.",
  },
  {
    name: "Malik Wave",
    role: "Producer / Sound Curation",
    city: "Lagos",
    image:
      "https://images.unsplash.com/photo-1492288991661-058aa541ff43?auto=format&fit=crop&w=900&q=80",
    bio: "Studio lead — produces the FMLY MXTP series and originals.",
  },
  {
    name: "Sade Sol",
    role: "Visual Worldbuilding / Art Direction",
    city: "Berlin",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    bio: "Designs flyers, projections, and the FMLY BZNS visual identity.",
  },
  {
    name: "Tariq Motion",
    role: "Community + Event Operations",
    city: "New York",
    image:
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=900&q=80",
    bio: "Runs the room — production, hospitality, and community programming.",
  },
  {
    name: "Ama Vessel",
    role: "Partnerships / Programming",
    city: "Paris",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    bio: "Builds festival, brand and venue collaborations across Europe and Africa.",
  },
  {
    name: "Kojo Light",
    role: "Photographer / Documentation",
    city: "Accra",
    image:
      "https://images.unsplash.com/photo-1502767089025-6572583495b9?auto=format&fit=crop&w=900&q=80",
    bio: "Photographs every FMLY BZNS night — the on-record visual diary.",
  },
  {
    name: "Imani Frequency",
    role: "Producer / Live Sets",
    city: "Johannesburg",
    image:
      "https://images.unsplash.com/photo-1496440737103-cd596325d314?auto=format&fit=crop&w=900&q=80",
    bio: "Live MPC and synth sets — the bridge between studio and dancefloor.",
  },
];
