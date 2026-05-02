export interface Mix {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  /**
   * SoundCloud profile or track URL — used for the embed widget.
   * Point to a specific track URL once available (e.g. https://soundcloud.com/fmlybzns/vol-12).
   * Falls back to the channel profile which shows all public mixes.
   */
  soundcloudUrl: string;
  externalUrl?: string;
  tags: string[];
  weekly?: boolean;
}

// Update this weekly object every Friday to refresh the homepage mix spot.
export const weeklyMix: Mix = {
  id: "weekly-current",
  title: "FMLY MXTP VOL. 12",
  subtitle: "SUNSET CIRCLE",
  description:
    "This week's selection — slow-burning Afro-house, broken Amapiano, and a finale of dub. Curated by the collective.",
  soundcloudUrl: "https://soundcloud.com/fmlybzns",
  externalUrl: "https://soundcloud.com/fmlybzns",
  tags: ["Weekly", "Afro-House", "Amapiano"],
  weekly: true,
};

// The full FMLY BZNS SoundCloud profile — embed this to show all real mixes.
export const soundcloudProfileUrl = "https://soundcloud.com/fmlybzns";

// Archive list — add past weekly mixes here as they roll off.
// Leave empty until there are real track URLs to link to.
export const mixes: Mix[] = [weeklyMix];
