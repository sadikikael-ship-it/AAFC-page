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
        subtitle="Discover upcoming cities, buy tickets directly, and revisit recaps from the movement."
      />
      <section className="section eventGrid">
        {events.map((event) => (
          <article key={event.title} className="eventItem">
            <div className="eventThumb" style={{ background: event.image }} />
            <h3>{event.title}</h3>
            <p>
              {event.city} · {event.venue}
            </p>
            <p>
              {event.date} · {event.time}
            </p>
            <div className="buttonRow">
              <a href={event.ticketUrl} target="_blank" rel="noreferrer" className="smallBtn">
                Buy Tickets
              </a>
              <a href={event.detailsUrl} className="smallBtn ghost">
                Details
              </a>
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
