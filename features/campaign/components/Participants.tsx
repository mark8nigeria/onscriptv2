import ButtonAction from "@/components/ButtonAction";
import {
  getAllCinematicStreakParticipants,
  // numberOfUnapprovedStreakParticipants,
} from "@/helpers/read-db";
import React from "react";
import Participant from "./Participant";

export default async function Participants() {
  const participants = await getAllCinematicStreakParticipants();
  // const unapprovedCount = await numberOfUnapprovedStreakParticipants();

  return (
    <section className="w-full bg-white rounded-3xl flex items-center justify-center flex-col shadow-xl shadow-black/[0.05]">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-medium text-xl capitalize text-left w-full p-4 pb-0">
          All Participants
        </h3>

        {/* <ButtonAction disabled={unapprovedCount === 0} btnType="primary">
          Approve All
        </ButtonAction> */}
      </div>

      <div className="w-full grid grid-cols-1 gap-4 p-4">
        {participants.map((participant, i) => {
          return <Participant key={i} {...participant} />;
        })}
      </div>
    </section>
  );
}
