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
    openShopifyCart?: () => boolean | void;
  }
}

/**
 * Registers window.openShopifyCart once the SDK is ready.
 * Returns true if the cart drawer was opened, false if no cart exists yet
 * (so the header can fall back to /cart).
 */
function registerShopifyCartOpener() {
  window.openShopifyCart = () => {
    const cart = window.__shopifyUI?.components?.cart?.[0];
    if (cart && typeof cart.open === "function") {
      cart.open();
      return true;
    }
    return false;
  };
}

/** Runs at app-level so the header cart icon works on every page. */
function ShopifyCartInit() {
  useEffect(() => {
    if (window.ShopifyBuy?.UI) {
      registerShopifyCartOpener();
      return;
    }
    const script = document.querySelector<HTMLScriptElement>('script[src*="buy-button-storefront"]');
    if (script) {
      script.addEventListener("load", registerShopifyCartOpener);
      return () => script.removeEventListener("load", registerShopifyCartOpener);
    }
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
