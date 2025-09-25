import { auth } from "@/auth";
import { redirect } from "next/navigation";
import ButtonAction from "@/components/ButtonAction";
import StatusCard from "@/components/StatusCard";
import campaigns from "@/data/campaigns.data";
import ScheduleCastNow from "@/features/cast/components/ScheduleCastNow";
import {
  Archive,
  ArrowUp,
  CalendarClock,
  CircleAlert,
  LucideSend,
} from "lucide-react";
import React from "react";
import { TbSpeakerphone } from "react-icons/tb";
import { CampaignCard } from "@/features/campaign/components";
import Link from "next/link";
import { dashboardStats, getAllUserScheduledCast } from "@/helpers/read-db";
import CastCard from "@/features/cast/components/CastCard";
import ScheduleCast from "@/features/cast/components/ScheduleCast";

export default async function Dashboard() {
  const session = await auth();
  if (!session || !session.user || !session.user.id) redirect("/login");

  const { name, id } = session.user;

  const casts = await getAllUserScheduledCast(id);
  const stats = await dashboardStats(id);

  return (
    <main className="text-black p-4 flex items-start justify-start flex-col w-full gap-4">
      <h1 className="font-semibold text-2xl h-fit normal-case">
        Welcome, {name}
      </h1>

      <section className="w-full grid grid-cols-2 gap-4">
        <StatusCard
          Icon={LucideSend}
          value={stats?.publishedCastsCount || 0}
          text="Published casts"
        />
        <StatusCard
          Icon={CalendarClock}
          value={stats?.scheduledCastsCount || 0}
          text="Scheduled casts"
        />
        <StatusCard
          Icon={TbSpeakerphone}
          value={stats?.campaignCount || 0}
          text="Active campaign"
        />
        <StatusCard
          Icon={Archive}
          value={stats?.draftCastsCount || 0}
          text="Drafts"
        />
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

      <ScheduleCastNow />

      <section className="w-full bg-white rounded-3xl flex items-center justify-center flex-col shadow-xl shadow-black/[0.05]">
        <div className="w-full p-4 pb-0 flex items-center justify-between">
          <h3 className="font-medium text-xl capitalize text-left">
            Scheduled casts
          </h3>
          <Link href={"/casts"}>
            <ButtonAction
              btnType="badge"
              className="w-fit flex items-center justify-center gap-2"
            >
              <p className="text-nowrap capitalize">See all</p>
              <ArrowUp className="size-4 rotate-45" />
            </ButtonAction>
          </Link>
        </div>

        {!casts && (
          <div className="p-4 w-full">
            <div className="p-8 border border-neutral-200 rounded-3xl flex items-center justify-center gap-4 flex-col w-full">
              <div className="border border-neutral-100 p-4 rounded-full">
                <CircleAlert className="size-8" />
              </div>
              <p className="text-center text-neutral-700">
                {"Something went wrong"}
              </p>
            </div>
          </div>
        )}

        {casts && casts.length === 0 && (
          <div className="p-4 w-full">
            <div className="p-8 border border-neutral-200 rounded-3xl flex items-center justify-center gap-4 flex-col w-full">
              <div className="border border-neutral-100 p-4 rounded-full">
                <LucideSend className="size-8" />
              </div>
              <p className="text-center text-neutral-700">
                {"You don't have any cast recorded yet"}
              </p>
              <ScheduleCast />
            </div>
          </div>
        )}
        {casts && casts.length > 0 && (
          <div className="w-full grid grid-cols-1 divide-y divide-neutral-100">
            {casts?.map((cast, i) => {
              return <CastCard key={i} {...cast} />;
            })}
          </div>
        )}
      </section>
    </main>
  );
}
