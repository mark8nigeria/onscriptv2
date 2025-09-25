"use client";
import { useState, useCallback } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { useAuthenticate } from "@coinbase/onchainkit/minikit";
import crypto from "crypto";
import { signIn } from "next-auth/react";
import { defaultRedirectUrl } from "@/data/routes.data";
import { DOMAIN } from "@/constants";

export default function useLogin() {
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState<string>();

  const { address } = useAccount();
  const router = useRouter();

  const generateNonce = useCallback((length = 32) => {
    const genNonce = crypto.randomBytes(length).toString("hex");
    return genNonce;
  }, []);

  const mockSignIn = useCallback(() => {
    if (!address) return;
    const nonce = generateNonce();
    const mockSignature = {
      message:
        "267de4cf32ec.ngrok-free.app wants you to sign in w…3:55:15.554Z\nResources:\n- farcaster://fid/1148663",
      signature:
        "0x356c632d858cdaac2b608320dc0fd7ba0c1f9ad043725166…e451e3a56e939da1c8c161f098e20e463a567ae9ea3a8451b",
      nonce,
      DOMAIN,
    };

    const credentials = {
      message: mockSignature.message,
      signature: mockSignature.signature,
      nonce,
      address,
    };
    signIn("credentials", { ...credentials, redirectTo: defaultRedirectUrl });
  }, [address, generateNonce]);

  const { signIn: signInViaFarcaster } = useAuthenticate();

  const handleSignIn = async () => {
    if (!address || isFetching) return;
    setIsFetching(true);
    setIsError(undefined);

    // // remove this in live
    // const mockUserData = {
    //   address: "0x3097139c11366006F73Fd357c1F2489d8CF3B96A",
    //   fid: 1175517,
    //   id: "cme6dktp90000ky044dw45lo5",
    //   image:
    //     "https://tba-mobile.mypinata.cloud/ipfs/QmeMpPVcM5Ex4EKuih8oUBMxzhbBNA2MBxQFL54KAL5JDs?pinataGatewayToken=3nq0UVhtd3rYmgYDdb1I9qv7rHsw-_DzwdWkZPRQ-QW1avFI9dCS8knaSfq_R5_q",
    //   name: "wahaladev.base.eth",
    //   nonce:
    //     "0x356c632d858cdaac2b608320dc0fd7ba0c1f9ad043725166e451e3a56e939da1c8c161f098e20e463a567ae9ea3a8451b",
    //   signature:
    //     "0x356c632d858cdaac2b608320dc0fd7ba0c1f9ad043725166e451e3a56e939da1c8c161f098e20e463a567ae9ea3a8451b",
    // };
    // await signIn("credentials", {
    //   ...mockUserData,
    //   redirectTo: defaultRedirectUrl,
    // });

    try {
      const response = await fetch(`/api/user?address=${address}`);
      if (response.ok) {
        const nonce = generateNonce();

        // const loginResponse = await signIn("credentials", {
        //   ...{
        //     message: "this is a random message",
        //     signature: "this is a random signature",
        //     nonce,
        //     address,
        //   },
        //   redirectTo: defaultRedirectUrl,
        // });

        const result = await signInViaFarcaster({ nonce });

        if (result) {
          const { message, signature } = result;

          const fidMatch = result.message.match(/farcaster:\/\/fid\/(\d+)/);
          const fid = fidMatch ? Number(fidMatch[1]) : null;

          if (!fid) {
            setIsError("FID not found in message");
            setIsFetching(false);
            return;
          }

          const credentials = { message, signature, nonce, address };
          const loginResponse = await signIn("credentials", {
            ...credentials,
            redirectTo: defaultRedirectUrl,
          });

          if (loginResponse && loginResponse.error) {
            console.log("login error", loginResponse.error);

            setIsError(loginResponse.error);
            setIsFetching(false);
            return;
          }

          console.log("user logged in");
          router.push("/dashboard");
          setIsFetching(false);
          return;
        } else {
          setIsError("Error signing in via farcaster");
          setIsFetching(false);
          return;
        }
      }

      if (response.status !== 404) {
        setIsError(response.statusText);
        setIsFetching(false);
        return;
      }

      // Now we're sure it's a new user
      const nonce = generateNonce();
      const result = await signInViaFarcaster({ nonce });

      if (result) {
        const { message, signature } = result;
        console.log({ message, signature });

        const fidMatch = result.message.match(/farcaster:\/\/fid\/(\d+)/);
        const fid = fidMatch ? Number(fidMatch[1]) : null;

        if (!fid) {
          console.error("FID not found in message");
          return;
        }

        const response = await fetch(`/api/user`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fid, address }),
        });

        if (!response.ok) {
          setIsError(response.statusText);
          return;
        }

        const { user } = await response.json();
        const credentials = { message, signature, nonce, address };
        await signIn("credentials", {
          ...credentials,
          redirectTo: defaultRedirectUrl,
        });

        console.log("/dashboard");
        router.push("/dashboard");
      } else {
        setIsError("Error signing in via farcaster");
        setIsFetching(false);
        return;
      }
    } catch {
      setIsError("Something went wrong");
      setIsFetching(false);
      return;
    }
  };

  return {
    isFetching,
    isError,
    handleSignIn,
    mockSignIn,
  };
}
