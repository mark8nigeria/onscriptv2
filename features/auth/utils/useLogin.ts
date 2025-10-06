"use client";
import { useState, useCallback } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { useAuthenticate } from "@coinbase/onchainkit/minikit";
import crypto from "crypto";
import { signIn } from "next-auth/react";
import { defaultRedirectUrl } from "@/data/routes.data";
import { DOMAIN } from "@/constants";
import { StatusAPIResponse } from "@farcaster/auth-client";
import { toast } from "sonner";

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

    try {
      const response = await fetch(`/api/user?address=${address}`);
      if (response.ok) {
        const nonce = generateNonce();

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
          toast.success("User logged in, redirecting to dashboard...");
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
          toast.error("FID not found in message");
          setIsFetching(false);
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
          toast.error(response.statusText);
          setIsFetching(false);
          return;
        }

        const { user } = await response.json();
        const credentials = { message, signature, nonce, address };
        const loginResponse = await signIn("credentials", {
          ...credentials,
          redirectTo: defaultRedirectUrl,
        });

        if (loginResponse && loginResponse.error) {
          console.log("login error", loginResponse.error);
          toast.error(loginResponse.error);

          setIsError(loginResponse.error);
          setIsFetching(false);
          return;
        }

        toast.success("User logged in, redirecting to dashboard...");
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

  const handleBrowserSignIn = async (data: StatusAPIResponse) => {
    if (!address || isFetching || !data) return;
    setIsFetching(true);
    setIsError(undefined);

    try {
      const response = await fetch(`/api/user?address=${address}`);
      if (response.ok) {
        const { message, signature, nonce, fid } = data;
        if (!message || !signature || !nonce) {
          toast.error("Message or signature or nonce is missing");
          setIsError("Message or signature or nonce is missing");
          setIsFetching(false);
          return;
        }

        if (!fid) {
          toast.error("FID not found in message");
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
          toast.error(loginResponse.error);

          setIsError(loginResponse.error);
          setIsFetching(false);
          return;
        }

        toast.success("User logged in, redirecting to dashboard...");
        router.push("/dashboard");
        setIsFetching(false);
        return;
      }

      if (response.status !== 404) {
        setIsError(response.statusText);
        setIsFetching(false);
        return;
      }

      // Now we're sure it's a new user
      const { message, signature, nonce, fid } = data;

      if (!message || !signature || !nonce) {
        toast.error("Message or signature or nonce is missing");
        setIsError("Message or signature or nonce is missing");
        setIsFetching(false);
        return;
      }

      if (!fid) {
        toast.error("FID not found in message");
        setIsError("FID not found in message");
        setIsFetching(false);
        return;
      }

      const createUserResponse = await fetch(`/api/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fid, address }),
      });

      if (!createUserResponse.ok) {
        toast.error(createUserResponse.statusText);
        setIsError(createUserResponse.statusText);
        return;
      }

      const credentials = { message, signature, nonce, address };
      const loginResponse = await signIn("credentials", {
        ...credentials,
        redirectTo: defaultRedirectUrl,
      });

      if (loginResponse && loginResponse.error) {
        console.log("login error", loginResponse.error);
        toast.error(loginResponse.error);

        setIsError(loginResponse.error);
        setIsFetching(false);
        return;
      }

      toast.success("User logged in, redirecting to dashboard...");
      router.push("/dashboard");
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
    handleBrowserSignIn,
  };
}
