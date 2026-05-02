export const siteLinks = {
  social: {
    instagram: 'https://www.instagram.com/fmlybzns_/',
    tiktok: 'https://www.tiktok.com/@fmlybzns',
    youtube: 'https://www.youtube.com/@FMLYBZNS',
    soundcloud: 'https://soundcloud.com/fmlybzns',
    spotify: 'https://open.spotify.com/artist/75qZLpg3af3d4P0Yo5oy3J?si=_x82IyYPRMWKgA0CoXikOg'
  },
  events: {
    lightningInABottle: 'https://www.libfestival.org/',
    theGatheringTickets: 'https://www.eventbrite.com/e/fmly-bzns-the-gathering-tickets-1986467302175?aff=erelexpmlt',
    sameSameButDifferent: 'https://www.ssbdfest.com/'
  },
  media: {
    upcomingEventVideo: 'https://www.youtube.com/watch?v=qMm-fpsLi7w',
    upcomingEventVideoEmbed: 'https://www.youtube.com/embed/qMm-fpsLi7w'
  },
  contactEmail: 'mailto:hello@fmlybzns.com'
} as const;

export const navItems = [
  ['Home', '/'],
  ['Events', '/events'],
  ['Music', '/media'],
  ['Crew', '/crew'],
  ['Merch', '/shop'],
  ['Collaborations', '/community'],
  ['Contact', '/partnerships']
] as const;

export const socialLinks = [
  ['Instagram', siteLinks.social.instagram],
  ['TikTok', siteLinks.social.tiktok],
  ['YouTube', siteLinks.social.youtube],
  ['SoundCloud', siteLinks.social.soundcloud],
  ['Spotify', siteLinks.social.spotify]
] as const;

export const weeklyMix = {
  title: 'FMLY MXTP Vol. 16 — Cocoa Crescendo',
  label: 'Weekly Mix · Updated Every Friday',
  description:
    'This week’s selection — slow-burning Afro-house, broken Amapiano, and a finale of dub. Recorded live at the Brooklyn rooftop session.',
  soundcloudUrl: siteLinks.social.soundcloud,
  spotifyUrl: siteLinks.social.spotify,
  soundcloudEmbed:
    'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/fmlybzns&color=%23f89200&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
} as const;

export const events = [
  {
    title: 'FMLY BZNS Takeover: The Crossroads at Lightning in a Bottle',
    date: 'Sunday, May 24',
    city: 'Lightning in a Bottle',
    venue: 'The Crossroads',
    time: '8PM–4AM',
    image: 'linear-gradient(135deg,#7a7a4f,#f89200)',
    detailsUrl: '/events',
    ticketUrl: siteLinks.events.lightningInABottle,
    details: 'Sunday, May 24 · 8PM–4AM · The Crossroads at Lightning in a Bottle',
    description:
      'FMLY BZNS takes over The Crossroads at Lightning in a Bottle for a full 8-hour, night-to-dawn session — bringing a global lineup of selectors and artists from Ghana, Zimbabwe, Netherlands, Egypt, Colombia, Jamaica, Venezuela, California, and beyond into one unified frequency. Rooted in Afro-diaspora sound and built for the late-night rave, this is a high-intensity journey through Amapiano, Afro-House, Gqom, Baile Funk, Dancehall, and global club.',
    cta: 'Learn More',
    url: siteLinks.events.lightningInABottle
  },
  {
    title: 'FMLY BZNS: The Felix SF',
    date: 'June 6, 2026',
    city: 'San Francisco',
    venue: 'The Felix SF',
    time: 'Night Session',
    image: 'linear-gradient(135deg,#cc9274,#f1d164)',
    detailsUrl: '/events',
    ticketUrl: '/events',
    details: 'June 6, 2026 · San Francisco · Featuring AndreasOne, SAGE, and One Lovell',
    description:
      'FMLY BZNS takes over The Felix SF for a night rooted in sound, style, and late-night connection — bringing Global Dance Music Culture into one of San Francisco’s most refined dancefloor settings. Expect Afro-diaspora rhythms moving through Amapiano, Afro-House, Dancehall, and global club.',
    cta: 'Details',
    url: '/events'
  },
  {
    title: 'FMLY BZNS x Gateway Mendocino: The Gathering',
    date: 'July 30 – August 2, 2026',
    city: 'Northern California',
    venue: 'Gateway Mendocino',
    time: '3 Days / 3 Nights',
    image: 'linear-gradient(135deg,#9ea57a,#f89200)',
    detailsUrl: '/events',
    ticketUrl: siteLinks.events.theGatheringTickets,
    details: 'July 30 – August 2, 2026 · Northern California',
    description:
      'A 3-day, 3-night immersion where Global Dance Music Culture meets nature, community, and intention. This boutique microfestival blends Afro-diaspora sound with transformational energy — flowing from sunlit sessions by the water into late-night dancefloors that carry the energy deep into the night. Across Amapiano, Afro-House, Dancehall, Baile Funk, and beyond, expect a curated journey of music, movement, and connection paired with healing arts, immersive environments, and spontaneous moments of creation.',
    cta: 'Buy Tickets',
    url: siteLinks.events.theGatheringTickets,
    featuredTicket: true
  },
  {
    title: 'FMLY BZNS Takeover: Nakey Island at Same Same But Different',
    date: 'Festival Weekend',
    city: 'Same Same But Different',
    venue: 'Nakey Island',
    time: '6-Hour Takeover',
    image: 'linear-gradient(135deg,#f1d164,#d9b39f)',
    detailsUrl: '/events',
    ticketUrl: siteLinks.events.sameSameButDifferent,
    details: 'Same Same But Different · Beachside Takeover',
    description:
      'FMLY BZNS lands on Nakey Island at Same Same But Different for a 6-hour takeover — bringing a sun-soaked, beachside journey of Global Dance Music Culture to the water’s edge. Rooted in Afro-diaspora rhythms and shaped by island energy, the sound drifts through Amapiano, Afro-Latin House, Dancehall, Baile Funk, and beyond.',
    cta: 'Learn More',
    url: siteLinks.events.sameSameButDifferent
  }
] as const;

export const destinationLinks = {
  shop: '/cart',
  tickets: siteLinks.events.theGatheringTickets,
  contact: '/partnerships',
  community: '/community',
  newsletter: '/join'
} as const;

export const crew = [
  ['ANDREASONE', 'Founder · Creative Direction · Sound'],
  ['ONE LOVELL', 'Selector · Operations'],
  ['OBE (INTELLIGENTREBELLION)', 'Fashion · Space · Movement'],
  ['DAVIX (DOJO IN THE SKY)', 'Live Sound · Production'],
  ['JUSTIN (GATEWAY MENDOCINO)', 'Space Holder · Experience · Operations'],
  ['NED (GATEWAY MENDOCINO)', 'Visionary · Benefactor'],
  ['AMALYN', 'Vocalist · Live Energy'],
  ['SAGE', 'Selector · Global Grooves']
] as const;

export const merchProducts = [
  { name: 'FMLY BZNS Tee', type: 'Clothing', price: '$55', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80', cartUrl: '/cart' },
  { name: 'FMLY BZNS Hoodie', type: 'Clothing', price: '$95', image: 'https://images.unsplash.com/photo-1556821840-3a9fbc0d2d1e?auto=format&fit=crop&w=900&q=80', cartUrl: '/cart' },
  { name: 'FMLY BZNS Poster', type: 'Print', price: '$35', image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80', cartUrl: '/cart' }
] as const;

export const collaborators = {
  festivals: ['LIGHTNING IN A BOTTLE', 'COACHELLA', 'SAME SAME BUT DIFFERENT', 'BURNING MAN', 'REGGAE ON THE RIVER', 'NORTHERN NIGHTS'],
  venues: ['1015 FOLSOM', 'PUBLIC WORKS', 'VINTAGE SPACE', 'CONTINENTAL CLUB', 'NEW PARISH', 'ROYAL SUN PALM SPRINGS'],
  artists: ['BLVK H3R0', 'AMALYN', 'KES KROSS', 'JADE DE LAFLEUR', 'SEUN KUTI'],
  brands: ['SECRET SESSIONS', 'PEACE FITS', 'HOT ICE CREAM BOUTIQUE'],
  cities: ['OAKLAND', 'BALI', 'MEXICO CITY', 'LOS ANGELES', 'MIAMI', 'PUERTO RICO', 'COLOMBIA', 'CAPE TOWN', 'ACCRA']
} as const;
