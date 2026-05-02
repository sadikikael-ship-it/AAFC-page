export const siteLinks = {
  social: {
    soundcloud: "https://soundcloud.com/fmlybzns",
    spotify:
      "https://open.spotify.com/artist/75qZLpg3af3d4P0Yo5oy3J?si=_x82IyYPRMWKgA0CoXikOg",
    tiktok: "https://www.tiktok.com/@fmlybzns",
    youtube: "https://www.youtube.com/@FMLYBZNS",
    instagram: "https://www.instagram.com/fmlybzns_/",
  },
  contact: {
    booking: "mailto:bookings@fmlybzns.com",
    press: "mailto:press@fmlybzns.com",
    general: "mailto:hello@fmlybzns.com",
  },
  shop: "https://shop.fmlybzns.com",
} as const;

export type SocialKey = keyof typeof siteLinks.social;

export const socialList: { name: string; key: SocialKey; href: string }[] = [
  { name: "Instagram", key: "instagram", href: siteLinks.social.instagram },
  { name: "TikTok", key: "tiktok", href: siteLinks.social.tiktok },
  { name: "YouTube", key: "youtube", href: siteLinks.social.youtube },
  { name: "SoundCloud", key: "soundcloud", href: siteLinks.social.soundcloud },
  { name: "Spotify", key: "spotify", href: siteLinks.social.spotify },
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Music", href: "/music" },
  { label: "FMLY", href: "/crew" },
  { label: "Merch", href: "/merch" },
  { label: "Collaborations", href: "/collaborations" },
  { label: "Contact", href: "/contact" },
] as const;
