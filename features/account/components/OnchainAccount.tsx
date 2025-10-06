"use client";

import ButtonAction from "@/components/ButtonAction";
import Loader from "@/components/Loader";
import { useAppSelector, useComeOnchain } from "@/utils";

export default function OnchainAccount() {
  const { isUserOnChain, isError } = useAppSelector((state) => state.user);
  const { comeOnchain, isPending } = useComeOnchain();

  return (
    <>
      <div className="space-y-8">
        {isError && <p>Error</p>}
        <div>
          {!isError &&
            (isUserOnChain ? (
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
            ))}
        </div>
      </div>
      <Loader isLoading={isPending} />
    </>
  );
}
