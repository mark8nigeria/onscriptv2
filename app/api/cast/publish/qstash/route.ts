import { NextResponse, NextRequest } from "next/server";
import { Receiver } from "@upstash/qstash";
import { PostSchema } from "@/features/cast/schemas/cast.schema";
import { getPostById } from "@/helpers/read-db";
import db from "@/lib/db";

const receiver = new Receiver({
  currentSigningKey: process.env.QSTASH_CURRENT_SIGNING_KEY!,
  nextSigningKey: process.env.QSTASH_NEXT_SIGNING_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const bodyText = await req.text();
    const signature = req.headers.get("Upstash-Signature") ?? "";

    const isValid = await receiver.verify({
      body: bodyText,
      signature,
      url: req.nextUrl.href,
    });

    if (!isValid) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const body = JSON.parse(bodyText);

    const parsedData = PostSchema.safeParse(body);
    if (!parsedData.success) {
      return NextResponse.json(
        { error: parsedData.error.message },
        { status: 400 },
      );
    }
    const { NEYNAR_API_URL, NEYNAR_API_KEY } = process.env;

    if (!NEYNAR_API_URL || !NEYNAR_API_KEY) {
      return NextResponse.json({ error: "Variables not set" }, { status: 400 });
    }

    const { id } = parsedData.data;

    if (!id) {
      return NextResponse.json({ error: "ID not found" }, { status: 400 });
    }

    const post = await getPostById(id);
    if (!post) {
      return NextResponse.json(
        { error: "Scheduled post not found" },
        { status: 404 },
      );
    }

    const {
      qstashMessageId,
      status,
      postHash,
      text,
      embeds,
      signerUuid,
      parent,
      channelId,
      parentAuthorFid,
    } = post;

    if (status === "PUBLISHED" || postHash) {
      return NextResponse.json(
        { error: "Post have already been published" },
        { status: 400 },
      );
    }

    if (!qstashMessageId) {
      return NextResponse.json(
        { error: "Qstash Message not found" },
        { status: 404 },
      );
    }

    const url = `${NEYNAR_API_URL}/v2/farcaster/cast/`;
    const finalEmbeds = (embeds as { url: string }[])?.map(
      (embed: { url: string }) => ({
        url: embed.url,
      }),
    );

    const postBody = {
      signer_uuid: signerUuid,
      text,
      parent_author_fid: parentAuthorFid,
      embeds: finalEmbeds,
      parent: parent ?? undefined,
      channel_id: channelId ?? undefined,
    };

    const options = {
      method: "POST",
      headers: {
        "x-api-key": NEYNAR_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postBody),
    };

    const res = await fetch(url, options);

    if (!res.ok) {
      const data = await res.json();

      return NextResponse.json({ error: data.message }, { status: 400 });
    }

    const {
      cast: { hash },
    } = await res.json();

    const updatedData = await db.post.update({
      where: {
        qstashMessageId,
      },
      data: {
        postHash: hash,
        status: "PUBLISHED",
        publishedAt: new Date(),
      },
    });

    return NextResponse.json(
      { success: true, data: updatedData },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
