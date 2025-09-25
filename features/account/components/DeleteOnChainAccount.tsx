"use client";

import ButtonAction from "@/components/ButtonAction";
import Loader from "@/components/Loader";
import { onscriptUserManagementAbi } from "@/constants/abis";
import { onscriptUserManagementContractAddress } from "@/constants/contractAddresses";
import { setDeletedOnChainDetails } from "@/redux/user.slice";
import { useAppDispatch, useAppSelector } from "@/utils";
import React, { useEffect } from "react";
import { toast } from "sonner";
import { useWriteContract } from "wagmi";

export default function DeleteOnChainAccount() {
  const { isError, errorStateMent } = useAppSelector((state) => state.user);

  const { writeContract, isPending, isSuccess } = useWriteContract();
  const dispatch = useAppDispatch();

  const deleteAccount = () => {
    if (isError) {
      toast.error(errorStateMent);
      return;
    }
    writeContract({
      address: onscriptUserManagementContractAddress,
      abi: onscriptUserManagementAbi,
      functionName: "deleteUser",
    });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Your account has been deleted");
      dispatch(setDeletedOnChainDetails());
    }
  }, []);

  return (
    <div>
      <ButtonAction btnType="primary" onClick={deleteAccount}>
        Delete account
      </ButtonAction>
      <Loader isLoading={isPending} />
    </div>
  );
}
