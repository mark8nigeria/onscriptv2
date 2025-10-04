"use client";

import React, { useEffect, useState } from "react";
import ButtonAction from "@/components/ButtonAction";
import Input from "@/components/Input";
import { isAddress } from "viem";
import { toast } from "sonner";
import { useReadContract, useWriteContract } from "wagmi";
import { onscriptUserManagementAbi } from "@/constants/abis";
import { onscriptUserManagementContractAddress } from "@/constants/contractAddresses";
import Loader from "@/components/Loader";
import { makeUserAdmin } from "../actions/makeUserAdmin.action";
import { revokeUserAdmin } from "../actions/revokeUserAdmin.action";
import { useAppSelector } from "@/utils";

export default function GrantOrRevokeAdmin() {
  const { walletAddress } = useAppSelector((state) => state.user);
  const [grantWalletAddress, setGrantWalletAddress] = useState<string>();
  const [revokeWalletAddress, setRevokeWalletAddress] = useState<string>();

  const [isLoading, setIsLoading] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  const {
    data,
    isLoading: isLoadingOwner,
    isError: isErrorOwner,
  } = useReadContract({
    address: onscriptUserManagementContractAddress,
    abi: onscriptUserManagementAbi,
    functionName: "owner",
  });

  const {
    writeContract: writeGrant,
    isPending: isPendingGrant,
    isSuccess: isSuccessGrant,
    isError: isErrorGrant,
    error: grantError,
  } = useWriteContract();
  const {
    writeContract: writeRevoke,
    isPending: isPendingRevoke,
    isSuccess: isSuccessRevoke,
    isError: isErrorRevoke,
    error: revokeError,
  } = useWriteContract();
  const {
    writeContract: makePremiumWrite,
    isPending: isPendingMakePremium,
    isSuccess: isSuccessMakePremium,
    isError: isErrorMakePremium,
    error: makePremiumError,
  } = useWriteContract();

  const handleGrantAdmin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const walletAddress = e.currentTarget.walletAddress.value;

    if (!isAddress(walletAddress)) return toast.error("Invalid wallet address");

    setGrantWalletAddress(walletAddress);
    writeGrant({
      address: onscriptUserManagementContractAddress,
      abi: onscriptUserManagementAbi,
      functionName: "grantAdmin",
      args: [walletAddress],
    });
  };

  const handleRevokeAdmin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const walletAddress = e.currentTarget.walletAddress.value;

    if (!isAddress(walletAddress)) return toast.error("Invalid wallet address");

    setRevokeWalletAddress(walletAddress);
    writeRevoke({
      address: onscriptUserManagementContractAddress,
      abi: onscriptUserManagementAbi,
      functionName: "revokeAdmin",
      args: [walletAddress],
    });
  };

  const handleMakePremium = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const walletAddress = e.currentTarget.walletAddress.value;

    if (!isAddress(walletAddress)) return toast.error("Invalid wallet address");

    makePremiumWrite({
      address: onscriptUserManagementContractAddress,
      abi: onscriptUserManagementAbi,
      functionName: "makeUserPremium",
      args: [walletAddress],
    });
  };

  useEffect(() => {
    async function handleMakeUserAdmin() {
      if (!grantWalletAddress) return;

      if (isSuccessGrant) {
        setIsLoading(true);
        const result = await makeUserAdmin(grantWalletAddress);

        if ("error" in result) {
          toast.error(result.error);
          setIsLoading(false);
          setGrantWalletAddress(undefined);
          return;
        }

        setGrantWalletAddress(undefined);
        setIsLoading(false);
        toast.success(result.success);
      }
    }

    handleMakeUserAdmin();
  }, [isSuccessGrant, grantWalletAddress]);

  useEffect(() => {
    async function handleRevokeUserAdmin() {
      if (!revokeWalletAddress) return;

      if (isSuccessRevoke) {
        setIsLoading(true);
        const result = await revokeUserAdmin(revokeWalletAddress);

        if ("error" in result) {
          toast.error(result.error);
          setIsLoading(false);
          setRevokeWalletAddress(undefined);
          return;
        }

        setRevokeWalletAddress(undefined);
        setIsLoading(false);
        toast.success(result.success);
      }
    }

    handleRevokeUserAdmin();
  }, [isSuccessRevoke, revokeWalletAddress]);

  useEffect(() => {
    if (isSuccessMakePremium) {
      setRevokeWalletAddress(undefined);
      toast.success("User have been made premium");
    }
  }, [isSuccessMakePremium]);

  useEffect(() => {
    if (isErrorGrant) {
      setGrantWalletAddress(undefined);
      toast.error(grantError?.message || "Something went wrong");
    }
  }, [isErrorGrant]);

  useEffect(() => {
    if (isErrorRevoke) {
      setRevokeWalletAddress(undefined);
      toast.error(revokeError?.message || "Something went wrong");
    }
  }, [isErrorRevoke]);

  useEffect(() => {
    if (isErrorMakePremium) {
      setMakePremiumAddress(undefined);
      toast.error(makePremiumError?.message || "Something went wrong");
    }
  }, [isErrorMakePremium]);

  useEffect(() => {
    if (data && data === walletAddress) {
      setIsOwner(true);
    }
  }, [data, walletAddress]);

  useEffect(() => {
    if (isErrorOwner) {
      toast.error("Failed to get owner");
    }
  }, [isErrorOwner]);

  return (
    <>
      <section className="w-full bg-white rounded-3xl flex items-center justify-center flex-col shadow-xl shadow-black/[0.05] p-4 gap-4">
        <div className="w-full pb-0 flex items-center justify-between">
          <h3 className="font-medium text-xl capitalize text-left">
            Make user premium
          </h3>
        </div>

        <form
          onSubmit={handleMakePremium}
          className="w-full grid grid-cols-1 gap-4"
        >
          <Input
            name="walletAddress"
            label="Wallet address"
            placeholder="Enter user wallet address"
            required
          />
          <ButtonAction btnType="primary">Proceed</ButtonAction>
        </form>
      </section>
      {isOwner && (
        <>
          <section className="w-full bg-white rounded-3xl flex items-center justify-center flex-col shadow-xl shadow-black/[0.05] p-4 gap-4">
            <div className="w-full pb-0 flex items-center justify-between">
              <h3 className="font-medium text-xl capitalize text-left">
                Grant Admin Access
              </h3>
            </div>

            <form
              onSubmit={handleGrantAdmin}
              className="w-full grid grid-cols-1 gap-4"
            >
              <Input
                name="walletAddress"
                label="Wallet address"
                placeholder="Enter user wallet address"
                required
              />
              <ButtonAction btnType="primary">Grant Access</ButtonAction>
            </form>
          </section>
          <section className="w-full bg-white rounded-3xl flex items-center justify-center flex-col shadow-xl shadow-black/[0.05] p-4 gap-4">
            <div className="w-full pb-0 flex items-center justify-between">
              <h3 className="font-medium text-xl capitalize text-left">
                Revoke Admin Access
              </h3>
            </div>

            <form
              onSubmit={handleRevokeAdmin}
              className="w-full grid grid-cols-1 gap-4"
            >
              <Input
                name="walletAddress"
                label="Wallet address"
                placeholder="Enter user wallet address"
                required
              />
              <ButtonAction btnType="primary">Revoke Access</ButtonAction>
            </form>
          </section>
        </>
      )}

      <Loader
        isLoading={
          isLoading ||
          isLoadingOwner ||
          isPendingMakePremium ||
          isPendingGrant ||
          isPendingRevoke
        }
      />
    </>
  );
}
