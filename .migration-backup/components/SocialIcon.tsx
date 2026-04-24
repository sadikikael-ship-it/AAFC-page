import { FaInstagram, FaSoundcloud, FaTiktok, FaYoutube } from 'react-icons/fa';

type SocialName = 'Instagram' | 'TikTok' | 'YouTube' | 'SoundCloud';

export function SocialIcon({ name }: { name: SocialName }) {
  switch (name) {
    case 'Instagram':
      return <FaInstagram aria-hidden="true" focusable="false" />;
    case 'TikTok':
      return <FaTiktok aria-hidden="true" focusable="false" />;
    case 'YouTube':
      return <FaYoutube aria-hidden="true" focusable="false" />;
    case 'SoundCloud':
      return <FaSoundcloud aria-hidden="true" focusable="false" />;
    default:
      return null;
  }
}
