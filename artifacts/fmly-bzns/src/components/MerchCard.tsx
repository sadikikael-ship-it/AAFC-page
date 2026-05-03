import { useState } from "react";
import type { MerchItem } from "@/data/merch";
import { ProductModal } from "./ProductModal";

export function MerchCard({ item }: { item: MerchItem }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="merchCard" onClick={() => setOpen(true)} style={{ cursor: "pointer" }}>
        <div className="merchCardImageLink" aria-label={`View ${item.name}`}>
          <div className="merchCardImage">
            <img src={item.image} alt={item.name} className="merchCardImg" />
          </div>
          {item.soldOut ? <span className="merchSold">Sold out</span> : null}
        </div>
        <div className="merchCardBody">
          <p className="eyebrow">{item.collection}</p>
          <h3 className="merchCardName">{item.name}</h3>
          <p className="merchCardPrice">{item.price}</p>
          <span className="smallBtn">
            {item.soldOut ? "View Product" : "Select Size"}
          </span>
        </div>
      </article>

      {open && <ProductModal item={item} onClose={() => setOpen(false)} />}
    </>
  );
}
