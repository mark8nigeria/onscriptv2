"use client";

import ButtonAction from "@/components/ButtonAction";
import Input from "@/components/Input";
import Loader from "@/components/Loader";
import TextArea from "@/components/TextArea";
import React, { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
import { broadCastToCinematicStreakSchema } from "../schema";
import { broadcastToCinematicStreak } from "../action/broadcastToCinematicStreak.action";
import BroadcastResultsModal from "./BroadcastResultsModal";
import { MailResult } from "@/lib/send-mail";

export default function BroadcastEmailToCinematicStreak() {
  const [isPending, startTransition] = useTransition();
  const [isBroadcastModalOpen, setIsBroadcastModalOpen] = useState(false);
  const [text, setText] = useState("Morning spam test");
  const [subject, setSubject] = useState("Gm Gm");
  const [results, setResults] = useState<MailResult[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      text: (formData.get("message") as string) || "",
      subject: (formData.get("subject") as string) || "",
    };

    const parsedData = broadCastToCinematicStreakSchema.safeParse(data);

    if (!parsedData.success) {
      toast.error(parsedData.error.message);
      return;
    }

    setSubject(parsedData.data.subject);
    setText(parsedData.data.text);

    startTransition(async () => {
      const result = await broadcastToCinematicStreak(parsedData.data);

      if ("error" in result) {
        toast.error(result.error);
        return;
      }

      if ("message" in result) {
        // console.log(result);
        toast.success(result.message);
        setResults(result.results);
        setIsBroadcastModalOpen(true);
      }
    });
  };

  useEffect(() => {
    if (!isBroadcastModalOpen) {
      setResults([]);
    }
  }, [isBroadcastModalOpen]);

  return (
    <section className="w-full bg-white rounded-3xl flex items-center justify-center flex-col gap-6 shadow-xl shadow-black/[0.05] p-4">
      <h3 className="font-medium text-xl capitalize text-left w-full">
        Broadcast Email To Cinematic Streak
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        <Input
          placeholder="Enter Subject"
          id="subject"
          label="Subject"
          name="subject"
          required
        />
        <TextArea
          placeholder="Enter your message"
          id="message"
          label="Message"
          name="message"
          required
        />

        <ButtonAction disabled={isPending} type="submit" btnType="primary">
          Broadcast
        </ButtonAction>
      </form>

      <Loader isLoading={isPending} />
      <BroadcastResultsModal
        isModalOpen={isBroadcastModalOpen}
        setIsModalOpen={setIsBroadcastModalOpen}
        text={text}
        subject={subject}
        results={results}
      />
    </section>
  );
}
