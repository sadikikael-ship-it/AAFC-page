import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  background?: string;
}

export function PageHero({
  eyebrow = "FMLY BZNS",
  title,
  subtitle,
  actions,
  background,
}: Props) {
  return (
    <section
      className={`section pageHero ${background ? "pageHero--image" : ""}`}
      style={
        background
          ? {
              backgroundImage: `linear-gradient(180deg, rgba(20,15,12,0.32), rgba(20,15,12,0.62)), url(${background})`,
            }
          : undefined
      }
    >
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {subtitle ? <p className="pageHeroSubtitle">{subtitle}</p> : null}
      {actions ? <div className="buttonRow">{actions}</div> : null}
    </section>
  );
}
