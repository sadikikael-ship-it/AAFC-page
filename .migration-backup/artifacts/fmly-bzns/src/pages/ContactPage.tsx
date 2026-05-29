import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { MailingListForm } from "@/components/MailingListForm";
import { SocialIcon } from "@/components/SocialIcon";
import { siteLinks, socialList } from "@/data/siteLinks";

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        title="Contact / Booking"
        subtitle="Bookings, festival takeovers, brand collaborations, press, and community inquiries — all start here."
      />

      <section className="section contactSplit">
        <div>
          <p className="eyebrow">Send a message</p>
          <h2>Tell us about your event or collab</h2>
          <ContactForm />
        </div>
        <aside className="contactAside">
          <div className="contactBlock">
            <p className="eyebrow">Direct emails</p>
            <ul className="contactList">
              <li>
                <strong>Bookings</strong>
                <a href={siteLinks.contact.booking}>bookings@fmlybzns.com</a>
              </li>
              <li>
                <strong>Press</strong>
                <a href={siteLinks.contact.press}>press@fmlybzns.com</a>
              </li>
              <li>
                <strong>General</strong>
                <a href={siteLinks.contact.general}>hello@fmlybzns.com</a>
              </li>
            </ul>
          </div>

          <div className="contactBlock">
            <p className="eyebrow">Follow</p>
            <div className="socialIconOnlyRow" aria-label="social links">
              {socialList.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  title={s.name}
                >
                  <SocialIcon name={s.name} />
                </a>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="section mailingBand">
        <div className="mailingInner">
          <p className="eyebrow">Mailing list</p>
          <h2>Get the signal</h2>
          <p className="mailingLead">
            Mixes, tickets, merch drops, festival takeovers and collab news —
            sent when something matters.
          </p>
          <MailingListForm />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
