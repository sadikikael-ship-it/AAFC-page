import { Switch, Route, Router as WouterRouter, Redirect } from "wouter";
import { useEffect, lazy, Suspense } from "react";
import { useLocation } from "wouter";
import { SiteShell } from "@/components/SiteShell";
import { CartProvider } from "@/lib/cart";

const SHOPIFY_DOMAIN = "5cbegm-kb.myshopify.com";
const SHOPIFY_TOKEN  = "76283f7ea2ae821d4c6f3120742407e0";

declare global {
  interface Window {
    ShopifyBuy: any;
    __shopifyUI: any;
    __shopifyCartGlobalInit?: boolean;
    openShopifyCart?: () => boolean | void;
  }
}

const BTN_STYLE = {
  "font-family": "inherit",
  "background-color": "#ff651f",
  color: "#fff",
  "border-radius": "0px",
  ":hover": { "background-color": "#d94f0e" },
};

/**
 * Registers window.openShopifyCart so the header cart icon works on every page.
 * Returns true if the drawer opened, false if not ready yet.
 */
function registerCartOpener() {
  window.openShopifyCart = () => {
    const cart = window.__shopifyUI?.components?.cart?.[0];
    if (cart && typeof cart.open === "function") {
      cart.open();
      return true;
    }
    return false;
  };
}

/**
 * Creates a standalone Shopify cart component at the app level so the cart
 * drawer is available on every page — not just merch/home.
 */
async function initGlobalCart() {
  // Avoid double-init if already done (e.g. ShopifyBuyButtons ran first).
  if (window.__shopifyCartGlobalInit) return;
  window.__shopifyCartGlobalInit = true;

  if (!window.__shopifyUI) {
    const client = window.ShopifyBuy.buildClient({
      domain: SHOPIFY_DOMAIN,
      storefrontAccessToken: SHOPIFY_TOKEN,
    });
    window.__shopifyUI = window.ShopifyBuy.UI.init(client);
  }

  // Only create a cart if one doesn't exist yet.
  const existing = window.__shopifyUI?.components?.cart;
  if (existing && existing.length > 0) return;

  await window.__shopifyUI.createComponent("cart", {
    options: {
      cart: {
        popup: false,
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
          count:  { color: "#fff" },
        },
      },
    },
  });

  registerCartOpener();
}

/** Loads the Shopify SDK script if not already present, then calls cb. */
function withShopifySDK(cb: () => void) {
  if (window.ShopifyBuy?.UI) { cb(); return; }

  let script = document.querySelector<HTMLScriptElement>('script[src*="buy-button-storefront"]');
  if (!script) {
    script = document.createElement("script");
    script.async = true;
    script.src = "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
    document.head.appendChild(script);
  }
  script.addEventListener("load", cb, { once: true });
}

/** Runs at app-level — initialises the global cart drawer on every page. */
function ShopifyCartInit() {
  useEffect(() => {
    withShopifySDK(() => initGlobalCart().catch(console.error));
  }, []);
  return null;
}

const HomePage            = lazy(() => import("@/pages/HomePage"));
const EventsPage          = lazy(() => import("@/pages/EventsPage"));
const MusicPage           = lazy(() => import("@/pages/MusicPage"));
const CrewPage            = lazy(() => import("@/pages/CrewPage"));
const MerchPage           = lazy(() => import("@/pages/MerchPage"));
const CollaborationsPage  = lazy(() => import("@/pages/CollaborationsPage"));
const ContactPage         = lazy(() => import("@/pages/ContactPage"));
const CartPage            = lazy(() => import("@/pages/CartPage"));
const CartSuccessPage     = lazy(() => import("@/pages/CartSuccessPage"));
const NotFoundPage        = lazy(() => import("@/pages/NotFoundPage"));

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);
  return null;
}

function Router() {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/events" component={EventsPage} />
        <Route path="/music" component={MusicPage} />
        <Route path="/crew" component={CrewPage} />
        <Route path="/merch" component={MerchPage} />
        <Route path="/collaborations" component={CollaborationsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/cart/success" component={CartSuccessPage} />
        <Route path="/checkout">{() => <Redirect to="/cart" />}</Route>
        <Route path="/media">{() => <Redirect to="/music" />}</Route>
        <Route path="/shop">{() => <Redirect to="/merch" />}</Route>
        <Route path="/partnerships">{() => <Redirect to="/contact" />}</Route>
        <Route path="/join">{() => <Redirect to="/contact" />}</Route>
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <CartProvider>
        <SiteShell>
          <ShopifyCartInit />
          <ScrollToTop />
          <Router />
        </SiteShell>
      </CartProvider>
    </WouterRouter>
  );
}

export default App;
