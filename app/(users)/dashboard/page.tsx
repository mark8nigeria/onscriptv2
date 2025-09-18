import { auth } from "@/auth";
import { redirect } from "next/navigation";
import ButtonAction from "@/components/ButtonAction";
import StatusCard from "@/components/StatusCard";
import campaigns from "@/data/campaigns.data";
import { scheduledCasts } from "@/data/casts.data";
import CastCard from "@/features/cast/components/CastCard";
import ScheduleCastNow from "@/features/cast/components/ScheduleCastNow";
import { Archive, CalendarClock, LucideSend } from "lucide-react";
import React from "react";
import { TbSpeakerphone } from "react-icons/tb";
import { CampaignCard } from "@/features/campaign/components";
import Link from "next/link";
import { getAllUsersCast, getUserById } from "@/helpers/read-db";

export default async function Dashboard() {
  const session = await auth();
  if (!session || !session.user || !session.user.id) redirect("/login");

  const { name, image, id } = session.user;

  const casts = await getAllUsersCast(id);
  const user = await getUserById(id);

  if (!user) {
    return (
      <main className="text-black p-4 flex items-start justify-start flex-col w-full gap-4">
        <h1 className="text-black">Something went wrong</h1>
        <ButtonAction btnType="primary">Reload page</ButtonAction>
      </main>
    );
  }

  return (
    <main className="text-black p-4 flex items-start justify-start flex-col w-full gap-4">
      <h1 className="font-semibold text-2xl h-fit normal-case">
        Welcome, {name}
      </h1>

      <section className="w-full grid grid-cols-2 gap-4">
        <StatusCard Icon={LucideSend} value={0} text="Sent casts" />
        <StatusCard Icon={CalendarClock} value={0} text="Queued casts" />
        <StatusCard Icon={TbSpeakerphone} value={0} text="Active campaign" />
        <StatusCard Icon={Archive} value={0} text="Drafts" />
      </section>

      <section className="w-full bg-white rounded-3xl flex items-center justify-center flex-col shadow-xl shadow-black/[0.05]">
        <h3 className="font-medium text-xl capitalize text-left w-full p-4 pb-0">
          Active Campaigns
        </h3>

        <div className="w-full grid grid-cols-1 gap-4 p-4">
          {campaigns.map((campaign, i) => {
            return <CampaignCard key={i} {...campaign} />;
          })}
        </div>
      </section>

      <ScheduleCastNow
        profilePic={image}
        username={name}
        userId={id}
        isPremium={user.isPremium}
        isUuidApprove={user.isUuidApprove}
        signerUuid={user.signerUuid}
        walletAddress={user.walletAddress}
        fid={user.fid}
      />

      <section className="w-full bg-white rounded-3xl flex items-center justify-center flex-col shadow-xl shadow-black/[0.05]">
        <h3 className="font-medium text-xl capitalize text-left w-full p-4 pb-0">
          Scheduled casts
        </h3>

        <div className="w-full grid grid-cols-1 divide-y divide-neutral-100">
          {/* {casts?.map((cast, i) => {
            return (
              <CastCard key={i} {...cast} username={name} profilePic={image} />
            );
          })} */}
        </div>

        <div className="p-4">
          <Link href={"/casts"}>
            <ButtonAction btnType="primary" className="w-fit px-8">
              See all
            </ButtonAction>
          </Link>
        </div>
      </section>
    </main>
  );
}
