"use client";

import { useEffect, useState, type ReactNode } from "react";
import { base } from "wagmi/chains";
import { MiniKitProvider } from "@coinbase/onchainkit/minikit";
import sdk from "@farcaster/miniapp-sdk";
import { useAccount, WagmiProvider } from "wagmi";
import { wagmiConfig } from "@/config";
import store from "@/redux";
import { Provider } from "react-redux";
import { useAppDispatch, useIsAddressOnChainAndPremium } from "@/utils";
import { SessionProvider, useSession } from "next-auth/react";
import {
  setDbState,
  setError,
  setLoading,
  setOnChainState,
} from "@/redux/user.slice";
import Loader from "./Loader";
import { getUserByIdAction } from "@/features/account/actions/getUserByIdAction";
import { usePathname } from "next/navigation";
import { hideLoaderRoute } from "@/data/routes.data";

export default function Providers(props: { children: ReactNode }) {
  useEffect(() => {
    async function init() {
      await sdk.actions.ready();
    }
    init();
  }, []);

  return (
    <MiniKitProvider
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
      chain={base}
      config={{
        appearance: {
          mode: "auto",
          theme: "mini-app-theme",
          name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
          logo: process.env.NEXT_PUBLIC_ICON_URL,
        },
      }}
    >
      <WagmiProvider config={wagmiConfig}>
        <Provider store={store}>
          <SessionProvider>
            <InitUserInfoProvider>{props.children}</InitUserInfoProvider>
          </SessionProvider>
        </Provider>
      </WagmiProvider>
    </MiniKitProvider>
  );
}

function InitUserInfoProvider({ children }: { children: React.ReactNode }) {
  const [isFetchingUserData, setIsFetchingUserData] = useState(false);
  const { data: session, status } = useSession();
  const id = session?.user.id;
  const [isInitError, setIsInitError] = useState({
    isError: false,
    message: "",
  });
  const [walletAddress, setWalletAddress] = useState("");
  const { address } = useAccount();
  const dispatch = useAppDispatch();
  const { isUserOnChain, isError, isLoading, isUserPremium } =
    useIsAddressOnChainAndPremium({
      address: walletAddress,
    });

  const pathname = usePathname();
  const hideLoader = hideLoaderRoute.includes(pathname);

  useEffect(() => {
    if (status === "loading") return;
    if (status === "unauthenticated") {
      setIsInitError({ isError: true, message: "Unauthenticated" });
      return;
    }

    async function init() {
      if (status === "loading") return;
      if (status === "unauthenticated") {
        setIsInitError({ isError: true, message: "Unauthenticated" });
        return;
      }

      try {
        if (id) {
          setIsFetchingUserData(true);
          const user = await getUserByIdAction(id);

          if (!user) {
            setIsInitError({ isError: true, message: "User does not exist" });
            return;
          }

          setWalletAddress(session.user.address);
          const {
            walletAddress,
            fid,
            isUuidApprove,
            signerUuid,
            username,
            pfpUrl,
            role,
          } = user;
          dispatch(
            setDbState({
              walletAddress,
              id,
              fid,
              isUuidApprove: !!isUuidApprove,
              profilePic: pfpUrl,
              signerUuid,
              username,
              role,
            }),
          );

          setIsFetchingUserData(false);
        }
      } catch {
        setIsFetchingUserData(false);
        setIsInitError({ isError: true, message: "Failed to fetch user" });
      }
    }

    init();
  }, [id, status, dispatch]);

  useEffect(() => {
    if (walletAddress === "" || walletAddress === address) {
      return;
    }

    setIsInitError({
      isError: walletAddress !== address,
      message: "Connected wallet address does not match user wallet address",
    });
  }, [address, walletAddress]);

  useEffect(() => {
    if (isError) {
      setIsInitError({ isError, message: "Failed to fetch user onchain" });
    }
  }, [isError]);

  useEffect(() => {
    if (
      isLoading ||
      status === "loading" ||
      isError ||
      walletAddress === "" ||
      isFetchingUserData
    )
      return;

    dispatch(
      setOnChainState({ isUserOnChain, isUserPremium, isUserPlus: false }),
    );
  }, [
    isUserOnChain,
    isLoading,
    isUserPremium,
    status,
    isError,
    dispatch,
    isFetchingUserData,
    walletAddress,
  ]);

  useEffect(() => {
    dispatch(setError(isInitError));
  }, [isInitError, dispatch]);

  useEffect(() => {
    dispatch(
      setLoading(isLoading || status === "loading" || isFetchingUserData),
    );
  }, [isLoading, status, isFetchingUserData, dispatch]);

  return (
    <>
      <Loader
        isLoading={
          !hideLoader &&
          (isLoading || status === "loading" || isFetchingUserData)
        }
      />
      {children}
    </>
  );
}
