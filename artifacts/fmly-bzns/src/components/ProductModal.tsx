import { useEffect, useRef, useState } from "react";
import type { MerchItem } from "@/data/merch";
import { useCart } from "@/lib/cart";

interface Props {
  item: MerchItem;
  onClose: () => void;
}

export function ProductModal({ item, onClose }: Props) {
  const { add } = useCart();
  const [size, setSize] = useState<string>("");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handleAdd = () => {
    if (item.sizes && item.sizes.length > 0 && !size) return;
    add(
      {
        id: `merch:${item.id}:${size || "one-size"}`,
        kind: "merch",
        name: item.name,
        subtitle: size ? `${item.collection} · ${size}` : item.collection,
        priceCents: item.priceCents,
        image: item.image,
        metadata: { merchId: item.id, size: size || "one-size" },
      },
      qty,
    );
    setAdded(true);
    window.setTimeout(() => { setAdded(false); onClose(); }, 1400);
  };

  const needsSize = item.sizes && item.sizes.length > 0;

  return (
    <div
      className="productModalOverlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={item.name}
    >
      <div className="productModal">
        <button
          className="productModalClose"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        <div className="productModalLayout">
          <div className="productModalImage">
            <img src={item.image} alt={item.name} className="productModalImg" />
          </div>

          <div className="productModalBody">
            <p className="eyebrow">{item.collection}</p>
            <h2 className="productModalName">{item.name}</h2>
            <p className="productModalPrice">{item.price}</p>

            {needsSize && (
              <div className="productModalSection">
                <p className="productModalLabel">Size</p>
                <div className="productSizeGrid">
                  {item.sizes!.map((s) => (
                    <button
                      key={s}
                      type="button"
                      className={`sizeBtn${size === s ? " sizeBtn--active" : ""}`}
                      onClick={() => setSize(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                {needsSize && !size && (
                  <p className="productModalHint">Please select a size</p>
                )}
              </div>
            )}

            <div className="productModalSection">
              <p className="productModalLabel">Quantity</p>
              <div className="qtyControl">
                <button
                  type="button"
                  className="qtyBtn"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="qtyValue">{qty}</span>
                <button
                  type="button"
                  className="qtyBtn"
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {item.soldOut ? (
              <button type="button" className="ctaBtn" disabled>
                Sold Out
              </button>
            ) : (
              <button
                type="button"
                className={added ? "ctaBtn added" : "ctaBtn"}
                onClick={handleAdd}
                disabled={needsSize && !size}
              >
                {added ? "Added to Cart ✓" : "Add to Cart"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
