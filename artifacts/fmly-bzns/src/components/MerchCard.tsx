import type { MerchItem } from "@/data/merch";

export function MerchCard({ item }: { item: MerchItem }) {
  return (
    <article className="merchCard">
      <a
        href={item.productUrl}
        target="_blank"
        rel="noreferrer"
        className="merchCardImageLink"
        aria-label={`Shop ${item.name}`}
      >
        <div
          className="merchCardImage"
          style={{ backgroundImage: `url(${item.image})` }}
        />
        {item.soldOut ? <span className="merchSold">Sold out</span> : null}
      </a>
      <div className="merchCardBody">
        <p className="eyebrow">{item.collection}</p>
        <h3 className="merchCardName">{item.name}</h3>
        <p className="merchCardPrice">{item.price}</p>
        <a
          href={item.productUrl}
          target="_blank"
          rel="noreferrer"
          className="smallBtn"
        >
          {item.soldOut ? "View Product" : "Shop Now"}
        </a>
      </div>
    </article>
  );
}
