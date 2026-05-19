import { useEffect } from "react";

declare global {
  interface Window {
    ShopifyBuy: any;
    __shopifyUI: any;
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

function createComponents() {
  if (!window.__shopifyUI) {
    const client = window.ShopifyBuy.buildClient({
      domain: DOMAIN,
      storefrontAccessToken: TOKEN,
    });
    window.__shopifyUI = window.ShopifyBuy.UI.init(client);
  }

  PRODUCTS.forEach(({ id, node }) => {
    const el = document.getElementById(node);
    if (!el || el.hasChildNodes()) return;
    window.__shopifyUI.createComponent("product", {
      id,
      node: el,
      moneyFormat: "%24%7B%7Bamount%7D%7D",
      options: {
        product: {
          styles: {
            product: { "text-align": "left" },
            title: { "font-family": "inherit", color: "#1d1510" },
            price: { "font-family": "inherit", color: "#1d1510" },
            button: BTN_STYLE,
            compareAt: { color: "#1d1510" },
          },
          layout: "vertical",
          contents: { img: true, title: true, price: true },
          width: "100%",
          text: { button: "Add to cart" },
          googleFonts: [],
        },
        modalProduct: {
          contents: {
            img: false,
            imgWithCarousel: true,
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
            title: { "font-family": "inherit" },
            price: { "font-family": "inherit" },
            button: BTN_STYLE,
          },
          text: { button: "Add to cart" },
          googleFonts: [],
        },
        option: {
          styles: {
            label: { "font-family": "inherit" },
            select: { "font-family": "inherit" },
          },
        },
        cart: {
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
}

export function ShopifyBuyButtons() {
  useEffect(() => {
    const run = () => {
      if (window.ShopifyBuy?.UI) {
        createComponents();
        return;
      }
    };

    if (window.ShopifyBuy?.UI) {
      createComponents();
      return;
    }

    const scriptId = "shopify-buy-btn-sdk";
    const existing = document.getElementById(scriptId);
    if (existing) {
      existing.addEventListener("load", run);
      return () => existing.removeEventListener("load", run);
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src =
      "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
    script.async = true;
    script.onload = createComponents;
    document.head.appendChild(script);
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
