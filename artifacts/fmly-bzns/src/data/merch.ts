export interface MerchItem {
  id: string;
  name: string;
  collection: string;
  /** Display price string (e.g. "$220"). */
  price: string;
  /** Price in cents — used for cart math. */
  priceCents: number;
  image: string;
  productUrl: string;
  soldOut?: boolean;
}

export const merch: MerchItem[] = [
  {
    id: "peace-logo-max-heavyweight-black",
    name: "FMLY PEACE Logo Max Heavyweight Tee",
    collection: "Core · Black",
    price: "$44",
    priceCents: 4400,
    image: "/fmly-peace-max-heavyweight-black.png",
    productUrl: "https://shop.fmlybzns.com/peace-logo-max-heavyweight-black",
  },
  {
    id: "peace-logo-max-heavyweight-mustard",
    name: "FMLY PEACE Logo Max Heavyweight Tee",
    collection: "Core · Mustard",
    price: "$44",
    priceCents: 4400,
    image: "/fmly-peace-max-heavyweight-mustard.png",
    productUrl: "https://shop.fmlybzns.com/peace-logo-max-heavyweight",
  },
  {
    id: "peace-logo-womens-crop",
    name: "FMLY PEACE Logo Women's Cropped Tee",
    collection: "Core · Black",
    price: "$40",
    priceCents: 4000,
    image: "/fmly-peace-womens-crop-tee.png",
    productUrl: "https://shop.fmlybzns.com/peace-logo-womens-crop",
  },
  {
    id: "peace-logo-tee",
    name: "FMLY PEACE Logo Drop Shoulder Tee",
    collection: "Core · Oatmeal",
    price: "$50",
    priceCents: 5000,
    image: "/fmly-peace-tee.png",
    productUrl: "https://shop.fmlybzns.com/peace-logo-tee",
  },
];

export const featuredMerch = merch[0];
