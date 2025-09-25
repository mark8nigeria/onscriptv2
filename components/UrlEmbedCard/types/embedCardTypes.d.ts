export type MediaType = "image" | "video" | "website" | "unknown";

export type Metadata = {
  title: string;
  description?: string;
  image?: string;
  url: string;
};

export type UrlEmbedCardProps = {
  url: string;
  type?: MediaType;
};
