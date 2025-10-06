"use client";

import { Copy, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import ButtonAction from "@/components/ButtonAction";
import QRCode from "react-qr-code";
import { copyText } from "@/utils";
import { StatusAPIResponse, useSignIn } from "@farcaster/auth-kit";
import Link from "next/link";

type SignInOnBrowsersProps = {
  handleBrowserSignIn: (data: StatusAPIResponse) => Promise<void>;
};

let completedState = false;

export default function SignInOnBrowsers({
  handleBrowserSignIn,
}: SignInOnBrowsersProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { url, connect, data, signIn } = useSignIn({});

  useEffect(() => {
    async function handleSignIn() {
      if (completedState || !data) return;
      if (data.state === "completed") {
        setIsModalOpen(false);
        completedState = true;
        await handleBrowserSignIn(data);
        completedState = false;
      }
    }

    handleSignIn();
  }, [data]);

  useEffect(() => {
    if (url) {
      signIn();
    }
  }, [url]);

  return (
    <div>
      <ButtonAction
        btnType="secondary"
        onClick={async () => {
          await connect();
          setIsModalOpen(true);
        }}
      >
        Sign In
      </ButtonAction>

      <AlertDialog open={isModalOpen}>
        <AlertDialogContent className="w-[calc(100%-2rem)] max-h-[calc(100%-4rem)] overflow-y-auto !rounded-3xl p-4 gap-8">
          <AlertDialogHeader>
            <div className="w-full flex items-center justify-between gap-4">
              <AlertDialogTitle className="text-xl text-left font-medium capitalize text-black">
                Sign in with Farcaster
              </AlertDialogTitle>

              <ButtonAction
                onClick={() => setIsModalOpen(false)}
                btnType="badge"
                className="px-2"
              >
                <Plus className="size-4 rotate-45 text-black" />
              </ButtonAction>
            </div>

            <AlertDialogDescription className="text-left text-xs max-w-[80%]">
              To sign in with Farcaster, scan the code below with your phone's
              camera.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className={"grid grid-cols-1 gap-4"}>
            {url && (
              <div className="w-full flex items-center justify-center flex-col gap-8">
                <QRCode value={url} />

                <div className="w-full grid grid-cols-2 gap-2">
                  <ButtonAction
                    btnType="secondary"
                    onClick={() => copyText(url)}
                    className="flex items-center justify-center gap-2"
                  >
                    <Copy className="size-4" />
                    Copy link
                  </ButtonAction>

                  <Link href={url} target="_blank">
                    <ButtonAction btnType="primary">
                      Click if on phone
                    </ButtonAction>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
