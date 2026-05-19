import { useEffect } from "react";

declare global {
  interface Window {
    ShopifyBuy: any;
    __shopifyUI: any;
    openShopifyCart?: () => void;
  }
}

const DOMAIN = "5cbegm-kb.myshopify.com";
const TOKEN = "76283f7ea2ae821d4c6f3120742407e0";

const PRODUCT_IDS = [
  { id: "9160338964737", key: "p1" },
  { id: "9160340406529", key: "p2" },
  { id: "9160340504833", key: "p3" },
  { id: "9160340701441", key: "p4" },
];

const BTN_STYLE = {
  "font-family": "inherit",
  "background-color": "#ff651f",
  color: "#fff",
  "border-radius": "0px",
  ":hover": { "background-color": "#d94f0e" },
  ":focus": { "background-color": "#d94f0e" },
};

/**
 * Injects a "← Keep Shopping" button that appears beside the Shopify cart drawer
 * when it is open.
 *
 * Desktop (≥ 600 px): floats to the LEFT of the ~350 px cart — never overlapping it.
 * Mobile  (< 600 px): not shown — the cart is full-width/full-height so there is no
 *   safe position that doesn't block Shopify's own controls. The SDK's own ✕ already
 *   closes the cart on small screens.
 *
 * z-index is 2147483646 — one below the Shopify cart frame — so the cart itself is
 * always clickable when both are visible.
 */
function setupKeepShoppingButton() {
  const OVERLAY_ID = "fmly-keep-shopping-overlay";
  if (document.getElementById(OVERLAY_ID)) return;

  const overlay = document.createElement("div");
  overlay.id = OVERLAY_ID;
  overlay.setAttribute("aria-label", "Keep Shopping");
  // Base styles — position is updated dynamically.
  Object.assign(overlay.style, {
    display: "none",
    position: "fixed",
    zIndex: "2147483646", // one below Shopify so the cart is always on top
    background: "#fff6e1",
    border: "2px solid #1d1510",
    boxShadow: "4px 4px 0 #1d1510",
    padding: "0",
    pointerEvents: "auto",
    touchAction: "auto",
  });

  const btn = document.createElement("button");
  btn.textContent = "← Keep Shopping";
  btn.type = "button";
  Object.assign(btn.style, {
    display: "block",
    padding: "11px 18px",
    background: "transparent",
    color: "#1d1510",
    border: "none",
    fontFamily: "inherit",
    fontSize: "0.8125rem",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    cursor: "pointer",
    whiteSpace: "nowrap",
    touchAction: "auto",
  });
  btn.addEventListener("mouseenter", () => {
    btn.style.background = "#1d1510";
    btn.style.color = "#fff6e1";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.background = "transparent";
    btn.style.color = "#1d1510";
  });
  btn.addEventListener("click", () => {
    const cart = window.__shopifyUI?.components?.cart?.[0];
    if (cart && typeof cart.close === "function") cart.close();
  });
  overlay.appendChild(btn);
  document.body.appendChild(overlay);

  /** Position the overlay to the LEFT of the cart frame (desktop only). */
  function positionOverlay() {
    const isMobile = window.innerWidth < 600;
    if (isMobile) {
      // Hide on mobile — no safe spot outside the full-screen cart.
      overlay.style.display = "none";
      return;
    }
    const frame = document.querySelector<HTMLElement>(".shopify-buy-frame--cart");
    const cartWidth = frame ? frame.offsetWidth : 350;
    const gap = 12;
    overlay.style.right = `${cartWidth + gap}px`;
    overlay.style.bottom = "80px";
    overlay.style.left = "auto";
    overlay.style.top = "auto";
    overlay.style.display = "block";
  }

  function patchCart() {
    const cart = window.__shopifyUI?.components?.cart?.[0];
    if (!cart || cart.__fmlyPatched) return;

    const origOpen  = cart.open?.bind(cart);
    const origClose = cart.close?.bind(cart);

    if (origOpen) {
      cart.open = function (...args: any[]) {
        const result = origOpen(...args);
        positionOverlay();
        return result;
      };
    }
    if (origClose) {
      cart.close = function (...args: any[]) {
        const result = origClose(...args);
        overlay.style.display = "none";
        return result;
      };
    }
    cart.__fmlyPatched = true;
  }

  patchCart();
  [200, 500, 1000, 2000].forEach((ms) => setTimeout(patchCart, ms));
  window.addEventListener("resize", () => {
    if (overlay.style.display !== "none") positionOverlay();
  });
}

async function createComponents(nodePrefix: string) {
  if (!window.__shopifyUI) {
    const client = window.ShopifyBuy.buildClient({
      domain: DOMAIN,
      storefrontAccessToken: TOKEN,
    });
    window.__shopifyUI = window.ShopifyBuy.UI.init(client);
  }

  const products = PRODUCT_IDS.map(({ id, key }) => ({
    id,
    node: `${nodePrefix}-${key}`,
  }));

  const promises = products.map(({ id, node }) => {
    const el = document.getElementById(node);
    if (!el) return Promise.resolve(null);
    // Always clear the node so config changes take effect on remount.
    el.innerHTML = "";
    return window.__shopifyUI.createComponent("product", {
      id,
      node: el,
      moneyFormat: "%24%7B%7Bamount%7D%7D",
      options: {
        product: {
          styles: {
            product: { "text-align": "left" },
            title: {
              "font-family": "inherit",
              color: "#1d1510",
              "font-size": "1rem",
              "font-weight": "700",
              "margin-bottom": "6px",
              "line-height": "1.35",
              "min-height": "2.7rem",
              "overflow": "hidden",
            },
            price: {
              "font-family": "inherit",
              color: "#1d1510",
              "font-size": "1rem",
              "margin-bottom": "12px",
            },
            button: BTN_STYLE,
            compareAt: { color: "#1d1510" },
            imgWrapper: { height: "320px", overflow: "hidden" },
            img: {
              width: "100%",
              height: "320px",
              "object-fit": "cover",
              "object-position": "center 30%",
            },
          },
          layout: "vertical",
          contents: { img: true, title: true, price: true, button: true },
          width: "100%",
          buttonDestination: "modal",
          text: { button: "View Details" },
          googleFonts: [],
        },
        modalProduct: {
          contents: {
            img: false,
            imgWithCarousel: true,
            title: true,
            price: true,
            options: true,
            description: true,
            button: false,
            buttonWithQuantity: true,
          },
          styles: {
            product: {
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0px",
                "margin-bottom": "0px",
              },
            },
            title: {
              "font-family": "inherit",
              color: "#1d1510",
              "font-size": "1.25rem",
              "font-weight": "700",
            },
            price: { "font-family": "inherit", color: "#1d1510" },
            button: BTN_STYLE,
          },
          buttonDestination: "cart",
          text: { button: "Add to Cart" },
          googleFonts: [],
        },
        option: {
          styles: {
            label: {
              "font-family": "inherit",
              color: "#1d1510",
              "font-weight": "600",
            },
            select: { "font-family": "inherit" },
          },
        },
        cart: {
          popup: false, // redirect checkout in the same tab instead of opening a new window
          styles: {
            button: BTN_STYLE,
            title: { "font-family": "inherit", color: "#1d1510" },
          },
          text: { total: "Subtotal", button: "Checkout" },
          googleFonts: [],
        },
        toggle: {
          styles: {
            toggle: { "background-color": "#ff651f" },
            count: { color: "#fff" },
            iconPath: { fill: "#fff" },
          },
        },
      },
    });
  });

  await Promise.all(promises);

  window.openShopifyCart = () => {
    const cart = window.__shopifyUI?.components?.cart?.[0];
    if (cart && typeof cart.open === "function") cart.open();
  };

  setupKeepShoppingButton();
}

interface ShopifyBuyButtonsProps {
  /** Unique prefix for DOM node IDs — use different values per page to avoid collisions. */
  nodePrefix?: string;
}

export function ShopifyBuyButtons({ nodePrefix = "shopify-product" }: ShopifyBuyButtonsProps) {
  useEffect(() => {
    const shouldOpenCart = new URLSearchParams(window.location.search).has("opencart");

    const run = () =>
      createComponents(nodePrefix)
        .then(() => {
          if (!shouldOpenCart) return;
          // Strip the flag from the URL without a page reload.
          const url = new URL(window.location.href);
          url.searchParams.delete("opencart");
          window.history.replaceState({}, "", url.toString());
          // Give the cart component a moment to initialise, then open it.
          const tryOpen = (attempts = 0) => {
            if (typeof window.openShopifyCart === "function" && window.openShopifyCart()) return;
            if (attempts < 10) setTimeout(() => tryOpen(attempts + 1), 300);
          };
          tryOpen();
        })
        .catch(console.error);

    if (window.ShopifyBuy?.UI) {
      run();
      return;
    }

    const script = document.querySelector<HTMLScriptElement>(
      'script[src*="buy-button-storefront"]'
    );
    if (script) {
      script.addEventListener("load", run);
      return () => script.removeEventListener("load", run);
    }
  }, [nodePrefix]);

  return (
    <div className="fmly-shopify-grid">
      {PRODUCT_IDS.map(({ key }) => (
        <div key={key} className="fmly-shopify-product">
          <div id={`${nodePrefix}-${key}`} />
        </div>
      ))}
    </div>
  );
}
