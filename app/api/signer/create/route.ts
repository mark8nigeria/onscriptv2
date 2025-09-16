import { auth } from "@/auth";
import { getUserById } from "@/helpers/read-db";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await auth();
    if (!session || !session.user || !session.user.id)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = session.user;
    const user = await getUserById(id);

    const { NEYNAR_API_URL, NEYNAR_API_KEY } = process.env;

    if (!NEYNAR_API_URL || !NEYNAR_API_KEY) {
      return NextResponse.json(
        { error: "variables is not set" },
        { status: 400 },
      );
    }

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const { signerRegDeadline, signerUuid, isUuidApprove, signerApprovalUrl } =
      user;

    if (isUuidApprove) {
      return NextResponse.json(
        { error: "User already has a signer" },
        { status: 400 },
      );
    }

    if (
      signerUuid &&
      signerRegDeadline &&
      signerApprovalUrl &&
      signerRegDeadline.getTime() > Date.now()
    ) {
      return NextResponse.json(
        { error: "Signer registration deadline has not passed" },
        { status: 400 },
      );
    }

    if (signerUuid && !signerRegDeadline) {
      return NextResponse.json(
        { error: "Signer already has a signer that has not been approved" },
        { status: 400 },
      );
    }

    const url = `${NEYNAR_API_URL}/v2/farcaster/signer/`;
    const options = {
      method: "POST",
      headers: { "x-api-key": NEYNAR_API_KEY },
    };

    const response = await fetch(url, options);

    if (!response.ok) {
      console.log("error", await response.json());

      return NextResponse.json(
        { error: "Something went wrong" },
        { status: 500 },
      );
    }

    const data = await response.json();
    const { signer_uuid, public_key } = data;

    if (!signer_uuid || !public_key) {
      return NextResponse.json(
        { error: "Something went wrong" },
        { status: 500 },
      );
    }

    await db.user.update({
      where: { id },
      data: {
        signerUuid: signer_uuid,
        signerPublicKey: public_key,
        isUuidApprove: false,
        signerRegDeadline: null,
      },
    });

    return NextResponse.json(
      { message: "Signer created", signer_uuid, public_key },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      { status: 400 },
    );
  }
}
