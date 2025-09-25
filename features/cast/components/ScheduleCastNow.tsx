import { CalendarClock } from "lucide-react";
import React from "react";
import ScheduleCast from "./ScheduleCast";

export default function ScheduleCastNow() {
  return (
    <div className="w-full bg-white p-8 rounded-3xl flex items-center justify-center gap-4 flex-col shadow-xl shadow-black/[0.05]">
      <div className="border border-neutral-100 p-4 rounded-full">
        <CalendarClock className="size-8" />
      </div>
      <div>
        <h4 className="text-lg font-medium text-center">Schedule a cast now</h4>
        <p className="text-center text-neutral-700">
          Keep your content flowing
        </p>
      </div>

      <ScheduleCast />
    </div>
  );
}
