type SocialName = 'Instagram' | 'TikTok' | 'YouTube' | 'SoundCloud' | 'Spotify' | 'Cart';

export function SocialIcon({ name }: { name: SocialName }) {
  const common = { 'aria-hidden': true, focusable: 'false' as const, viewBox: '0 0 24 24' };

  switch (name) {
    case 'Instagram':
      return <svg {...common}><rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="17" cy="7" r="1" fill="currentColor" /></svg>;
    case 'TikTok':
      return <svg {...common}><path d="M14 4v9.2a3.8 3.8 0 1 1-3-3.7" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M14 4c1 2 2.4 3 4.5 3" fill="none" stroke="currentColor" strokeWidth="2"/></svg>;
    case 'YouTube':
      return <svg {...common}><rect x="3" y="6" width="18" height="12" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M10 9l6 3-6 3z" fill="currentColor"/></svg>;
    case 'SoundCloud':
      return <svg {...common}><path d="M8 16h9a3 3 0 1 0-.5-6 4.5 4.5 0 0 0-8.5 1.2" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M5 16V9M3 16v-5M7 16V8" fill="none" stroke="currentColor" strokeWidth="2"/></svg>;
    case 'Spotify':
      return <svg {...common}><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6"/><path d="M7 10c4-1 7-.6 10 1M7.8 13c3-.8 5.6-.4 8 1M8.5 15.8c2-.5 3.8-.3 5.5.6" fill="none" stroke="currentColor" strokeWidth="1.6"/></svg>;
    case 'Cart':
      return <svg {...common}><path d="M4 6h2l2 9h9l2-6H8" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="10" cy="18" r="1.3"/><circle cx="17" cy="18" r="1.3"/></svg>;
    default:
      return null;
  }
}
