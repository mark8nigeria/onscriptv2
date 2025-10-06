"use client";

import Image from "next/image";
import React from "react";
import ButtonAction from "@/components/ButtonAction";
import { useAppSelector } from "@/utils";
import { BadgeCheck } from "lucide-react";

export default function UserDetails() {
  const { profilePic, username, isUserPremium } = useAppSelector(
    (state) => state.user,
  );

  return (
    <ButtonAction className="flex items-center justify-center gap-1 relative">
      <div className="relative size-8 rounded-full overflow-hidden bg-gray-200">
        {profilePic && (
          <Image
            src={profilePic}
            alt={username || ""}
            width={40}
            height={40}
            className="rounded-full w-full h-full"
          />
        )}
      </div>
      {isUserPremium && (
        <div className="absolute top-0 right-0 translate-x-0.5 -translate-y-0.5 p-0.5 bg-black rounded-full">
          <BadgeCheck className="size-2.5 text-white" />
        </div>
      )}
    </ButtonAction>
  );
}
