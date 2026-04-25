import type { ReactElement } from "react";
import {
  FaInstagram,
  FaSoundcloud,
  FaTiktok,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

export type SocialName =
  | "Instagram"
  | "TikTok"
  | "YouTube"
  | "SoundCloud"
  | "Email";

const map: Record<SocialName, ReactElement> = {
  Instagram: <FaInstagram aria-hidden focusable="false" />,
  TikTok: <FaTiktok aria-hidden focusable="false" />,
  YouTube: <FaYoutube aria-hidden focusable="false" />,
  SoundCloud: <FaSoundcloud aria-hidden focusable="false" />,
  Email: <FaEnvelope aria-hidden focusable="false" />,
};

export function SocialIcon({ name }: { name: SocialName | string }) {
  return map[name as SocialName] ?? null;
}
