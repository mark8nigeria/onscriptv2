import Image from "next/image";

export default function ImageEmbed({ url }: { url: string }) {
  return (
    <Image
      src={url}
      alt="Embedded content"
      className="w-full h-full max-w-md rounded-xl object-cover shadow"
      width={420}
      height={340}
    />
  );
}
