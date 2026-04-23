import { PageHero } from '@/components/PageHero';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { events } from '@/lib/siteData';

export default function EventsPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        title="Events"
        subtitle="Discover upcoming cities, reserve tickets, and revisit recaps from the movement."
      />
      <section className="section cards3">
        {events.map((event) => (
          <article key={event.title} className="card eventCard">
            <div className="eventArt" style={{ background: event.image }} />
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.city} · {event.venue} · {event.time}</p>
            <div className="buttonRow compact">
              <a href="#" className="btn secondary">RSVP / Tickets</a>
              <a href="#" className="btn tertiary">Event Details</a>
            </div>
          </article>
        ))}
      </section>
      <section className="section card">
        <h2>Past Events / Recaps</h2>
        <p>Gallery-ready content area for photo sets, short films, and post-event storytelling.</p>
      </section>
      <SiteFooter />
    </main>
  );
}
