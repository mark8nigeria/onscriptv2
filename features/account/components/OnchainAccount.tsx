"use client";

import ButtonAction from "@/components/ButtonAction";
import Loader from "@/components/Loader";
import { onscriptUserManagementAbi } from "@/constants/abis";
import { onscriptUserManagementAddressMainnet } from "@/constants/contractAddresses";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { useAccount, useReadContract } from "wagmi";
import { useWriteContract } from "wagmi";

type OnchainAccountProps = {
  fid: number;
};

export default function OnchainAccount({ fid }: OnchainAccountProps) {
  const [isUserDataOnChian, setIsUserDataOnChian] = useState(false);
  const { address } = useAccount();
  const { data, isLoading, isError } = useReadContract({
    address: onscriptUserManagementAddressMainnet,
    abi: onscriptUserManagementAbi,
    functionName: "getUserFid",
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
      address: onscriptUserManagementAddressMainnet,
      abi: onscriptUserManagementAbi,
      functionName: "registerUser",
      args: [fid],
    });
  };

  useEffect(() => {
    if (typeof data === "bigint") {
      setIsUserDataOnChian(data > BigInt(0));
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
