import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FMLY BZNS | Global Culture Platform',
  description:
    'FMLY BZNS is a creative collective and global cultural platform spanning events, music, community, drops, and partnerships.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="siteShell">
          <aside className="frameRail" aria-hidden="true" />
          <div className="siteContent">{children}</div>
          <aside className="frameRail" aria-hidden="true" />
        </div>
      </body>
    </html>
  );
}
