import React from "react";
import CastCardEmbeds from "../CastCardEmbeds";
import Image from "next/image";
import { cn } from "@/lib/utils";

type CastPreviewProps = {
  embeds: {
    url: string;
  }[];
  text: string;
  username: string | null | undefined;
  profilePic: string | null | undefined;
  className?: string;
};

export default function CastPreview(props: CastPreviewProps) {
  const { className, embeds, profilePic, text, username } = props;

  return (
    <div
      className={cn(
        "w-full flex flex-col items-start justify-start gap-6 p-4",
        className,
      )}
    >
      <div className="w-full flex items-start justify-start gap-2">
        <div className="size-9 flex-shrink-0 bg-gray-200 rounded-full overflow-hidden">
          {profilePic && (
            <Image
              src={profilePic}
              alt={username || "user image"}
              width={32}
              height={32}
              className="size-full"
            />
          )}
        </div>

        <div className="flex items-start justify-start gap-2 flex-col w-full">
          <div>
            <p className="font-medium">{username}</p>
            <p>{text}</p>
          </div>

          <CastCardEmbeds embeds={embeds} />
        </div>
      </div>
    </div>
  );
}
