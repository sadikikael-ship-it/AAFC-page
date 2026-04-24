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
  ['Spotify', 'https://open.spotify.com'],
  ['SoundCloud', 'https://soundcloud.com'],
  ['Bandcamp', 'https://bandcamp.com'],
  ['YouTube', 'https://www.youtube.com']
] as const;

export const events = [
  {
    title: 'Signal Night: Brooklyn Pulse',
    date: 'May 22, 2026',
    city: 'New York',
    venue: 'The Foundry Hall',
    time: '10:00 PM',
    image:
      'url(https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80) center/cover'
  },
  {
    title: 'Bass Ritual: Paris Session',
    date: 'June 14, 2026',
    city: 'Paris',
    venue: 'Palais Electrique',
    time: '11:00 PM',
    image:
      'url(https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80) center/cover'
  },
  {
    title: 'FMLY x Lagos Rooftop',
    date: 'July 3, 2026',
    city: 'Lagos',
    venue: 'Skyline Yard',
    time: '9:30 PM',
    image:
      'url(https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1200&q=80) center/cover'
  }
];

export const media = [
  {
    title: 'FMLY Frequencies Vol. 04',
    kind: 'Featured Mix',
    cta: 'Listen on SoundCloud'
  },
  {
    title: 'Movement Radio: Summer Edit',
    kind: 'Playlist',
    cta: 'Open on Spotify'
  },
  {
    title: 'Signal Recap: Mexico City',
    kind: 'Film',
    cta: 'Watch on YouTube'
  }
];

export const crew = [
  ['Andreas', 'Founder / Creative Direction'],
  ['Nia Rhythm', 'Resident DJ / Host'],
  ['Malik Wave', 'Producer / Sound Curation'],
  ['Sade Sol', 'Visual Worldbuilding / Art'],
  ['Tariq Motion', 'Community + Event Ops']
] as const;
