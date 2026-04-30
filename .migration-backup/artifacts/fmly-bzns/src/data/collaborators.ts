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
  { name: "Afro Nation", kind: "Festival", url: "https://www.afronation.com" },
  { name: "Field Day", kind: "Festival", url: "https://fielddayfestivals.com" },
  { name: "Boiler Room", kind: "Brand", url: "https://boilerroom.tv" },
  { name: "Notion Mag", kind: "Brand" },
  { name: "Säule (Berghain)", kind: "Venue" },
  { name: "Palais Electrique", kind: "Venue" },
  { name: "The Foundry Hall", kind: "Venue" },
  { name: "Kampire", kind: "Artist" },
  { name: "DBN Gogo", kind: "Artist" },
  { name: "Uncle Waffles", kind: "Artist" },
  { name: "Major League DJz", kind: "Artist" },
  { name: "Moxie", kind: "Artist" },
  { name: "Skyline Yard", kind: "Venue" },
  { name: "Brooklyn", kind: "City" },
  { name: "Lagos", kind: "City" },
  { name: "Berlin", kind: "City" },
  { name: "London", kind: "City" },
  { name: "Paris", kind: "City" },
  { name: "Accra", kind: "City" },
  { name: "Johannesburg", kind: "City" },
];

export const marqueeItems = collaborators.map((c) => c.name);
