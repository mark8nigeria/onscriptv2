export default function FallbackEmbed({ url }: { url: string }) {
  return (
    <a href={url} target="_blank" className="text-blue-600 underline">
      {url}
    </a>
  );
}
