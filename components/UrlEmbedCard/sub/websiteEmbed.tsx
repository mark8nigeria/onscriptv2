import { Metadata } from "../types/embedCardTypes";

export default function WebsiteEmbed({
  url,
  meta,
}: {
  url: string;
  meta: Metadata | null;
}) {
  if (!meta) {
    return (
      <div className="w-full max-w-md rounded-2xl border bg-gray-50 shadow p-3 space-y-1">
        <p className="text-xs text-gray-500">Failed to load preview</p>
        <a
          href={url}
          target="_blank"
          className="text-blue-600 underline text-xs"
        >
          {url}
        </a>
      </div>
    );
  }

  return (
    <a
      href={meta.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-md rounded-xl border border-neutral-200 overflow-hidden shadow"
    >
      {meta.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={meta.image}
          alt={meta.title}
          className="w-full h-36 object-cover"
        />
      )}
      <div className="p-2 space-y-1">
        <span className="text-[0.625rem] text-gray-400">
          {new URL(meta.url).hostname}
        </span>
        <h3 className="text-xs font-medium text-black">{meta.title}</h3>
        {meta.description && (
          <p className="text-[0.7rem] text-gray-500 line-clamp-2">
            {meta.description}
          </p>
        )}
      </div>
    </a>
  );
}
