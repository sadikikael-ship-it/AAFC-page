import { useState } from "react";
import type { MerchItem } from "@/data/merch";
import { useCart } from "@/lib/cart";

export function MerchCard({ item }: { item: MerchItem }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    add({
      id: `merch:${item.id}`,
      kind: "merch",
      name: item.name,
      subtitle: item.collection,
      priceCents: item.priceCents,
      image: item.image,
      metadata: { merchId: item.id },
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  return (
    <article className="merchCard">
      <a
        href={item.productUrl}
        target="_blank"
        rel="noreferrer"
        className="merchCardImageLink"
        aria-label={`View ${item.name}`}
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
          <button
            type="button"
            className={added ? "smallBtn added" : "smallBtn"}
            onClick={handleAdd}
          >
            {added ? "Added ✓" : "Add to Cart"}
          </button>
        )}
      </div>
    </article>
  );
}
