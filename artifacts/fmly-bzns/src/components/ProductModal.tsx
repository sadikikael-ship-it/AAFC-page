import { useEffect, useRef, useState } from "react";
import type { MerchItem } from "@/data/merch";

interface Props {
  item: MerchItem;
  onClose: () => void;
}

export function ProductModal({ item, onClose }: Props) {
  const [size, setSize] = useState<string>("");
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

  const needsSize = item.sizes && item.sizes.length > 0;
  const canShop = !needsSize || !!size;

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

            {item.soldOut ? (
              <button type="button" className="ctaBtn" disabled>
                Sold Out
              </button>
            ) : (
              <a
                href={item.productUrl}
                target="_blank"
                rel="noreferrer"
                className={`ctaBtn${!canShop ? " ctaBtn--disabled" : ""}`}
                onClick={(e) => { if (!canShop) e.preventDefault(); }}
                aria-disabled={!canShop}
              >
                Shop on Shopify →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
