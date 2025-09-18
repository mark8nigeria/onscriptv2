import React from "react";
import { RequestSignature } from "@/features/signer/components";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import AccountDetails from "@/features/account/components/AccountDetails";
import { getUserById } from "@/helpers/read-db";
import Link from "next/link";
import ButtonAction from "@/components/ButtonAction";

export default async function AccountPage() {
  const session = await auth();
  if (!session || !session.user || !session.user.id) redirect("/login");

  const { id } = session.user;
  const user = await getUserById(id);

  if (!user) {
    return (
      <main className="text-black p-4">
        <h1 className="text-black">User not found</h1>
      </main>
    );
  }

  const { fid, isPremium, username, pfpUrl, role } = user;

  return (
    <main className="text-black p-4 flex items-start justify-start flex-col w-full gap-4">
      <div className="w-full flex items-center justify-between">
        <h1 className="font-semibold text-2xl h-fit capitalize">My account</h1>
        {role === "ADMIN" && (
          <div>
            <Link href={"/admin/dashboard"}>
              <ButtonAction btnType="primary" className="w-fit">
                Admin Panel
              </ButtonAction>
            </Link>
          </div>
        )}
      </div>

      <AccountDetails
        name={username}
        image={pfpUrl}
        isPremium={isPremium}
        fid={fid}
        role={role}
        address={user.walletAddress}
      />

      <RequestSignature />
    </main>
  );
}
