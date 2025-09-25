"use client";

import { pinata } from "@/lib/pinata";
import { getUrl } from "../../action";
import { pinataGroupId } from "@/constants/pinataGroup";

export default async function uploadFiles(files: File[]) {
  try {
    const uploadResult = await Promise.all(
      files.map(async (file) => {
        try {
          const result = await getUrl();
          if ("error" in result) return { error: result.error };

          const upload = await pinata.upload.public
            .file(file)
            .url(result.url)
            .group(pinataGroupId);
          const fileUrl = await pinata.gateways.public.convert(upload.cid);
          return { fileUrl, id: upload.id };
        } catch (error) {
          return { error: "Error uploading file" };
        }
      }),
    );

    return uploadResult;
  } catch (e) {
    console.log(e);
    return { error: "Error uploading file" };
  }
}
