import type { ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="siteShell">
      <aside className="frameRail frameRail--left" aria-hidden="true" />
      <div className="siteContent">{children}</div>
      <aside className="frameRail frameRail--right" aria-hidden="true" />
    </div>
  );
}
