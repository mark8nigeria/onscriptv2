"use client";

import React from "react";
import Image from "next/image";
import { LogOutIcon, Wallet } from "lucide-react";
import { shortenAddress, useAppSelector } from "@/utils";
import ButtonAction from "@/components/ButtonAction";
import { signOut } from "next-auth/react";
import OnchainAccount from "./OnchainAccount";

export default function AccountDetails() {
  const { username, profilePic, walletAddress, isUserPremium } = useAppSelector(
    (state) => state.user,
  );

  return (
    <section className="w-full bg-white rounded-3xl flex items-center justify-center flex-col gap-8 shadow-xl shadow-black/[0.05] p-4">
      <div className="w-full flex items-center justify-center flex-col gap-4">
        <div className="size-32 bg-gray-200 aspect-square overflow-hidden rounded-full">
          {profilePic && (
            <Image
              src={profilePic}
              alt={username || ""}
              width={450}
              height={450}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <h3 className="font-medium text-xl text-center w-full">@{username}</h3>
      </div>

      <OnchainAccount />

      <div className="space-y-4 w-full">
        <div className="w-full flex items-center justify-start gap-2">
          <Wallet className="size-6" />
          <div className="flex items-start justify-start flex-col gap-1">
            <h3 className="font-medium text-xs capitalize">Wallet address</h3>
            <p className="font-medium text-sm">
              {walletAddress && shortenAddress(walletAddress)}
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-start gap-2">
          <Wallet className="size-6" />
          <div className="flex items-start justify-start flex-col gap-1">
            <h3 className="font-medium text-xs capitalize">Is premium</h3>
            <p className="font-medium text-sm">
              {isUserPremium ? "Yes" : "No"}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <ButtonAction
          btnType="primary"
          className="flex items-center justify-center gap-2"
          onClick={() => signOut()}
        >
          <LogOutIcon className="size-5" />
          <p className="text-white">Logout</p>
        </ButtonAction>
      </div>
    </section>
  );
}
