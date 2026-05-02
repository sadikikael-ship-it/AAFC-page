import { FaInstagram, FaSoundcloud, FaSpotify, FaTiktok, FaYoutube } from 'react-icons/fa';
import { HiOutlineShoppingCart } from 'react-icons/hi';

type SocialName = 'Instagram' | 'TikTok' | 'YouTube' | 'SoundCloud' | 'Spotify' | 'Cart';

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
    case 'Spotify':
      return <FaSpotify aria-hidden="true" focusable="false" />;
    case 'Cart':
      return <HiOutlineShoppingCart aria-hidden="true" focusable="false" />;
    default:
      return null;
  }
}
