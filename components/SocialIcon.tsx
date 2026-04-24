type SocialName = 'Instagram' | 'TikTok' | 'YouTube' | 'SoundCloud';

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
    case 'SoundCloud':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 16h9a3 3 0 1 0-.5-6 4.5 4.5 0 0 0-8.5 1.2" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M5 16V9M3 16v-5M7 16V8" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    default:
      return null;
  }
}
