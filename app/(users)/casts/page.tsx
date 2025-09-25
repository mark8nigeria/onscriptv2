import React from "react";
import CastCard from "@/features/cast/components/CastCard";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getAllUserCast } from "@/helpers/read-db";
import ScheduleCast from "@/features/cast/components/ScheduleCast";
import { CircleAlert, LucideSend } from "lucide-react";

export default async function Casts() {
  const session = await auth();
  if (!session || !session.user || !session.user.id) redirect("/login");

  const { id } = session.user;

  const casts = await getAllUserCast(id);

  return (
    <main className="text-black p-4 bg-neutral-100 min-h-screen flex items-start justify-start flex-col w-full gap-4">
      <section className="w-full bg-white rounded-3xl flex items-center justify-center flex-col shadow-xl shadow-black/[0.05]">
        <div className="w-full flex items-center justify-between gap-4 p-4">
          <h3 className="font-medium text-xl capitalize text-left w-full">
            All casts
          </h3>
          <ScheduleCast className="px-4" />
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
