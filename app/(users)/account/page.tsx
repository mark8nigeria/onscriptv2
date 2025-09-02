import React from "react";
// import { RequestSignature } from "@/features/signer/components";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { AccountDetails } from "@/features/account/components";
import { getUserById } from "@/helpers/read-db";

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

  const { fid, isPremium, username, pfpUrl } = user;

  // const mockUserData = {
  //   address: "0x3097139c11366006F73Fd357c1F2489d8CF3B96A",
  //   fid: 1175517,
  //   id: "cme6dktp90000ky044dw45lo5",
  //   image:
  //     "https://tba-mobile.mypinata.cloud/ipfs/QmeMpPVcM5Ex4EKuih8oUBMxzhbBNA2MBxQFL54KAL5JDs?pinataGatewayToken=3nq0UVhtd3rYmgYDdb1I9qv7rHsw-_DzwdWkZPRQ-QW1avFI9dCS8knaSfq_R5_q",
  //   name: "wahaladev.base.eth",
  //   isPremium: false,
  // };

  // const { name, image, isPremium } = mockUserData;

  return (
    <main className="text-black p-4 flex items-start justify-start flex-col w-full gap-4">
      <h1 className="font-semibold text-2xl h-fit capitalize">My account</h1>

      <AccountDetails
        name={username}
        image={pfpUrl}
        isPremium={isPremium}
        fid={fid}
      />
      {/* <RequestSignature id={id} /> */}
    </main>
  );
}
