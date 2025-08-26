import React from "react";
import { scheduledCasts } from "@/data/casts.data";
import CastCard from "@/features/cast/components/CastCard";
import ScheduleCastNow from "@/features/cast/components/ScheduleCastNow";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getAllUsersCast } from "@/helpers/read-db";

export default async function Casts() {
  const session = await auth();
  if (!session || !session.user || !session.user.id) redirect("/login");

  const { name, image, id } = session.user;

  const casts = await getAllUsersCast(id);

  // const mockUserData = {
  //   address: "0x3097139c11366006F73Fd357c1F2489d8CF3B96A",
  //   fid: 1175517,
  //   id: "cme6dktp90000ky044dw45lo5",
  //   image:
  //     "https://tba-mobile.mypinata.cloud/ipfs/QmeMpPVcM5Ex4EKuih8oUBMxzhbBNA2MBxQFL54KAL5JDs?pinataGatewayToken=3nq0UVhtd3rYmgYDdb1I9qv7rHsw-_DzwdWkZPRQ-QW1avFI9dCS8knaSfq_R5_q",
  //   name: "wahaladev.base.eth",
  // };

  // const { name, image } = mockUserData;

  return (
    <main className="text-black p-4 bg-neutral-100 min-h-screen flex items-start justify-start flex-col w-full gap-4">
      <ScheduleCastNow profilePic={image} username={name} />

      <section className="w-full bg-white rounded-3xl flex items-center justify-center flex-col shadow-xl shadow-black/[0.05]">
        <h3 className="font-medium text-xl capitalize text-left w-full p-4 pb-0">
          Scheduled casts
        </h3>

        <div className="grid grid-cols-1 divide-y divide-neutral-100">
          {!casts && <p className="text-center p-4">Something went wrong</p>}
          {casts?.length === 0 && (
            <p className="text-center p-4">No scheduled casts</p>
          )}
          {casts?.map((cast, i) => {
            return (
              <CastCard key={i} {...cast} username={name} profilePic={image} />
            );
          })}
        </div>
      </section>
    </main>
  );
}
