import ButtonAction from "@/components/ButtonAction";
import GrantOrRevokeAdmin from "@/features/account/components/GrantOrRevokeAdmin";
import { getAllAdmins } from "@/helpers/read-db";
import { shortenAddress } from "@/utils";
import React from "react";

export default async function AccessControl() {
  const admins = await getAllAdmins();

  return (
    <main className="text-black p-4 flex items-start justify-start flex-col w-full gap-4">
      <section className="w-full bg-white rounded-3xl flex items-center justify-center flex-col shadow-xl shadow-black/[0.05] py-4 gap-4">
        <div className="w-full pb-0 px-4 flex items-center justify-between">
          <h3 className="font-medium text-xl capitalize text-left">
            All Admins
          </h3>
        </div>

        <div className="w-full grid grid-cols-1 gap-4 divide-y divide-neutral-100 space-y-0 border-y border-neutral-100 py-4">
          {admins?.map(({ username, walletAddress }, i) => (
            <div
              key={i}
              className="w-full flex items-center justify-between pt-4 first:pt-0 px-4"
            >
              <div>
                <p>@{username}</p>
                <p className="text-[10px]">{shortenAddress(walletAddress)}</p>
              </div>
              <ButtonAction btnType="badge">Revoke</ButtonAction>
            </div>
          ))}
        </div>
      </section>

      <GrantOrRevokeAdmin />
    </main>
  );
}
