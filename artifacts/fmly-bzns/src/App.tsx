import { Switch, Route, Router as WouterRouter, Redirect } from "wouter";
import { useEffect, lazy, Suspense } from "react";
import { useLocation } from "wouter";
import { SiteShell } from "@/components/SiteShell";
import { CartProvider } from "@/lib/cart";

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
          <ScrollToTop />
          <Router />
        </SiteShell>
      </CartProvider>
    </WouterRouter>
  );
}

export default App;
