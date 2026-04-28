export interface VideoItem {
  id: string;
  title: string;
  kind: string;
  /** YouTube video ID — used for the embed iframe. Pull this from the ?v= param of the watch URL. */
  youtubeId: string;
  /** Direct watch URL — used for the "Watch on YouTube" link. */
  externalUrl?: string;
  thumbnail?: string;
  featured?: boolean;
}

// FMLY BZNS YouTube channel — used as the canonical link for "more videos".
export const youtubeChannelUrl = "https://www.youtube.com/@FMLYBZNS";

// Real FMLY BZNS uploads only. Add new videos here as they're released —
// the youtubeId is the value after `?v=` in the YouTube watch URL.
export const videos: VideoItem[] = [
  {
    id: "the-gathering-trailer",
    title: "The Gathering — Boutique Festival Trailer",
    kind: "Festival Trailer",
    youtubeId: "qMm-fpsLi7w",
    externalUrl: "https://www.youtube.com/watch?v=qMm-fpsLi7w",
    featured: true,
  },
];

export const featuredVideo = videos.find((v) => v.featured) ?? videos[0];
