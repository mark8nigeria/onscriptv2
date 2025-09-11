import { ComposeDirectCast } from "@/features/direct-cast/components";
import {
  BroadcastEmail,
  BroadcastEmailToCinematicStreak,
} from "@/features/mail/components";
import React from "react";

export default function AdminDashboard() {
  return (
    <main className="text-black p-4 flex items-start justify-start flex-col w-full gap-4">
      <BroadcastEmailToCinematicStreak />
      <BroadcastEmail />
      <ComposeDirectCast />
    </main>
  );
}
