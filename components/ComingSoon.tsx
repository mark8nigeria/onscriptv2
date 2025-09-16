import ButtonAction from "@/components/ButtonAction";
import { Lock } from "lucide-react";
import React from "react";

export default function ComingSoon() {
  return (
    <div className="p-4 w-full">
      <div className="p-8 border border-neutral-200 rounded-3xl flex items-center justify-center gap-4 flex-col w-full">
        <div className="border border-neutral-100 p-4 rounded-full">
          <Lock className="size-8" />
        </div>
        <p className="text-center text-neutral-700">
          {"This feature is not available yet"}
        </p>
        <ButtonAction
          btnType="primary"
          className="flex items-center justify-center gap-2 w-fit px-8"
        >
          <Lock className="size-4 text-white" />
          <p className="text-white">Coming soon</p>
        </ButtonAction>
      </div>
    </div>
  );
}
