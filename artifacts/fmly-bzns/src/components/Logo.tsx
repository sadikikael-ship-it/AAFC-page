import logoUrl from "@assets/FMLY_LOGO_COLOR_1777076477311.png";

export function Logo({
  size = 44,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <img
      src={logoUrl}
      alt="FMLY BZNS"
      className={className}
      width={size}
      height={size}
      style={{ display: "block", height: size, width: "auto" }}
    />
  );
}
