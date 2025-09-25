import { auth } from "@/auth";
import { getUserById } from "@/helpers/read-db";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const session = await auth();
    if (!session || !session.user || !session.user.id)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const { id } = session.user;

    const { searchParams } = new URL(request.url);
    const uuid = searchParams.get("uuid");
    if (!uuid) {
      return NextResponse.json({ error: "uuid is required" }, { status: 400 });
    }

    const user = await getUserById(id);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (user.signerUuid !== uuid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { NEYNAR_API_URL, NEYNAR_API_KEY } = process.env;

    if (!NEYNAR_API_URL || !NEYNAR_API_KEY) {
      return NextResponse.json(
        { error: "variables is not set" },
        { status: 400 },
      );
    }

    const url = `${NEYNAR_API_URL}/v2/farcaster/signer?signer_uuid=${uuid}`;
    const options = {
      method: "GET",
      headers: { "x-api-key": NEYNAR_API_KEY },
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      return NextResponse.json(
        { error: "Error confirming signer" },
        { status: 500 },
      );
    }

    const { status } = await response.json();

    if (status === "approved") {
      await db.user.update({
        where: {
          id,
        },
        data: {
          isUuidApprove: true,
          signerRegDeadline: null,
          signerApprovalUrl: null,
        },
      });
    }

    return NextResponse.json({ status }, { status: 200 });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      { status: 500 },
    );
  }
}
