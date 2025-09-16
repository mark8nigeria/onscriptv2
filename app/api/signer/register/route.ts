import { auth } from "@/auth";
import { getUserById } from "@/helpers/read-db";
import db from "@/lib/db";
import { NextResponse } from "next/server";
import { privateKeyToAccount } from "viem/accounts";

export async function POST(request: Request) {
  const SIGNED_KEY_REQUEST_VALIDATOR_EIP_712_DOMAIN = {
    name: "Farcaster SignedKeyRequestValidator",
    version: "1",
    chainId: 10,
    verifyingContract: "0x00000000fc700472606ed4fa22623acf62c60553",
  } as const;

  const SIGNED_KEY_REQUEST_TYPE = [
    { name: "requestFid", type: "uint256" },
    { name: "key", type: "bytes" },
    { name: "deadline", type: "uint256" },
  ] as const;

  try {
    const { id: userId, uuid, publicKey } = await request.json();

    if (!userId || !uuid || !publicKey) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    const session = await auth();
    if (
      !session ||
      !session.user ||
      !session.user.id ||
      session.user.id !== userId
    )
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = session.user;
    const user = await getUserById(id);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (user.isUuidApprove) {
      return NextResponse.json(
        { error: "User already has a signer" },
        { status: 400 },
      );
    }

    if (user.signerUuid !== uuid || user.signerPublicKey !== publicKey) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    const { signerPublicKey, signerUuid } = user;

    if (!signerPublicKey || !signerUuid) {
      return NextResponse.json(
        { error: "No public key or uuid found for user" },
        { status: 404 },
      );
    }

    const { APP_FID, ACCOUNT_PRIVATE_KEY, NEYNAR_API_URL, NEYNAR_API_KEY } =
      process.env;

    if (
      !APP_FID ||
      !ACCOUNT_PRIVATE_KEY ||
      !NEYNAR_API_URL ||
      !NEYNAR_API_KEY
    ) {
      return NextResponse.json(
        { error: "VARIABLES NOT FOUND" },
        { status: 400, statusText: "VARIABLES NOT FOUND" },
      );
    }

    const account = privateKeyToAccount(`0x${ACCOUNT_PRIVATE_KEY}`); // Your app's mnemonic

    const deadline = Math.floor(Date.now() / 1000) + 86400; // signature is valid for 1 day
    const signature = await account.signTypedData({
      domain: SIGNED_KEY_REQUEST_VALIDATOR_EIP_712_DOMAIN,
      types: {
        SignedKeyRequest: SIGNED_KEY_REQUEST_TYPE,
      },
      primaryType: "SignedKeyRequest",
      message: {
        requestFid: BigInt(APP_FID),
        key: `0x${signerPublicKey}`,
        deadline: BigInt(deadline),
      },
    });

    const url = `${NEYNAR_API_URL}/v2/farcaster/signer/signed_key/`;
    const options = {
      method: "POST",
      headers: {
        "x-api-key": NEYNAR_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        signer_uuid: signerUuid,
        signature,
        app_fid: parseInt(APP_FID),
        deadline,
        redirect_url: "<string>",
        sponsor: {
          // fid: 3,
          // signature: "<string>",
          sponsored_by_neynar: true,
        },
      }),
    };

    const response = await fetch(url, options);

    if (!response.ok) {
      console.log("error", await response.json());
      return NextResponse.json(
        { error: "Something went wrong" },
        { status: 400 },
      );
    }

    const { signer_approval_url } = await response.json();

    if (!signer_approval_url) {
      return NextResponse.json(
        { error: "Something went wrong" },
        { status: 500 },
      );
    }

    await db.user.update({
      where: { id },
      data: {
        signerRegDeadline: new Date(deadline * 1000),
        signerApprovalUrl: signer_approval_url,
      },
    });

    return NextResponse.json({ signer_approval_url }, { status: 200 });
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
