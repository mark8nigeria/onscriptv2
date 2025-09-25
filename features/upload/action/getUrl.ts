"use server";

import { pinata } from "@/lib/pinata";

export default async function getUrl() {
  try {
    const url = await pinata.upload.public.createSignedURL({
      expires: 30,
    });
    return { url };
  } catch (error) {
    console.log(error);
    return { error: "Error creating API Key" };
  }
}
