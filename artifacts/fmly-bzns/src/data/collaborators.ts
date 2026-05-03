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
}

export const collaborators: Collaborator[] = [
  { name: "Lightning in a Bottle", kind: "Festival", url: "https://www.libfestival.org/" },
  { name: "Coachella", kind: "Festival" },
  { name: "Same Same But Different", kind: "Festival", url: "https://www.ssbdfest.com/" },
  { name: "Burning Man", kind: "Festival" },
  { name: "Reggae on the River", kind: "Festival" },
  { name: "Northern Nights", kind: "Festival" },

  { name: "1015 Folsom", kind: "Venue" },
  { name: "Public Works", kind: "Venue" },
  { name: "Vintage Space", kind: "Venue" },
  { name: "Continental Club", kind: "Venue" },
  { name: "New Parish", kind: "Venue" },
  { name: "Royal Sun Palm Springs", kind: "Venue" },

  { name: "BLVK H3R0", kind: "Artist" },
  { name: "AMALYN", kind: "Artist" },
  { name: "Kes Kross", kind: "Artist" },
  { name: "Jade de Lafleur", kind: "Artist" },
  { name: "Seun Kuti", kind: "Artist" },

  { name: "Secret Sessions", kind: "Brand" },
  { name: "Peace Fits", kind: "Brand" },
  { name: "Hot Ice Cream Boutique", kind: "Brand" },

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
