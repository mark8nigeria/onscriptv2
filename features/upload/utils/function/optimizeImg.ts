"use client";

import imageCompression from "browser-image-compression";
import getMediaType from "./getMediaType";

export default async function optimizeImg(files: File[]) {
  const finalImgs = files
    .map((file) => {
      const type = getMediaType(file);
      if (type === "image") return file;
    })
    .filter((file) => file !== undefined);

  try {
    const compressedFiles = await Promise.all(
      finalImgs.map(async (file) => {
        // Compression options
        const options = {
          maxSizeMB: 0.2, // Target max size in MB
          maxWidthOrHeight: 800, // Resize if bigger
          useWebWorker: true, // Offload to web worker for performance
        };

        const compressed = await imageCompression(file, options);

        return compressed;
      }),
    );

    return compressedFiles;
  } catch (e) {
    console.log(e);
    return { error: "Error compressing image" };
  }
}
