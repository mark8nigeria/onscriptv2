"use client";

import React, { useState, useTransition } from "react";
import ButtonAction from "@/components/ButtonAction";
import Input from "@/components/Input";
import { JoinCampaignFormDataType, joinCampaignFormSchema } from "../schemas";
import { joinCampaignAction } from "../actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useOpenUrl } from "@coinbase/onchainkit/minikit";

type JoinCampaignFormProps = {
  setJoinedStreak: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function JoinCampaignForm({
  setJoinedStreak,
}: JoinCampaignFormProps) {
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState<string>();
  const router = useRouter();
  const openUrl = useOpenUrl();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data: JoinCampaignFormDataType = {
      email: (formData.get("email") as string) || "",
      twitter: (formData.get("twitter") as string) || "",
      web3_content_experience:
        (formData.get(
          "web3_content_experience",
        ) as JoinCampaignFormDataType["web3_content_experience"]) ?? null,
      content_commitment:
        (formData.get(
          "content_commitment",
        ) as JoinCampaignFormDataType["content_commitment"]) ?? null,
      help_needed: formData.getAll("help_needed").map(String), // always string[]
      story_telling_vibes:
        (formData.get(
          "story_telling_vibes",
        ) as JoinCampaignFormDataType["story_telling_vibes"]) ?? null,
      following_team:
        (formData.get(
          "following_team",
        ) as JoinCampaignFormDataType["following_team"]) ?? null,
    };

    const parsedData = joinCampaignFormSchema.safeParse(data);

    if (!parsedData.success) {
      toast.error(parsedData.error.errors[0].message);
      return;
    }

    startTransition(async () => {
      const res = await joinCampaignAction(parsedData.data);
      if (res.error) {
        toast.error(res.error);
        setIsError(res.error);
      }
      if (res.success) {
        toast.success("Application submitted. Awaiting approval.");
        setIsSuccess(true);
        setJoinedStreak(true);
        router.refresh();
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 gap-4">
      {isError && <p className="text-red-800 text-center">{isError}</p>}
      {isSuccess && (
        <p className="text-green-800 text-center">Form submitted</p>
      )}

      <Input
        name="email"
        required
        placeholder="Enter your email"
        id="email"
        label="Email"
      />
      <Input
        name="twitter"
        placeholder="Enter your handle"
        id="twitter"
        label="X(Twitter) handle"
        required
      />
      <div className="space-y-1">
        <p className="block text-sm font-medium leading-6 text-gray-900">
          Have you worked with Web3 Content Before{" "}
          <span className="text-red-500">*</span>
        </p>
        <Input
          type="radio"
          id="yes"
          label="Yes"
          value={"yes"}
          name="web3_content_experience"
          containerClassName="w-fit flex-row-reverse items-center gap-2"
          className="w-fit"
          labelClassName="font-normal"
          required
          hideRequired
        />
        <Input
          type="radio"
          id="no"
          label="No"
          value={"no"}
          name="web3_content_experience"
          containerClassName="w-fit flex-row-reverse items-center gap-2"
          className="w-fit"
          labelClassName="font-normal"
          required
          hideRequired
        />
        <Input
          type="radio"
          id="kinda"
          label="Kinda"
          value={"kinda"}
          name="web3_content_experience"
          containerClassName="w-fit flex-row-reverse items-center gap-2"
          className="w-fit"
          labelClassName="font-normal"
          required
          hideRequired
        />
      </div>

      <div className="space-y-1">
        <p className="block text-sm font-medium leading-6 text-gray-900">
          Can you commit to creating one piece in 2 weeks{" "}
          <span className="text-red-500">*</span>
        </p>
        <Input
          type="radio"
          id="yes-commitment"
          label="Yes"
          value={"yes"}
          name="content_commitment"
          containerClassName="w-fit flex-row-reverse items-center gap-2"
          className="w-fit"
          labelClassName="font-normal"
          required
          hideRequired
        />
        <Input
          type="radio"
          id="no-commitment"
          label="No"
          value={"no"}
          name="content_commitment"
          containerClassName="w-fit flex-row-reverse items-center gap-2"
          className="w-fit"
          labelClassName="font-normal"
          required
          hideRequired
        />
      </div>

      <div className="space-y-1">
        <p className="block text-sm font-medium leading-6 text-gray-900">
          Do you need any help with gear or editing?
        </p>
        <Input
          type="checkbox"
          id="camera"
          label="Camera"
          value={"camera"}
          name="help_needed"
          containerClassName="w-fit flex-row-reverse items-center gap-2"
          className="w-fit"
          labelClassName="font-normal"
        />
        <Input
          type="checkbox"
          id="sound"
          label="Sound"
          value={"sound"}
          name="help_needed"
          containerClassName="w-fit flex-row-reverse items-center gap-2"
          className="w-fit"
          labelClassName="font-normal"
        />
        <Input
          type="checkbox"
          id="editing"
          label="Editing"
          value={"editing"}
          name="help_needed"
          containerClassName="w-fit flex-row-reverse items-center gap-2"
          className="w-fit"
          labelClassName="font-normal"
        />
        <Input
          type="checkbox"
          id="none"
          label="Nope I'm good"
          value={"none"}
          name="help_needed"
          containerClassName="w-fit flex-row-reverse items-center gap-2"
          className="w-fit"
          labelClassName="font-normal"
        />
      </div>

      <div className="space-y-1">
        <p className="block text-sm font-medium leading-6 text-gray-900">
          What’s your storytelling vibe like?{" "}
          <span className="text-red-500">*</span>
        </p>
        <Input
          type="radio"
          id="Emotional"
          label="Emotional"
          value={"Emotional"}
          name="story_telling_vibes"
          containerClassName="w-fit flex-row-reverse items-center gap-2"
          className="w-fit"
          labelClassName="font-normal"
          required
          hideRequired
        />
        <Input
          type="radio"
          id="Education"
          label="Education"
          value={"Education"}
          name="story_telling_vibes"
          containerClassName="w-fit flex-row-reverse items-center gap-2"
          className="w-fit"
          labelClassName="font-normal"
          required
          hideRequired
        />
        <Input
          type="radio"
          id="Dramatic"
          label="Dramatic"
          value={"Dramatic"}
          name="story_telling_vibes"
          containerClassName="w-fit flex-row-reverse items-center gap-2"
          className="w-fit"
          labelClassName="font-normal"
          required
          hideRequired
        />

        <Input
          type="radio"
          id="Conceptual"
          label="Conceptual"
          value={"Conceptual"}
          name="story_telling_vibes"
          containerClassName="w-fit flex-row-reverse items-center gap-2"
          className="w-fit"
          labelClassName="font-normal"
          required
          hideRequired
        />

        <Input
          type="radio"
          id="Funny"
          label="Funny"
          value={"Funny"}
          name="story_telling_vibes"
          containerClassName="w-fit flex-row-reverse items-center gap-2"
          className="w-fit"
          labelClassName="font-normal"
          required
          hideRequired
        />
      </div>

      <div className="space-y-1">
        <div className="space-y-1">
          <p className="block text-sm font-medium leading-6 text-gray-900">
            Have you followed the Cinematic Streak Team
            <span className="text-red-500">*</span>
          </p>

          <ButtonAction
            btnType="badge"
            className="w-fit py-2 capitalize"
            type="button"
            onClick={() =>
              openUrl(
                "https://farcaster.xyz/ateh/pack/Cinematic-Streak-Team-jtfm03",
              )
            }
          >
            Follow the team now
          </ButtonAction>
        </div>
        <Input
          type="radio"
          id="yes-team"
          label="Yes"
          value={"yes"}
          name="following_team"
          containerClassName="w-fit flex-row-reverse items-center gap-2"
          className="w-fit"
          labelClassName="font-normal"
          required
          hideRequired
        />
        <Input
          type="radio"
          id="no-team"
          label="No"
          value={"no"}
          name="following_team"
          containerClassName="w-fit flex-row-reverse items-center gap-2"
          className="w-fit"
          labelClassName="font-normal"
          required
          hideRequired
        />
      </div>

      <ButtonAction btnType="primary" disabled={isPending}>
        {isPending ? "Submitting..." : "Join campaign"}
      </ButtonAction>
    </form>
  );
}
