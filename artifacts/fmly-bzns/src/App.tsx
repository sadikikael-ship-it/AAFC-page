import { Switch, Route, Router as WouterRouter, Redirect } from "wouter";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { SiteShell } from "@/components/SiteShell";
import HomePage from "@/pages/HomePage";
import EventsPage from "@/pages/EventsPage";
import MusicPage from "@/pages/MusicPage";
import CrewPage from "@/pages/CrewPage";
import MerchPage from "@/pages/MerchPage";
import CollaborationsPage from "@/pages/CollaborationsPage";
import ContactPage from "@/pages/ContactPage";
import CartPage from "@/pages/CartPage";
import NotFoundPage from "@/pages/NotFoundPage";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/events" component={EventsPage} />
      <Route path="/music" component={MusicPage} />
      <Route path="/crew" component={CrewPage} />
      <Route path="/merch" component={MerchPage} />
      <Route path="/collaborations" component={CollaborationsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/cart" component={CartPage} />
      <Route path="/checkout">{() => <Redirect to="/cart" />}</Route>
      {/* Legacy aliases from earlier site structure */}
      <Route path="/media">{() => <Redirect to="/music" />}</Route>
      <Route path="/shop">{() => <Redirect to="/merch" />}</Route>
      <Route path="/partnerships">{() => <Redirect to="/contact" />}</Route>
      <Route path="/join">{() => <Redirect to="/contact" />}</Route>
      <Route component={NotFoundPage} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <SiteShell>
        <ScrollToTop />
        <Router />
      </SiteShell>
    </WouterRouter>
  );
}

export default App;
