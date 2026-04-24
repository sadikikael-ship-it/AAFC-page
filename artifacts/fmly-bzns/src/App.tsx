import { Switch, Route, Router as WouterRouter } from "wouter";
import { SiteShell } from "@/components/SiteShell";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import AndreasOnePage from "@/pages/AndreasOnePage";
import CommunityPage from "@/pages/CommunityPage";
import CrewPage from "@/pages/CrewPage";
import EventsPage from "@/pages/EventsPage";
import JoinPage from "@/pages/JoinPage";
import MediaPage from "@/pages/MediaPage";
import PartnershipsPage from "@/pages/PartnershipsPage";
import ShopPage from "@/pages/ShopPage";
import NotFoundPage from "@/pages/NotFoundPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/andreasone" component={AndreasOnePage} />
      <Route path="/community" component={CommunityPage} />
      <Route path="/crew" component={CrewPage} />
      <Route path="/events" component={EventsPage} />
      <Route path="/join" component={JoinPage} />
      <Route path="/media" component={MediaPage} />
      <Route path="/partnerships" component={PartnershipsPage} />
      <Route path="/shop" component={ShopPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <SiteShell>
        <Router />
      </SiteShell>
    </WouterRouter>
  );
}

export default App;
