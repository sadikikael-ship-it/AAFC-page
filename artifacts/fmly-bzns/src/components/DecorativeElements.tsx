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
