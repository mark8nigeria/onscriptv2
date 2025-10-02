import { $Enums } from "@/prisma/generated/prisma";
import { JsonValue } from "@prisma/client/runtime/library";

export type CastCardProps = {
  id: string;
  signerUuid: string | null;
  text: string;
  parent: string | null;
  channelId: string | null;
  parentAuthorFid: number | null;
  embeds: JsonValue;
  postHash: string | null;
  status: $Enums.PostStatus;
  scheduledAt: Date | null;
  publishedAt: Date | null;
  qstashMessageId: string | null;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  className?: string;
};
