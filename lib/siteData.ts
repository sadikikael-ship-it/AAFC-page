export const navItems = [
  ['Events', '/events'],
  ['Music', '/media'],
  ['Crew', '/crew'],
  ['Contact', '/partnerships'],
  ['Shop', '/shop'],
  ['Community', '/community'],
  ['AndreasOne', '/andreasone']
] as const;

export const socialLinks = [
  ['Instagram', 'https://www.instagram.com'],
  ['TikTok', 'https://www.tiktok.com'],
  ['YouTube', 'https://www.youtube.com'],
  ['Spotify', 'https://open.spotify.com'],
  ['SoundCloud', 'https://soundcloud.com'],
  ['Apple Music', 'https://music.apple.com'],
  ['Email', 'mailto:hello@fmlybzns.com']
] as const;

export const events = [
  {
    title: 'Signal Night: Brooklyn Pulse',
    date: 'May 22, 2026',
    city: 'New York',
    venue: 'The Foundry Hall',
    time: '10:00 PM',
    ticketUrl: 'https://ra.co/events',
    detailsUrl: '/events',
    image:
      'url(https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80) center/cover'
  },
  {
    title: 'Bass Ritual: Paris Session',
    date: 'June 14, 2026',
    city: 'Paris',
    venue: 'Palais Electrique',
    time: '11:00 PM',
    ticketUrl: 'https://ra.co/events',
    detailsUrl: '/events',
    image:
      'url(https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80) center/cover'
  },
  {
    title: 'FMLY x Lagos Rooftop',
    date: 'July 3, 2026',
    city: 'Lagos',
    venue: 'Skyline Yard',
    time: '9:30 PM',
    ticketUrl: 'https://ra.co/events',
    detailsUrl: '/events',
    image:
      'url(https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1200&q=80) center/cover'
  }
];

export const media = [
  {
    title: 'FMLY Frequencies Vol. 04',
    kind: 'Featured Mix',
    cta: 'Listen on SoundCloud',
    url: 'https://soundcloud.com'
  },
  {
    title: 'Movement Radio: Summer Edit',
    kind: 'Playlist',
    cta: 'Open on Spotify',
    url: 'https://open.spotify.com'
  },
  {
    title: 'Signal Recap: Mexico City',
    kind: 'Film',
    cta: 'Watch on YouTube',
    url: 'https://www.youtube.com'
  }
];

export const crew = [
  ['Andreas', 'Founder / Creative Direction'],
  ['Nia Rhythm', 'Resident DJ / Host'],
  ['Malik Wave', 'Producer / Sound Curation'],
  ['Sade Sol', 'Visual Worldbuilding / Art'],
  ['Tariq Motion', 'Community + Event Ops']
] as const;

export const shopItems = [
  ['Signal Canvas Print', '$140 · Limited 50'],
  ['Night Circuit Jersey', '$95 · Drop 01'],
  ['FMLY Ritual Poster Set', '$70 · Collector Edition'],
  ['Sunset Movement Tote', '$45 · Studio Release']
] as const;
