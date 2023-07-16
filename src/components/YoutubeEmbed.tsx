interface Props {
  title?: string;
  videoId: string;
}

export default function YoutubeEmbed({ videoId, title }: Props) {
  return (
    <div className="overflow-hidden pb-[56.25%] relative mt-4 mb-4 border border-neutral-800 rounded-xl">
      <iframe
        className="h-full w-full absolute"
        width="853"
        height="480"
        src={`https://youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title ?? 'Youtube Video'}
      />
    </div>
  );
}
