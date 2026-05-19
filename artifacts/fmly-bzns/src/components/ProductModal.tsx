import { useEffect, useRef, useState } from "react";
import type { MerchItem } from "@/data/merch";
import { useCart } from "@/lib/cart";

interface Props {
  item: MerchItem;
  onClose: () => void;
}

export function ProductModal({ item, onClose }: Props) {
  const [size, setSize] = useState<string>("");
  const [added, setAdded] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const { add } = useCart();

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

  const needsSize = !!item.sizes && item.sizes.length > 0;
  const canAdd = !item.soldOut && (!needsSize || !!size);

  const handleAdd = () => {
    if (!canAdd) return;
    add({
      id: size ? `merch:${item.id}:${size}` : `merch:${item.id}`,
      kind: "merch",
      name: item.name,
      subtitle: size ? `${item.collection} · Size ${size}` : item.collection,
      priceCents: item.priceCents,
      image: item.image,
      metadata: size ? { size, collection: item.collection } : { collection: item.collection },
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

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
              </div>
            )}

            {item.soldOut ? (
              <button type="button" className="ctaBtn" disabled>
                Sold Out
              </button>
            ) : (
              <button
                type="button"
                className={`ctaBtn${!canAdd ? " ctaBtn--disabled" : ""}`}
                onClick={handleAdd}
                disabled={!canAdd}
              >
                {added
                  ? "Added to Cart ✓"
                  : needsSize && !size
                    ? "Select a size"
                    : "Add to Cart"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
