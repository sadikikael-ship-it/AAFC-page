interface Props {
  videoId: string;
  title?: string;
}

export function YouTubeEmbed({ videoId, title = "YouTube video" }: Props) {
  return (
    <div className="ytWrap">
      <iframe
        title={title}
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        frameBorder="0"
      />
    </div>
  );
}
