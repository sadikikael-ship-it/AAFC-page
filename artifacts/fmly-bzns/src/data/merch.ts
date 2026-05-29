export interface MerchItem {
  id: string;
  name: string;
  collection: string;
  /** Display price string (e.g. "$44"). */
  price: string;
  /** Price in cents — used for cart math. */
  priceCents: number;
  image: string;
  productUrl: string;
  /** Shopify numeric variant ID for direct cart/checkout URLs. */
  shopifyVariantId?: string;
  sizes?: string[];
  soldOut?: boolean;
}

const SHOPIFY_DOMAIN = "5cbegm-kb.myshopify.com";

/** Build a Shopify cart URL that pre-loads the variant and passes size as an order attribute. */
export function buildShopifyCartUrl(variantId: string, size?: string): string {
  const base = `https://${SHOPIFY_DOMAIN}/cart/${variantId}:1`;
  if (size) {
    return `${base}?attributes[Size]=${encodeURIComponent(size)}`;
  }
  return base;
}

export const merch: MerchItem[] = [
  {
    id: "peace-logo-max-heavyweight-black",
    name: "FMLY PEACE Logo Max Heavyweight Tee",
    collection: "Color · Black",
    price: "$44",
    priceCents: 4400,
    image: "/fmly-peace-max-heavyweight-black.jpg",
    productUrl: "https://fmly-bzns-2.myshopify.com/",
    shopifyVariantId: "48817604329729",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "peace-logo-max-heavyweight-mustard",
    name: "FMLY PEACE Logo Max Heavyweight Tee",
    collection: "Color · Mustard",
    price: "$44",
    priceCents: 4400,
    image: "/fmly-peace-max-heavyweight-mustard.jpg",
    productUrl: "https://fmly-bzns-2.myshopify.com/",
    shopifyVariantId: "48817620746497",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "peace-logo-womens-crop",
    name: "FMLY PEACE Logo Women's Cropped Tee",
    collection: "Color · Black",
    price: "$40",
    priceCents: 4000,
    image: "/fmly-peace-womens-crop-tee.jpg",
    productUrl: "https://fmly-bzns-2.myshopify.com/",
    shopifyVariantId: "48817621074177",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "peace-logo-tee",
    name: "FMLY PEACE Logo Drop Shoulder Tee",
    collection: "Color · Oatmeal",
    price: "$50",
    priceCents: 5000,
    image: "/fmly-peace-tee.jpg",
    productUrl: "https://fmly-bzns-2.myshopify.com/",
    shopifyVariantId: "48817621401857",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
];

export const featuredMerch = merch[0];
