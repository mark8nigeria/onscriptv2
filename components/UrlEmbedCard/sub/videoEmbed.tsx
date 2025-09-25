export default function VideoEmbed({ url }: { url: string }) {
  return (
    <video
      controls
      className="w-full h-full max-w-md rounded-xl border shadow object-contain"
    >
      <source src={url} />
      Your browser does not support the video tag.
    </video>
  );
}
