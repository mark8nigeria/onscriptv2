"use server";

import { auth } from "@/auth";
import { getUserById } from "@/helpers/read-db";
import db from "@/lib/db";
import { createSignerReturn } from "../schema";
import { privateKeyToAccount } from "viem/accounts";
import { publicClient } from "@/client";
import { onscriptUserManagementContractAddress } from "@/constants/contractAddresses";
import { onscriptUserManagementAbi } from "@/constants/abis";

type CreateSignerReturn = Promise<
  | {
      error: string;
    }
  | {
      success: string;
      signerUuid: string;
      signerApprovalUrl: string;
    }
>;

export const createAndRegisterSigner = async (): CreateSignerReturn => {
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
    const session = await auth();
    if (!session || !session.user || !session.user.id)
      return { error: "Unauthorized" };

    const { id } = session.user;
    const user = await getUserById(id);

    const { APP_FID, ACCOUNT_PRIVATE_KEY, NEYNAR_API_URL, NEYNAR_API_KEY } =
      process.env;

    if (
      !APP_FID ||
      !ACCOUNT_PRIVATE_KEY ||
      !NEYNAR_API_URL ||
      !NEYNAR_API_KEY
    ) {
      return { error: "VARIABLES NOT FOUND" };
    }

    if (!user) {
      return { error: "User not found" };
    }

    const isUserPremium = await publicClient.readContract({
      address: onscriptUserManagementContractAddress,
      abi: onscriptUserManagementAbi,
      functionName: "getIsUserPremium",
      args: [user.walletAddress],
    });

    if (typeof isUserPremium !== "boolean") {
      return { error: "Something went wrong" };
    }
    if (!isUserPremium) {
      return {
        error: "Only premium users can create a signer",
      };
    }

    const {
      signerRegDeadline,
      signerUuid: userSignerUuid,
      isUuidApprove,
      signerApprovalUrl,
    } = user;

    if (isUuidApprove) {
      return { error: "User already has a signer" };
    }

    if (
      userSignerUuid &&
      signerRegDeadline &&
      signerApprovalUrl &&
      signerRegDeadline.getTime() > Date.now()
    ) {
      return {
        success: "Approve signer",
        signerUuid: userSignerUuid,
        signerApprovalUrl,
      };
    }

    const createSignerUrl = `${NEYNAR_API_URL}/v2/farcaster/signer/`;
    const createSignerOptions = {
      method: "POST",
      headers: { "x-api-key": NEYNAR_API_KEY },
    };

    const createSignerResponse = await fetch(
      createSignerUrl,
      createSignerOptions,
    );

    if (!createSignerResponse.ok) {
      console.log("error", await createSignerResponse.json());

      return { error: "Something went wrong in creating signer" };
    }

    const data = await createSignerResponse.json();
    const createSignerParsedData = createSignerReturn.safeParse(data);

    if (!createSignerParsedData.success) {
      return { error: "Something went wrong in creating signer" };
    }

    const { signer_uuid: signerUuid, public_key: signerPublicKey } =
      createSignerParsedData.data;

    const account = privateKeyToAccount(`0x${ACCOUNT_PRIVATE_KEY}`); // private linked to account that'll be displayed when signing

    const deadline = Math.floor(Date.now() / 1000) + 86400; // signature is valid for 1 day
    const signature = await account.signTypedData({
      domain: SIGNED_KEY_REQUEST_VALIDATOR_EIP_712_DOMAIN,
      types: {
        SignedKeyRequest: SIGNED_KEY_REQUEST_TYPE,
      },
      primaryType: "SignedKeyRequest",
      message: {
        requestFid: BigInt(APP_FID),
        key: signerPublicKey as `0x${string}`,
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
      return { error: "Something went wrong in registering signer" };
    }

    const { signer_approval_url } = await response.json();

    if (!signer_approval_url || typeof signer_approval_url !== "string") {
      return { error: "Something went wrong in getting approval url" };
    }

    await db.user.update({
      where: { id },
      data: {
        signerUuid,
        signerPublicKey,
        isUuidApprove: false,
        signerRegDeadline: new Date(deadline * 1000),
        signerApprovalUrl: signer_approval_url,
      },
    });

    return {
      success: "Approve signer",
      signerUuid: signerUuid,
      signerApprovalUrl: signer_approval_url,
    };
  } catch (error) {
    console.log(error);

    return {
      error: "Something went wrong",
    };
  }
};
