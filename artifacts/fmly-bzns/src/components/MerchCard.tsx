import type { MerchItem } from "@/data/merch";

const SHOPIFY_URL = "https://fmly-bzns-2.myshopify.com/";

export function MerchCard({ item }: { item: MerchItem }) {
  return (
    <a
      href={SHOPIFY_URL}
      target="_blank"
      rel="noreferrer"
      className="merchCard"
      aria-label={`Shop ${item.name} on Shopify`}
    >
      <div className="merchCardImageLink">
        <div className="merchCardImage">
          <img src={item.image} alt={item.name} className="merchCardImg" />
        </div>
        {item.soldOut ? <span className="merchSold">Sold out</span> : null}
      </div>
      <div className="merchCardBody">
        <p className="eyebrow">{item.collection}</p>
        <h3 className="merchCardName">{item.name}</h3>
        <p className="merchCardPrice">{item.price}</p>
        <span className="smallBtn">Visit Shop</span>
      </div>
    </a>
  );
}
