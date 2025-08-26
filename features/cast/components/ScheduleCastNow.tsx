import { CalendarClock } from "lucide-react";
import React from "react";
import ScheduleCastModal from "./ScheduleCastModal";

type ScheduleCastNowProps = {
  profilePic?: string | null;
  username?: string | null;
  userId: string;
};

export default function ScheduleCastNow({
  profilePic,
  username,
  userId,
}: ScheduleCastNowProps) {
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

      <ScheduleCastModal
        userId={userId}
        profilePic={profilePic}
        username={username}
      />
    </div>
  );
}
