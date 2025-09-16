"use client";

import ButtonAction from "@/components/ButtonAction";
import Loader from "@/components/Loader";
import { onscriptUserManagementAbi } from "@/constants/abis";
import {
  onscriptUserManagementAddressMainnet,
  onscriptUserManagementAddressSepolia,
} from "@/constants/contractAddresses";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { useAccount, useReadContract } from "wagmi";
import { useWriteContract } from "wagmi";

type OnchainAccountProps = {
  fid: number;
};

export default function OnchainAccount({ fid }: OnchainAccountProps) {
  const [isUserDataOnChian, setIsUserDataOnChian] = useState(false);
  const { address } = useAccount(); //0x3097139c11366006F73Fd357c1F2489d8CF3B96A
  const { data, isLoading, isError } = useReadContract({
    // address: onscriptUserManagementAddressMainnet,
    address: onscriptUserManagementAddressSepolia,
    abi: onscriptUserManagementAbi,
    functionName: "getIsUserRegistered",
    args: [address],
  });

  const {
    writeContract,
    isPending,
    isSuccess,
    isError: isWriteError,
  } = useWriteContract();

  const comeOnchain = () => {
    writeContract({
      // address: onscriptUserManagementAddressMainnet,
      address: onscriptUserManagementAddressSepolia,
      abi: onscriptUserManagementAbi,
      functionName: "registerUser",
      args: [fid],
    });
  };

  useEffect(() => {
    if (typeof data === "boolean") {
      setIsUserDataOnChian(data);
    }
  }, [data]);

  useEffect(() => {
    if (isSuccess) {
      setIsUserDataOnChian(true);
      toast.success("You're onchain");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isWriteError) {
      toast.error("Something went wrong");
    }
  }, [isWriteError]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      <div>
        {!isLoading && !isError && (
          <>
            {isUserDataOnChian ? (
              <p>You're onchain</p>
            ) : (
              <div className="flex flex-col items-center justify-center gap-2">
                <p>You're not onchain</p>
                <ButtonAction
                  disabled={isPending}
                  onClick={comeOnchain}
                  btnType="primary"
                >
                  {isPending ? <Loader isLoading /> : "Come onchain"}
                </ButtonAction>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
