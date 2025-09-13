"use client";

import ButtonAction from "@/components/ButtonAction";
import Loader from "@/components/Loader";
import { approveAllParticipant } from "@/features/campaign/actions";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import { toast } from "sonner";

type ApproveAllParticipantsType = {
  unapprovedCount: number;
};

export default function ApproveAllParticipants({
  unapprovedCount,
}: ApproveAllParticipantsType) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <>
      <ButtonAction
        disabled={unapprovedCount === 0 || isPending}
        btnType="primary"
        className="w-fit text-nowrap"
        onClick={() => {
          startTransition(async () => {
            const res = await approveAllParticipant();
            if (res.error) {
              toast.error(res.error);
              return;
            }

            if (res.success) {
              toast.success(res.success);
              router.refresh();
            }
          });
        }}
      >
        Approve All
      </ButtonAction>
      <Loader isLoading={isPending} />
    </>
  );
}
