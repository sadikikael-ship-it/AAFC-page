interface Props {
  items: string[];
  speedSeconds?: number;
}

export function Marquee({ items, speedSeconds = 38 }: Props) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee" aria-label="Collaborators, festivals and cities">
      <div
        className="marqueeTrack"
        style={{ animationDuration: `${speedSeconds}s` }}
      >
        {doubled.map((item, i) => (
          <span className="marqueeItem" key={`${item}-${i}`}>
            {item}
            <span className="marqueeStar" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
