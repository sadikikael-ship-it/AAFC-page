# FMLY BZNS Website

Premium, cinematic Next.js marketing platform for FMLY BZNS with conversion-first architecture.

## Included deliverables

- Full sitemap represented in the homepage sitemap section.
- Homepage with 14 requested sections.
- Reusable component system (`SiteHeader`, `SiteFooter`, `PageHero`).
- Event card system with city/date/venue/time + ticket/details CTA.
- Music/mix/media cards and curated content architecture.
- Community, shop/drops, and partnerships modules.
- Join/newsletter forms with optional SMS, city, and interest segmentation.
- AndreasOne coming-soon pathway as a secondary founder destination.
- Integration notes for CMS/CRM/analytics/ecommerce.

## Future integration notes

### CMS readiness
- Move all arrays in `lib/siteData.ts` into headless CMS collections (events, campaigns, media, drops, testimonials).
- Replace static copy blocks with rich-text fields for manifesto/editorial sections.

### CRM / automation readiness
- Route form submissions to API routes (`/api/join`, `/api/partner`) and push to HubSpot/Klaviyo/Mailchimp.
- Add hidden fields for source, campaign, and UTM tracking.
- Trigger segmented journeys by city + interests for ManyChat-style nurture workflows.

### Shopify / commerce readiness
- Replace shop cards with Shopify Storefront API products/collections.
- Add drop status tags (coming soon / live / sold out) and limited-edition inventory counters.

### Analytics and pixel readiness
- Add event instrumentation to all CTAs (`view_events_click`, `tickets_click`, `join_submit`, `partner_submit`, etc).
- Integrate GA4 + Meta Pixel + TikTok Pixel via app layout.
- Add server-side conversion API handoff for high-value conversions.

## Running locally

```bash
npm install
npm run dev
```
