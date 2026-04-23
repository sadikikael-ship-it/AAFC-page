export const navItems = [
  ['About', '/about'],
  ['Events', '/events'],
  ['Music / Media', '/media'],
  ['Community', '/community'],
  ['Shop / Drops', '/shop'],
  ['Partnerships', '/partnerships'],
  ['Join', '/join'],
  ['AndreasOne', '/andreasone']
] as const;

export const events = [
  {
    title: 'Signal Night: Brooklyn Pulse',
    date: 'May 22, 2026',
    city: 'New York',
    venue: 'The Foundry Hall',
    time: '10:00 PM',
    image: 'linear-gradient(145deg,#231f20,#a85b26)',
    ticket: '#',
    details: '/events'
  },
  {
    title: 'Bass Ritual: Paris Session',
    date: 'June 14, 2026',
    city: 'Paris',
    venue: 'Palais Electrique',
    time: '11:00 PM',
    image: 'linear-gradient(145deg,#1a1f35,#c8af4d)',
    ticket: '#',
    details: '/events'
  },
  {
    title: 'FMLY x Lagos Rooftop',
    date: 'July 3, 2026',
    city: 'Lagos',
    venue: 'Skyline Yard',
    time: '9:30 PM',
    image: 'linear-gradient(145deg,#1f2a21,#f5a000)',
    ticket: '#',
    details: '/events'
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
