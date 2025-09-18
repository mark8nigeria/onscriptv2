import { $Enums } from "@/prisma/generated/prisma";
import { JsonValue } from "@prisma/client/runtime/library";

// export type CastCardProps = {
//   status?: "DRAFT" | "SCHEDULED" | "PUBLISHED" | "FAILED";
//   id?: string | undefined;
//   text?: string | undefined;
//   channelId?: string | undefined;
//   parentAuthorFid?: number | undefined;
//   embeds?:
//     | {
//         cast_id?:
//           | {
//               hash: string;
//               fid: number;
//             }
//           | undefined;
//         url?: string | undefined;
//       }[]
//     | undefined;
//   postHash?: string | undefined;
//   scheduledAt?: Date | undefined;
//   publishedAt?: Date | undefined;
//   qstashMessageId?: string | undefined;

//   profilePic?: string | null;
//   username?: string | null;
//   previewMode?: boolean;
//   className?: string;
// };

export type CastCardProps = {
  id: string;
  signerUuid: string;
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

  // embeds?:
  //   | {
  //       cast_id?:
  //         | {
  //             hash: string;
  //             fid: number;
  //           }
  //         | undefined;
  //       url?: string | undefined;
  //     }[]
  //   | undefined;

  profilePic?: string | null;
  username?: string | null;
  previewMode?: boolean;
  className?: string;
};
