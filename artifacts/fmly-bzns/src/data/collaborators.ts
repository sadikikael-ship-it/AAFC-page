export type CollaboratorKind =
  | "Artist"
  | "Festival"
  | "Venue"
  | "Brand"
  | "City";

export interface Collaborator {
  name: string;
  kind: CollaboratorKind;
  url?: string;
  instagramUrl?: string;
  spotifyUrl?: string;
  soundcloudUrl?: string;
  role?: string;
  bio?: string;
}

export const collaborators: Collaborator[] = [
  { name: "Lightning in a Bottle", kind: "Festival", url: "https://www.libfestival.org/" },
  { name: "Coachella", kind: "Festival" },
  { name: "Same Same But Different", kind: "Festival", url: "https://www.ssbdfest.com/" },
  { name: "Burning Man", kind: "Festival", instagramUrl: "https://www.instagram.com/burningman/" },
  { name: "Reggae on the River", kind: "Festival", instagramUrl: "https://www.instagram.com/reggaeontheriver/" },
  { name: "Northern Nights", kind: "Festival", instagramUrl: "https://www.instagram.com/northernnightsmusicfestival/" },

  { name: "1015 Folsom", kind: "Venue" },
  { name: "Public Works", kind: "Venue" },
  { name: "Vintage Space", kind: "Venue" },
  { name: "Continental Club", kind: "Venue" },
  { name: "New Parish", kind: "Venue" },
  { name: "Royal Sun Palm Springs", kind: "Venue" },

  {
    name: "BLVK H3RO",
    kind: "Artist",
    url: "/crew#blvk-h3ro",
    instagramUrl: "https://www.instagram.com/blvkh3ro/",
    spotifyUrl: "https://open.spotify.com/artist/29v52R5tPpJ0Hrh1VnmZoZ",
    role: "Artist",
    bio: "Grammy-nominated reggae dancehall singer and global warrior for peace.",
  },
  {
    name: "AMALYN",
    kind: "Artist",
    url: "/crew#amalyn",
    instagramUrl: "https://www.instagram.com/amalynoficial/",
  },
  {
    name: "Kes Kross",
    kind: "Artist",
    instagramUrl: "https://www.instagram.com/keskross/",
  },
  {
    name: "Jade de Lafleur",
    kind: "Artist",
    url: "https://www.jadedelafleur.com/",
    instagramUrl: "https://www.instagram.com/jadedelafleur/",
  },
  {
    name: "Seun Kuti",
    kind: "Artist",
    url: "https://www.seunkutimusic.com/",
    instagramUrl: "https://www.instagram.com/bigbirdkuti/",
  },
  {
    name: "Lionize",
    kind: "Artist",
    url: "/crew#lionize",
    instagramUrl: "https://www.instagram.com/lionize___/",
    soundcloudUrl: "https://soundcloud.com/djlionize",
    role: "Selector · Open Format",
    bio: "Bay Area legend and founding member of Blessed Coast Sound.",
  },

  { name: "Secret Sessions", kind: "Brand" },
  { name: "Frequency Exchange", kind: "Brand", url: "https://frequencyexchange.io/" },
  { name: "Peace Fits", kind: "Brand", url: "https://www.peacefits.com/", instagramUrl: "https://www.instagram.com/peacefits/" },
  { name: "Hot Ice Cream Boutique", kind: "Brand", instagramUrl: "https://www.instagram.com/hoticecream_boutique/" },

  { name: "Oakland", kind: "City" },
  { name: "Bali", kind: "City" },
  { name: "Mexico City", kind: "City" },
  { name: "Los Angeles", kind: "City" },
  { name: "Miami", kind: "City" },
  { name: "Puerto Rico", kind: "City" },
  { name: "Colombia", kind: "City" },
  { name: "Cape Town", kind: "City" },
  { name: "Accra", kind: "City" },
];

export const marqueeItems = collaborators.map((c) => c.name);
