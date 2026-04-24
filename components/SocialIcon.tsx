type SocialName =
  | 'Instagram'
  | 'TikTok'
  | 'YouTube'
  | 'Spotify'
  | 'SoundCloud'
  | 'Apple Music'
  | 'Email';

export function SocialIcon({ name }: { name: SocialName }) {
  switch (name) {
    case 'Instagram':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17" cy="7" r="1.2" />
        </svg>
      );
    case 'TikTok':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 4v9.2a3.8 3.8 0 1 1-3-3.7" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M14 4c1 2 2.4 3 4.5 3" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case 'YouTube':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="6" width="18" height="12" rx="4" />
          <path d="M10 9l6 3-6 3z" />
        </svg>
      );
    case 'Spotify':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M7 10c4-1 7-.6 10 1" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M7.8 13c3-.8 5.6-.4 8 1" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8.5 15.8c2-.5 3.8-.3 5.5.6" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case 'SoundCloud':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 16h9a3 3 0 1 0-.5-6 4.5 4.5 0 0 0-8.5 1.2" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M5 16V9M3 16v-5M7 16V8" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case 'Apple Music':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15 5v10.2a2.8 2.8 0 1 1-1.8-2.6V7l6-1v8.2a2.8 2.8 0 1 1-1.8-2.6V5.7z" />
        </svg>
      );
    case 'Email':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M4 8l8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    default:
      return null;
  }
}
