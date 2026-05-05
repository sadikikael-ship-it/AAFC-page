import type { ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="siteShell">
      <div className="siteContent">{children}</div>
    </div>
  );
}
