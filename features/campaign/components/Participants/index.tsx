import {
  getAllCinematicStreakParticipants,
  numberOfUnapprovedStreakParticipants,
} from "@/helpers/read-db";
import React from "react";
import Participant from "./sub/Participant";
import ApproveAllParticipants from "./sub/ApproveAllParticipants";

export default async function Participants() {
  const participants = await getAllCinematicStreakParticipants();
  const unapprovedCount = await numberOfUnapprovedStreakParticipants();

  return (
    <section className="w-full bg-white rounded-3xl flex items-center justify-center flex-col shadow-xl shadow-black/[0.05] py-4">
      <div className="w-full flex items-center justify-between gap-4 p-4 pt-0">
        <h3 className="font-medium text-xl capitalize text-left w-full">
          All Participants
        </h3>

        <ApproveAllParticipants unapprovedCount={unapprovedCount} />
      </div>

      <div className="w-full grid grid-cols-1 gap-4 divide-y divide-neutral-100 space-y-0 border-y border-neutral-100 py-4">
        {participants.length === 0 && (
          <p className="text-center">No record found</p>
        )}
        {participants.map((participant, i) => {
          return <Participant key={i} {...participant} />;
        })}
      </div>
    </section>
  );
}
