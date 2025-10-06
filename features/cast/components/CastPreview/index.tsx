import React from "react";
import CastCardEmbeds from "../CastCardEmbeds";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { type CastData } from "@/types/cast.types";
import { useAppSelector } from "@/utils";
import CastContent from "../CastContent";

type CastPreviewProps = {
  className?: string;
  castData: CastData;
};

export default function CastPreview(props: CastPreviewProps) {
  const { className, castData } = props;
  const { embeds, text } = castData;
  const { username, profilePic } = useAppSelector((state) => state.user);

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
            <CastContent cast={text} />
          </div>

          <CastCardEmbeds embeds={embeds} />
        </div>
      </div>
    </div>
  );
}
