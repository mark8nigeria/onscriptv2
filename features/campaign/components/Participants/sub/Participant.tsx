"use client";

import ButtonAction from "@/components/ButtonAction";
import { cn } from "@/lib/utils";
import { $Enums } from "@/prisma/generated/prisma";
import { Loader2 } from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import { approveParticipant } from "../../../actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type ParticipantType = {
  id: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  userId: string;
  fid: number;
  username: string;
  email: string;
  xHandle: string;
  web3ContentWork: $Enums.web3ContentWork;
  commitment: boolean;
  helpNeeded: string | null;
  storyTellingVibe: string;
  isApproved: boolean | null;
  following_team: boolean;
};

export default function Participant({
  username,
  isApproved: approved,
  id,
}: ParticipantType) {
  const [isApproved, setIsApproved] = useState(approved);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  useEffect(() => {
    setIsApproved(approved);
  }, [approved]);

  return (
    <div className="w-full flex items-center justify-between pt-4 first:pt-0 px-4">
      <p>@{username}</p>
      <ButtonAction
        btnType="badge"
        disabled={!!(isPending || isApproved)}
        onClick={async () => {
          if (!isApproved) {
            startTransition(async () => {
              const result = await approveParticipant(id);
              if (result.error) {
                toast.error(result.error || "Something went wrong");
                return;
              }

              if (result.success) {
                toast.success("Approved");
                setIsApproved(true);
                router.refresh();
              }
            });
          }
        }}
        className={cn(
          "border border-green-500 bg-green-500/10 text-green-500 rounded-full py-1 hover:bg-green-500/10 capitalize",
          {
            "border border-orange-500 bg-orange-500/10 text-orange-500 rounded-full py-1 hover:bg-orange-500/10":
              !isApproved,
          },
        )}
      >
        {isPending && !isApproved ? (
          <Loader2 className="animate-spin size-4" />
        ) : (
          `${!isApproved ? "Pending approval" : "approved"}`
        )}
      </ButtonAction>
    </div>
  );
}
