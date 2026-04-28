import { Link } from "wouter";
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
        {item.soldOut ? (
          <a
            href={item.productUrl}
            target="_blank"
            rel="noreferrer"
            className="smallBtn ghost"
          >
            View Product
          </a>
        ) : (
          <Link href="/cart" className="smallBtn">
            Add to Cart
          </Link>
        )}
      </div>
    </article>
  );
}
