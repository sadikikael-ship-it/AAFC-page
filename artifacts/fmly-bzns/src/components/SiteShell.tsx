import type { ReactNode } from 'react';

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="siteShell">
      <aside className="frameRail" aria-hidden="true" />
      <div className="siteContent">{children}</div>
      <aside className="frameRail" aria-hidden="true" />
    </div>
  );
}
