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

const PRODUCTS = [
  { id: "9160338964737", node: "product-component-1779155989235" },
  { id: "9160340406529", node: "product-component-1779155915499" },
  { id: "9160340504833", node: "product-component-1779155956310" },
  { id: "9160340701441", node: "product-component-1779155045291" },
];

const BTN_STYLE = {
  "font-family": "inherit",
  "background-color": "#ff651f",
  color: "#fff",
  "border-radius": "0px",
  ":hover": { "background-color": "#d94f0e" },
  ":focus": { "background-color": "#d94f0e" },
};

/** Injects a branded "Keep Shopping" button that appears when the Shopify cart drawer is open. */
function setupKeepShoppingButton() {
  const OVERLAY_ID = "fmly-keep-shopping-overlay";
  if (document.getElementById(OVERLAY_ID)) return;

  const overlay = document.createElement("div");
  overlay.id = OVERLAY_ID;
  overlay.style.cssText = [
    "display:none",
    "position:fixed",
    "bottom:0",
    "right:0",
    "width:350px",
    "z-index:2147483647",
    "background:#fff6e1",
    "border-top:2px solid #1d1510",
    "padding:12px 16px",
    "box-sizing:border-box",
  ].join(";");

  const btn = document.createElement("button");
  btn.textContent = "← Keep Shopping";
  btn.type = "button";
  btn.style.cssText = [
    "display:block",
    "width:100%",
    "padding:11px 16px",
    "background:transparent",
    "color:#1d1510",
    "border:2px solid #1d1510",
    "font-family:inherit",
    "font-size:0.8125rem",
    "font-weight:700",
    "text-transform:uppercase",
    "letter-spacing:0.08em",
    "cursor:pointer",
    "box-sizing:border-box",
  ].join(";");

  btn.addEventListener("mouseenter", () => { btn.style.background = "#1d1510"; btn.style.color = "#fff6e1"; });
  btn.addEventListener("mouseleave", () => { btn.style.background = "transparent"; btn.style.color = "#1d1510"; });

  btn.addEventListener("click", () => {
    const cart = window.__shopifyUI?.components?.cart?.[0];
    if (cart && typeof cart.close === "function") cart.close();
  });

  overlay.appendChild(btn);
  document.body.appendChild(overlay);

  // Patch the cart's open/close so we follow its state.
  function patchCart() {
    const cart = window.__shopifyUI?.components?.cart?.[0];
    if (!cart) return;

    const origOpen  = cart.open?.bind(cart);
    const origClose = cart.close?.bind(cart);

    if (origOpen && !cart.__fmlyPatched) {
      cart.open = function (...args: any[]) {
        const result = origOpen(...args);
        // Match the cart frame width dynamically.
        const frame = document.querySelector<HTMLElement>(".shopify-buy-frame--cart");
        if (frame) overlay.style.width = frame.offsetWidth + "px";
        overlay.style.display = "block";
        return result;
      };
    }

    if (origClose && !cart.__fmlyPatched) {
      cart.close = function (...args: any[]) {
        const result = origClose(...args);
        overlay.style.display = "none";
        return result;
      };
    }

    cart.__fmlyPatched = true;
  }

  // Try immediately, then retry briefly while SDK initialises.
  patchCart();
  const retries = [200, 500, 1000, 2000];
  retries.forEach((ms) => setTimeout(patchCart, ms));
}

async function createComponents() {
  if (!window.__shopifyUI) {
    const client = window.ShopifyBuy.buildClient({
      domain: DOMAIN,
      storefrontAccessToken: TOKEN,
    });
    window.__shopifyUI = window.ShopifyBuy.UI.init(client);
  }

  const promises = PRODUCTS.map(({ id, node }) => {
    const el = document.getElementById(node);
    if (!el || el.hasChildNodes()) return Promise.resolve(null);
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
          text: { button: "Add to Cart" },
          googleFonts: [],
        },
        modalProduct: {
          contents: {
            img: false,
            imgWithCarousel: true,
            button: false,
            buttonWithQuantity: false,
            quantity: false,
            quantityIncrement: false,
            quantityDecrement: false,
            quantityInput: false,
            title: true,
            price: true,
            options: true,
            description: true,
            button: true,
          },
          styles: {
            product: {
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0px",
                "margin-bottom": "0px",
              },
            },
            title: { "font-family": "inherit", color: "#1d1510", "font-size": "1.25rem", "font-weight": "700" },
            price: { "font-family": "inherit", color: "#1d1510" },
            button: BTN_STYLE,
          },
          buttonDestination: "cart",
          text: { button: "Add to Cart" },
          googleFonts: [],
        },
        option: {
          styles: {
            label: { "font-family": "inherit", color: "#1d1510", "font-weight": "600" },
            select: { "font-family": "inherit" },
          },
        },
        cart: {
          styles: {
            button: BTN_STYLE,
            title: { "font-family": "inherit", color: "#1d1510" },
            footer: { "padding-bottom": "60px" },
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

  // Expose cart opener for the site header icon.
  window.openShopifyCart = () => {
    const cart = window.__shopifyUI?.components?.cart?.[0];
    if (cart && typeof cart.open === "function") {
      cart.open();
    }
  };

  // Inject the Keep Shopping button into the cart drawer.
  setupKeepShoppingButton();
}

export function ShopifyBuyButtons() {
  useEffect(() => {
    if (window.ShopifyBuy?.UI) {
      createComponents().catch(console.error);
      return;
    }

    const run = () => createComponents().catch(console.error);
    const script = document.querySelector<HTMLScriptElement>(
      'script[src*="buy-button-storefront"]'
    );

    if (script) {
      script.addEventListener("load", run);
      return () => script.removeEventListener("load", run);
    }
  }, []);

  return (
    <div className="fmly-shopify-grid">
      {PRODUCTS.map(({ node }) => (
        <div key={node} className="fmly-shopify-product">
          <div id={node} />
        </div>
      ))}
    </div>
  );
}
