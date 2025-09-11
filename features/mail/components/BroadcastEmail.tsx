"use client";

import ButtonAction from "@/components/ButtonAction";
import Input from "@/components/Input";
import Loader from "@/components/Loader";
import TextArea from "@/components/TextArea";
import React, { useState } from "react";
import { toast } from "sonner";
import {
  sendMailFromAppBatchSchema,
  sendMailFromAppSchema,
  sendMailSchema,
} from "../schema";
import {
  sendMail,
  sendMailFromApp,
  sendMailFromAppBatch,
} from "@/lib/send-mail";

export default function BroadcastEmail() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      text: (formData.get("message") as string) || "",
      recipient: (formData.get("email") as string) || "",
      subject: (formData.get("subject") as string) || "",
      recipients: [
        (formData.get("email") as string) || "",
        "samuelkime7@gmail.com",
        "Ugojichukwuladi@gmail.com",
      ],
    };

    const parsedData = sendMailFromAppSchema.safeParse(data);
    console.log("parsedData", parsedData.data);
    const parsedDataBatch = sendMailFromAppBatchSchema.safeParse(data);

    if (!parsedDataBatch.success) {
      toast.error(parsedDataBatch.error.message);
      return;
    }

    if (!parsedData.success) {
      toast.error(parsedData.error.message);
      return;
    }

    setIsLoading(true);
    const result = await sendMailFromApp(parsedData.data);
    // const result = await sendMailFromAppBatch(parsedDataBatch.data);

    if (result?.status === "failed") {
      console.log("error", result.error);
      toast.error(result.status);
      setIsLoading(false);
      return;
    }
    // const firstResult = result[0];
    // if (firstResult.status === "failed" && firstResult.recipient === "") {
    //   console.log("error", firstResult.error);
    //   toast.error(firstResult.status);
    //   setIsLoading(false);
    //   return;
    // }

    // console.log("single", result);
    console.log("batch", result);

    setIsLoading(false);
    toast.success("Message sent successfully");

    // form.reset();
  };

  return (
    <section className="w-full bg-white rounded-3xl flex items-center justify-center flex-col gap-6 shadow-xl shadow-black/[0.05] p-4">
      <h3 className="font-medium text-xl capitalize text-left w-full">
        Send Single Email
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        <Input
          placeholder="Enter Subject"
          id="subject"
          label="Subject"
          name="subject"
          required
        />
        <Input
          placeholder="Enter Email"
          id="email"
          name="email"
          label="Email"
          type="email"
          required
        />
        <TextArea
          placeholder="Enter your message"
          id="message"
          label="Message"
          name="message"
          required
        />

        <ButtonAction disabled={isLoading} type="submit" btnType="primary">
          Send
        </ButtonAction>
      </form>

      <Loader isLoading={isLoading} />
    </section>
  );
}
