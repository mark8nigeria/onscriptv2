"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ButtonAction from "@/components/ButtonAction";
import React, { useTransition } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CastCardProps } from "../cast-card.types";
import { useRouter } from "next/navigation";
import { deleteCast } from "@/features/cast/actions/deleteCast";
import { toast } from "sonner";
import Loader from "@/components/Loader";

export default function CastMenuDropdown({ status, id }: CastCardProps) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleDeleteCast = () => {
    startTransition(async () => {
      const res = await deleteCast({ id });
      if ("error" in res) {
        toast.error(res.error);
        return;
      }

      toast.success(res.message);
      router.refresh();
    });
  };
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <ButtonAction btnType="badge" className="px-2">
            <BsThreeDotsVertical className="size-3 text-black" />
          </ButtonAction>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56" align="start">
          <DropdownMenuGroup>
            {status === "PUBLISHED" ? (
              <>
                <DropdownMenuItem className="outline-none ring-0 border-0">
                  View Cast
                </DropdownMenuItem>
              </>
            ) : (
              <>
                <DropdownMenuItem className="outline-none ring-0 border-0">
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-error focus:text-error focus:bg-error/10 outline-none ring-0 border-0"
                  onClick={handleDeleteCast}
                >
                  Delete
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <Loader isLoading={isPending} />
    </>
  );
}
