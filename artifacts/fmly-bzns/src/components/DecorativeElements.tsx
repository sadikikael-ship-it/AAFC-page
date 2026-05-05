import { useId } from "react";

// ── Overlapping directional arrows band ────────────────────────────────────
export function ArrowsBand({
  color = "#f1d164",
  bg = "transparent",
  direction = "right",
  height = 22,
  className = "",
}: {
  color?: string;
  bg?: string;
  direction?: "right" | "left";
  height?: number;
  className?: string;
}) {
  const uid = useId().replace(/:/g, "x");
  const aW = Math.round(height * 1.4);
  const step = Math.round(aW * 0.76);
  const pts =
    direction === "right"
      ? `0,0 ${aW},${height / 2} 0,${height}`
      : `${aW},0 0,${height / 2} ${aW},${height}`;
  return (
    <div className={`decorDivider ${className}`} aria-hidden="true" role="presentation">
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 ${step} ${height}`}
        preserveAspectRatio="xMinYMid slice"
        style={{ display: "block" }}
      >
        <defs>
          <pattern
            id={`arr${uid}`}
            x="0"
            y="0"
            width={step}
            height={height}
            patternUnits="userSpaceOnUse"
          >
            {bg !== "transparent" && <rect width={step} height={height} fill={bg} />}
            <polygon points={pts} fill={color} />
          </pattern>
        </defs>
        <rect width="100%" height={height} fill={`url(#arr${uid})`} />
      </svg>
    </div>
  );
}

// ── Zigzag filled strip (teeth pointing up) ────────────────────────────────
export function ZigzagBand({
  color = "#1d1510",
  bg = "transparent",
  height = 20,
  toothW = 28,
  className = "",
}: {
  color?: string;
  bg?: string;
  height?: number;
  toothW?: number;
  className?: string;
}) {
  const uid = useId().replace(/:/g, "x");
  const step = toothW;
  return (
    <div className={`decorDivider ${className}`} aria-hidden="true" role="presentation">
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 ${step} ${height}`}
        preserveAspectRatio="xMinYMid slice"
        style={{ display: "block" }}
      >
        <defs>
          <pattern
            id={`zz${uid}`}
            x="0"
            y="0"
            width={step}
            height={height}
            patternUnits="userSpaceOnUse"
          >
            {bg !== "transparent" && <rect width={step} height={height} fill={bg} />}
            <polygon
              points={`0,${height} ${step / 2},0 ${step},${height}`}
              fill={color}
            />
          </pattern>
        </defs>
        <rect width="100%" height={height} fill={`url(#zz${uid})`} />
      </svg>
    </div>
  );
}

// ── ZigZag filled strip (teeth pointing DOWN — for section bottom) ──────────
export function ZigzagBandDown({
  color = "#1d1510",
  bg = "transparent",
  height = 20,
  toothW = 28,
  className = "",
}: {
  color?: string;
  bg?: string;
  height?: number;
  toothW?: number;
  className?: string;
}) {
  const uid = useId().replace(/:/g, "x");
  const step = toothW;
  return (
    <div className={`decorDivider ${className}`} aria-hidden="true" role="presentation">
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 ${step} ${height}`}
        preserveAspectRatio="xMinYMid slice"
        style={{ display: "block" }}
      >
        <defs>
          <pattern
            id={`zzd${uid}`}
            x="0"
            y="0"
            width={step}
            height={height}
            patternUnits="userSpaceOnUse"
          >
            {bg !== "transparent" && <rect width={step} height={height} fill={bg} />}
            <polygon
              points={`0,0 ${step / 2},${height} ${step},0`}
              fill={color}
            />
          </pattern>
        </defs>
        <rect width="100%" height={height} fill={`url(#zzd${uid})`} />
      </svg>
    </div>
  );
}

// ── Eyes row band (outline eye shapes on solid strip) ─────────────────────
export function EyesBand({
  bg = "#1d1510",
  stroke = "#f1d164",
  height = 44,
  className = "",
}: {
  bg?: string;
  stroke?: string;
  height?: number;
  className?: string;
}) {
  const uid = useId().replace(/:/g, "x");
  const eyeW = 68;
  const eyeH = height * 0.72;
  const cy = height / 2;
  const ry = eyeH / 2;
  const rx = eyeW / 2;
  const patW = eyeW + 18;
  const ex = patW / 2;

  return (
    <div className={`decorDivider ${className}`} aria-hidden="true" role="presentation">
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 ${patW} ${height}`}
        preserveAspectRatio="xMinYMid slice"
        style={{ display: "block" }}
      >
        <defs>
          <pattern
            id={`eye${uid}`}
            x="0"
            y="0"
            width={patW}
            height={height}
            patternUnits="userSpaceOnUse"
          >
            <rect width={patW} height={height} fill={bg} />
            <path
              d={`M ${ex - rx},${cy} Q ${ex},${cy - ry} ${ex + rx},${cy} Q ${ex},${cy + ry} ${ex - rx},${cy} Z`}
              fill="none"
              stroke={stroke}
              strokeWidth="2"
            />
            <circle cx={ex} cy={cy} r={ry * 0.52} fill="none" stroke={stroke} strokeWidth="1.5" />
          </pattern>
        </defs>
        <rect width="100%" height={height} fill={`url(#eye${uid})`} />
      </svg>
    </div>
  );
}

// ── Basquiat-style crown SVG (for hero accent) ─────────────────────────────
export function CrownSvg({
  color = "#f1d164",
  width = 72,
  className = "",
}: {
  color?: string;
  width?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 82"
      width={width}
      aria-hidden="true"
      role="presentation"
      className={className}
      style={{ display: "block", flexShrink: 0 }}
    >
      <path
        d={[
          "M 2,80",
          "L 118,80",
          "L 110,46",
          "L 98,46",
          "L 96,6",
          "L 82,46",
          "L 72,46",
          "L 60,0",
          "L 48,46",
          "L 38,46",
          "L 24,6",
          "L 12,46",
          "L 2,80 Z",
        ].join(" ")}
        fill={color}
      />
      <circle cx="22" cy="63" r="5" fill="none" stroke="#1d1510" strokeWidth="2" />
      <circle cx="38" cy="63" r="5" fill="none" stroke="#1d1510" strokeWidth="2" />
      <circle cx="54" cy="63" r="5" fill="none" stroke="#1d1510" strokeWidth="2" />
      <circle cx="70" cy="63" r="5" fill="none" stroke="#1d1510" strokeWidth="2" />
      <circle cx="86" cy="63" r="5" fill="none" stroke="#1d1510" strokeWidth="2" />
      <circle cx="102" cy="63" r="5" fill="none" stroke="#1d1510" strokeWidth="2" />
    </svg>
  );
}

// ── Small flanking arrow cluster for hero logo ─────────────────────────────
export function LogoFlankArrows({
  direction = "right",
  color = "#f1d164",
  size = 20,
}: {
  direction?: "right" | "left";
  color?: string;
  size?: number;
}) {
  const w = size;
  const h = size * 0.65;
  const gap = 5;
  const count = 4;
  const totalH = count * h + (count - 1) * gap;

  const pts = (i: number) => {
    const y = i * (h + gap);
    return direction === "right"
      ? `2,${y} ${w - 2},${y + h / 2} 2,${y + h}`
      : `${w - 2},${y} 2,${y + h / 2} ${w - 2},${y + h}`;
  };

  return (
    <svg
      viewBox={`0 0 ${w} ${totalH}`}
      width={w}
      height={totalH}
      aria-hidden="true"
      role="presentation"
      style={{ display: "block", flexShrink: 0, opacity: 0.75 }}
    >
      {Array.from({ length: count }, (_, i) => (
        <polygon key={i} points={pts(i)} fill={color} />
      ))}
    </svg>
  );
}

// ── Scallop / arch band (mosque-dome shaped teeth) ─────────────────────────
export function ScallopBand({
  color = "#ff651f",
  bg = "transparent",
  height = 56,
  archW = 68,
  direction = "down",
  className = "",
}: {
  color?: string;
  bg?: string;
  height?: number;
  archW?: number;
  direction?: "down" | "up";
  className?: string;
}) {
  const uid = useId().replace(/:/g, "x");
  const W = archW;
  const H = height;
  // "down": flat top band, arch hangs down — like Afro Nation top border
  // "up":   flat bottom band, arch points up — like Afro Nation bottom border
  const d =
    direction === "down"
      ? `M 0,0 L ${W},0 L ${W},${H * 0.38} Q ${W / 2},${H} 0,${H * 0.38} Z`
      : `M 0,${H} L ${W},${H} L ${W},${H * 0.62} Q ${W / 2},0 0,${H * 0.62} Z`;
  return (
    <div className={`decorDivider ${className}`} aria-hidden="true" role="presentation">
      <svg
        width="100%"
        height={H}
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMinYMid slice"
        style={{ display: "block" }}
      >
        <defs>
          <pattern
            id={`scl${uid}`}
            x="0" y="0"
            width={W}
            height={H}
            patternUnits="userSpaceOnUse"
          >
            {bg !== "transparent" && <rect width={W} height={H} fill={bg} />}
            <path d={d} fill={color} />
          </pattern>
        </defs>
        <rect width="100%" height={H} fill={`url(#scl${uid})`} />
      </svg>
    </div>
  );
}

// ── Castle battlement / crenellation divider (thick stepped teeth) ─────────
export function BattlementBand({
  color = "#1d1510",
  bg = "transparent",
  height = 56,
  toothW = 44,
  className = "",
}: {
  color?: string;
  bg?: string;
  height?: number;
  toothW?: number;
  className?: string;
}) {
  const uid = useId().replace(/:/g, "x");
  const W = toothW * 2;   // tile width: one tooth + one gap
  const H = height;
  const mid = H / 2;      // gap drops to mid-height
  return (
    <div className={`decorDivider ${className}`} aria-hidden="true" role="presentation">
      <svg
        width="100%"
        height={H}
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMinYMid slice"
        style={{ display: "block" }}
      >
        <defs>
          <pattern
            id={`btl${uid}`}
            x="0" y="0"
            width={W}
            height={H}
            patternUnits="userSpaceOnUse"
          >
            {bg !== "transparent" && <rect width={W} height={H} fill={bg} />}
            {/* Full-height tooth on the left, step-down gap on right */}
            <polygon
              points={`0,0 ${toothW},0 ${toothW},${mid} ${W},${mid} ${W},${H} 0,${H}`}
              fill={color}
            />
          </pattern>
        </defs>
        <rect width="100%" height={H} fill={`url(#btl${uid})`} />
      </svg>
    </div>
  );
}

// ── Battlement pointing DOWN (teeth hang from top) ─────────────────────────
export function BattlementBandDown({
  color = "#1d1510",
  bg = "transparent",
  height = 56,
  toothW = 44,
  className = "",
}: {
  color?: string;
  bg?: string;
  height?: number;
  toothW?: number;
  className?: string;
}) {
  const uid = useId().replace(/:/g, "x");
  const W = toothW * 2;
  const H = height;
  const mid = H / 2;
  return (
    <div className={`decorDivider ${className}`} aria-hidden="true" role="presentation">
      <svg
        width="100%"
        height={H}
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMinYMid slice"
        style={{ display: "block" }}
      >
        <defs>
          <pattern
            id={`btld${uid}`}
            x="0" y="0"
            width={W}
            height={H}
            patternUnits="userSpaceOnUse"
          >
            {bg !== "transparent" && <rect width={W} height={H} fill={bg} />}
            {/* Full-height tooth on left hanging down, step-up gap on right */}
            <polygon
              points={`0,0 ${W},0 ${W},${mid} ${toothW},${mid} ${toothW},${H} 0,${H}`}
              fill={color}
            />
          </pattern>
        </defs>
        <rect width="100%" height={H} fill={`url(#btld${uid})`} />
      </svg>
    </div>
  );
}

// ── Stepped Pyramid / Mayan temple divider ─────────────────────────────────
export function SteppedPyramidDivider({
  color = "#ff651f",
  bg = "transparent",
  bandH = 22,
  steps = 3,
  stepSize = 12,
  numTeeth = 32,
  flip = false,
}: {
  color?: string;
  bg?: string;
  bandH?: number;
  steps?: number;
  stepSize?: number;
  numTeeth?: number;
  flip?: boolean;
}) {
  const tileW = steps * 2 * stepSize + stepSize;
  const tileH = bandH + steps * stepSize;
  const totalW = tileW * numTeeth;

  // Build one combined path for all teeth — drawn directly into the SVG
  const parts: string[] = [];
  for (let n = 0; n < numTeeth; n++) {
    const ox = n * tileW;
    let d = `M${ox},0 H${ox + tileW} V${bandH}`;
    for (let i = 0; i < steps; i++) {
      d += ` H${ox + tileW - (i + 1) * stepSize} V${bandH + (i + 1) * stepSize}`;
    }
    d += ` H${ox + steps * stepSize}`;
    for (let i = steps - 1; i >= 0; i--) {
      d += ` V${bandH + i * stepSize} H${ox + i * stepSize}`;
    }
    d += " Z";
    parts.push(d);
  }

  return (
    <svg
      width="100%"
      height={tileH}
      viewBox={`0 0 ${totalW} ${tileH}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      role="presentation"
      style={{ display: "block", flexShrink: 0, transform: flip ? "scaleY(-1)" : undefined }}
    >
      {bg !== "transparent" && <rect width={totalW} height={tileH} fill={bg} />}
      {parts.map((d, i) => <path key={i} d={d} fill={color} />)}
    </svg>
  );
}

// ── Decorative festival tile strip ─────────────────────────────────────────
type TileShape =
  | "tri-up" | "starburst" | "circle" | "diagonal" | "zigzag"
  | "arch" | "cross" | "diamond" | "stripes" | "tri-down"
  | "sunburst" | "halfcircle";

interface TileDef { bg: string; shape: TileShape; fg: string }

const TILE_DEFS: TileDef[] = [
  { bg: "#ff651f", shape: "tri-up",      fg: "#fff6e1" },
  { bg: "#f1d164", shape: "starburst",   fg: "#1d1510" },
  { bg: "#1a4a1a", shape: "circle",      fg: "#f1d164" },
  { bg: "#cc2200", shape: "diagonal",    fg: "#fff6e1" },
  { bg: "#1d1510", shape: "zigzag",      fg: "#ff651f" },
  { bg: "#fff6e1", shape: "arch",        fg: "#1d1510" },
  { bg: "#f1d164", shape: "cross",       fg: "#ff651f" },
  { bg: "#1d1510", shape: "diamond",     fg: "#f1d164" },
  { bg: "#ff651f", shape: "stripes",     fg: "#1d1510" },
  { bg: "#cc2200", shape: "tri-down",    fg: "#f1d164" },
  { bg: "#1a4a1a", shape: "sunburst",    fg: "#fff6e1" },
  { bg: "#fff6e1", shape: "halfcircle",  fg: "#ff651f" },
];

function TileInner({ shape, fg }: { shape: TileShape; fg: string }) {
  switch (shape) {
    case "tri-up":
      return <polygon points="40,10 70,70 10,70" fill={fg} />;
    case "starburst": {
      const pts = "40,12 46,34 68,40 46,46 40,68 34,46 12,40 34,34";
      return (
        <>
          <polygon points={pts} fill={fg} />
          <circle cx="40" cy="40" r="9" fill={fg} />
        </>
      );
    }
    case "circle":
      return <circle cx="40" cy="40" r="28" fill={fg} />;
    case "diagonal":
      return (
        <>
          <line x1="0" y1="0" x2="80" y2="80" stroke={fg} strokeWidth="14" strokeLinecap="square" />
          <line x1="24" y1="0" x2="80" y2="56" stroke={fg} strokeWidth="6" strokeLinecap="square" opacity="0.5" />
        </>
      );
    case "zigzag": {
      const pts = "0,58 14,22 27,58 40,22 53,58 66,22 80,58";
      return <polyline points={pts} fill="none" stroke={fg} strokeWidth="8" strokeLinejoin="round" strokeLinecap="round" />;
    }
    case "arch":
      return <path d="M12,72 L12,44 Q40,8 68,44 L68,72 Z" fill={fg} />;
    case "cross":
      return (
        <>
          <rect x="33" y="8"  width="14" height="64" fill={fg} />
          <rect x="8"  y="33" width="64" height="14" fill={fg} />
        </>
      );
    case "diamond":
      return <polygon points="40,8 72,40 40,72 8,40" fill={fg} />;
    case "stripes":
      return (
        <>
          <rect x="8"  y="0" width="16" height="80" fill={fg} />
          <rect x="32" y="0" width="16" height="80" fill={fg} opacity="0.65" />
          <rect x="56" y="0" width="16" height="80" fill={fg} opacity="0.35" />
        </>
      );
    case "tri-down":
      return <polygon points="8,10 72,10 40,70" fill={fg} />;
    case "sunburst": {
      const rays = Array.from({ length: 12 }, (_, i) => {
        const a = (i * 30 * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={40 + Math.cos(a) * 19}
            y1={40 + Math.sin(a) * 19}
            x2={40 + Math.cos(a) * 36}
            y2={40 + Math.sin(a) * 36}
            stroke={fg}
            strokeWidth="4"
            strokeLinecap="round"
          />
        );
      });
      return <>{rays}<circle cx="40" cy="40" r="14" fill={fg} /></>;
    }
    case "halfcircle":
      return <path d="M8,72 A32,32 0 0,1 72,72 Z" fill={fg} />;
    default:
      return null;
  }
}

export function DecorativeTileStrip({ tileSize = 80 }: { tileSize?: number }) {
  const count = Math.ceil(2080 / tileSize) + 2;
  return (
    <div
      aria-hidden="true"
      role="presentation"
      style={{ display: "flex", overflow: "hidden", flexShrink: 0, height: tileSize, width: "100%" }}
    >
      {Array.from({ length: count }, (_, i) => {
        const tile = TILE_DEFS[i % TILE_DEFS.length];
        return (
          <div
            key={i}
            style={{ width: tileSize, height: tileSize, flexShrink: 0, background: tile.bg }}
          >
            <svg viewBox="0 0 80 80" width={tileSize} height={tileSize} style={{ display: "block" }}>
              <TileInner shape={tile.shape} fg={tile.fg} />
            </svg>
          </div>
        );
      })}
    </div>
  );
}

// ── Thick color rule (CSS-based, used as a styled div) ────────────────────
export function ThickRule({
  color = "#f1d164",
  height = 6,
  className = "",
}: {
  color?: string;
  height?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      role="presentation"
      className={`decorDivider ${className}`}
      style={{ background: color, height, width: "100%" }}
    />
  );
}
