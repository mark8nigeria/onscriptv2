export default function ImageEmbed({ url }: { url: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={url}
      alt="Embedded content"
      className="w-full h-full max-w-md rounded-xl object-cover shadow"
    />
  );
}
