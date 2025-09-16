"use client";

import ButtonAction from "@/components/ButtonAction";
import React, { useEffect, useState, useTransition } from "react";
import { checkSignerStatus, createAndRegisterSigner } from "../actions";
import { toast } from "sonner";
import Loader from "@/components/Loader";
import RequestSignatureQrModal from "./RequestSignatureQrModal";

type RequestSignatureProps = {
  id: string;
};

export default function RequestSignature({ id }: RequestSignatureProps) {
  const [initiateSignerErr, setInitiateSignerErr] = useState<string>();
  const [deeplinkUrl, setDeeplinkUrl] = useState<string>();
  const [signerUuid, setSignerUuid] = useState<string>();
  const [isPolling, setIsPolling] = useState(false);

  const [isPending, startTransition] = useTransition();
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  const handleRequestSigner = () => {
    startTransition(async () => {
      const res = await createAndRegisterSigner();
      if ("error" in res) {
        toast.error(res.error);
        setInitiateSignerErr(res.error);
        return;
      }

      setDeeplinkUrl(res.signerApprovalUrl);
      setSignerUuid(res.signerUuid);
      setIsQrModalOpen(true);
      setIsPolling(true);
      toast.success(res.success);
    });
  };

  useEffect(() => {
    if (!signerUuid || !isPolling) return;

    const id = setInterval(async () => {
      const res = await checkSignerStatus(signerUuid);

      if (res.error) {
        console.log(res.error);
        return;
      }

      const { status } = res;
      if (status === "revoked") {
        clearInterval(id);
        setIsPolling(false);
        setIsQrModalOpen(false);
        toast.error("Signer has been revoked");
        return;
      }

      if (status === "approved") {
        setIsPolling(false);
        toast.success("Signer has been approved");
        setIsQrModalOpen(false);
        clearInterval(id);
        return;
      }
    }, 2000);

    return () => {
      clearInterval(id);
    };
  }, [isPolling, signerUuid]);

  return (
    <section className="w-full bg-white rounded-3xl flex items-center justify-center flex-col gap-8 shadow-xl shadow-black/[0.05] p-4">
      <div className="flex flex-col items-center justify-center gap-8 p-4">
        {initiateSignerErr && <p>{initiateSignerErr}</p>}

        <ButtonAction
          btnType="primary"
          disabled={isPending}
          onClick={() => handleRequestSigner()}
        >
          {isPending ? "Fetching link..." : "Request Signature"}
        </ButtonAction>
      </div>

      <Loader isLoading={isPending} />
      <RequestSignatureQrModal
        deeplinkUrl={deeplinkUrl}
        isModalOpen={isQrModalOpen}
        setIsModalOpen={setIsQrModalOpen}
      />
    </section>
  );
}
