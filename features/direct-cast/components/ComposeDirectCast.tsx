"use client";

import ButtonAction from "@/components/ButtonAction";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import React, { useState } from "react";
import { toast } from "sonner";
import { directCastBodySchema } from "../schemas";
import Loader from "@/components/Loader";
/**
 * ateh:1083128
 * wahala:1175517
 * samuelkime:1148663
 */
export default function ComposeDirectCast() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      message: (formData.get("message") as string) || "",
      recipientFid: Number(formData.get("recipientFid")) || 0,
    };

    const parsedData = directCastBodySchema.safeParse(data);

    if (!parsedData.success) {
      toast.error(parsedData.error.message);
      return;
    }

    setIsLoading(true);
    const res = await fetch("/api/broadcast", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parsedData.data),
    });

    if (!res.ok) {
      const error = await res.json();

      setIsLoading(false);
      toast.error(error.error);
      return;
    }

    const result = await res.json();

    setIsLoading(false);
    toast.success("Message sent successfully");

    form.reset();
  };

  return (
    <section className="w-full bg-white rounded-3xl flex items-center justify-center flex-col gap-4 shadow-xl shadow-black/[0.05] p-4">
      <h3 className="font-medium text-xl capitalize text-left w-full">
        Send Direct Cast(from @samuelkime)
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        <TextArea
          placeholder="Enter your message"
          id="message"
          label="Message"
          name="message"
        />
        <Input
          placeholder="Enter recipient FID"
          id="recipientFid"
          name="recipientFid"
          label="Recipient FID"
          type="number"
        />
        <ButtonAction disabled={isLoading} type="submit" btnType="primary">
          Send
        </ButtonAction>
      </form>

      <Loader isLoading={isLoading} />
    </section>
  );
}
