export interface VideoItem {
  id: string;
  title: string;
  kind: string;
  /** YouTube video ID — used for the embed iframe. */
  youtubeId: string;
  /** Optional fallback URL if the video can't embed. */
  externalUrl?: string;
  thumbnail?: string;
  featured?: boolean;
}

export const videos: VideoItem[] = [
  {
    id: "movement-broadcast",
    title: "FMLY BZNS — Movement Broadcast (Studio)",
    kind: "Live Set Film",
    youtubeId: "5qap5aO4i9A",
    externalUrl: "https://www.youtube.com/@FMLYBZNS",
    featured: true,
  },
  {
    id: "lagos-rooftop-recap",
    title: "Lagos Rooftop Recap",
    kind: "Event Recap",
    youtubeId: "jfKfPfyJRdk",
    externalUrl: "https://www.youtube.com/@FMLYBZNS",
  },
  {
    id: "brooklyn-pulse-after",
    title: "Brooklyn Pulse — After Movie",
    kind: "Event Recap",
    youtubeId: "DWcJFNfaw9c",
    externalUrl: "https://www.youtube.com/@FMLYBZNS",
  },
  {
    id: "andreas-interview",
    title: "Andreas — Interview Series",
    kind: "Interview",
    youtubeId: "9bZkp7q19f0",
    externalUrl: "https://www.youtube.com/@FMLYBZNS",
  },
  {
    id: "field-day-set",
    title: "Field Day Festival — Live Set",
    kind: "Live Set",
    youtubeId: "kXYiU_JCYtU",
    externalUrl: "https://www.youtube.com/@FMLYBZNS",
  },
  {
    id: "studio-session-malik",
    title: "Studio Session — Malik Wave",
    kind: "Studio",
    youtubeId: "ZbZSe6N_BXs",
    externalUrl: "https://www.youtube.com/@FMLYBZNS",
  },
];

export const featuredVideo = videos.find((v) => v.featured) ?? videos[0];
