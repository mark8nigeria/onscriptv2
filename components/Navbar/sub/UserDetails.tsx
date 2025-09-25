"use client";

import Image from "next/image";
import React from "react";
import ButtonAction from "@/components/ButtonAction";
import { useAppSelector } from "@/utils";

export default function UserDetails() {
  const { isUserPremium, profilePic, username, isUserPlus } = useAppSelector(
    (state) => state.user,
  );

  return (
    <ButtonAction className="flex items-center justify-center gap-1">
      <div className="size-8 rounded-full overflow-hidden bg-gray-200">
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
      {/* <div className="flex flex-col justify-center items-start">
        <p className="text-[10px]">@{username}</p>
        <p className="text-[10px] text-gray-600">
          {isUserPremium ? "Premium" : isUserPlus ? "Plus" : "Freemium"}
        </p>
      </div> */}
    </ButtonAction>
  );
}
