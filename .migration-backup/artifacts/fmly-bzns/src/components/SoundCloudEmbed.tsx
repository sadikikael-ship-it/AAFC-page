interface Props {
  url: string;
  title?: string;
  height?: number;
  visual?: boolean;
}

export function SoundCloudEmbed({
  url,
  title = "SoundCloud player",
  height = 320,
  visual = true,
}: Props) {
  const params = new URLSearchParams({
    url,
    color: "#ff651f",
    auto_play: "false",
    hide_related: "true",
    show_comments: "false",
    show_user: "true",
    show_reposts: "false",
    show_teaser: "false",
    visual: visual ? "true" : "false",
  });
  const src = `https://w.soundcloud.com/player/?${params.toString()}`;

  return (
    <div className="embedWrap">
      <iframe
        title={title}
        src={src}
        width="100%"
        height={height}
        scrolling="no"
        frameBorder="0"
        allow="autoplay"
        loading="lazy"
      />
    </div>
  );
}
