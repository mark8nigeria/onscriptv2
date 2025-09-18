"use client";

import ButtonAction from "@/components/ButtonAction";
import Loader from "@/components/Loader";
import { useComeOnchain, useIsAddressOnChainAndPremium } from "@/utils";
import DeleteOnChainAccount from "@/features/account/components/DeleteOnChainAccount";

type OnchainAccountProps = {
  fid: number;
  address: string;
};

export default function OnchainAccount({ fid, address }: OnchainAccountProps) {
  const { isUserOnChain, isError, isLoading } = useIsAddressOnChainAndPremium({
    address,
  });
  const { comeOnchain, isPending } = useComeOnchain({ fid, address });

  return (
    <>
      <div className="space-y-8">
        {isError && <p>Error</p>}
        <div>
          {!isLoading && !isError && (
            <>
              {isUserOnChain ? (
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

        <DeleteOnChainAccount address={address} />
      </div>
      <Loader isLoading={isPending || isLoading} />
    </>
  );
}
