export interface MerchItem {
  id: string;
  name: string;
  collection: string;
  price: string;
  image: string;
  productUrl: string;
  featured?: boolean;
  soldOut?: boolean;
}

export const merch: MerchItem[] = [
  {
    id: "signal-jacket",
    name: "Signal Workwear Jacket",
    collection: "Drop 02 · Outerwear",
    price: "$220",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=80",
    productUrl: "https://shop.fmlybzns.com/jacket",
    featured: true,
  },
  {
    id: "ritual-tee",
    name: "Ritual Movement Tee",
    collection: "Core · Cream",
    price: "$55",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
    productUrl: "https://shop.fmlybzns.com/ritual-tee",
  },
  {
    id: "night-jersey",
    name: "Night Circuit Jersey",
    collection: "Drop 01 · Sport",
    price: "$95",
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80",
    productUrl: "https://shop.fmlybzns.com/jersey",
  },
  {
    id: "poster-set",
    name: "FMLY MXTP Poster Set",
    collection: "Editorial · Print",
    price: "$70",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80",
    productUrl: "https://shop.fmlybzns.com/posters",
  },
  {
    id: "sunset-tote",
    name: "Sunset Movement Tote",
    collection: "Studio Release",
    price: "$45",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1200&q=80",
    productUrl: "https://shop.fmlybzns.com/tote",
  },
  {
    id: "frequency-cap",
    name: "Frequency 5-Panel Cap",
    collection: "Core · Headwear",
    price: "$48",
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=1200&q=80",
    productUrl: "https://shop.fmlybzns.com/cap",
  },
  {
    id: "studio-hoodie",
    name: "Studio Heavyweight Hoodie",
    collection: "Drop 02 · Cream",
    price: "$165",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=80",
    productUrl: "https://shop.fmlybzns.com/hoodie",
    soldOut: true,
  },
  {
    id: "vinyl-pack",
    name: "FMLY Vinyl Bundle 01",
    collection: "Music · Limited 200",
    price: "$60",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
    productUrl: "https://shop.fmlybzns.com/vinyl",
  },
];

export const featuredMerch = merch.find((m) => m.featured) ?? merch[0];
