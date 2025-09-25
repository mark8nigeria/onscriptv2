// app/api/metadata/route.ts
import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio"; // npm i cheerio

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const targetUrl = searchParams.get("url");

  if (!targetUrl) {
    return NextResponse.json({ error: "Missing url" }, { status: 400 });
  }

  try {
    const res = await fetch(targetUrl, { redirect: "follow" });
    const html = await res.text();
    const $ = cheerio.load(html);

    // Extract metadata
    const title =
      $('meta[property="og:title"]').attr("content") || $("title").text();
    const description =
      $('meta[property="og:description"]').attr("content") ||
      $('meta[name="description"]').attr("content") ||
      "";
    const image =
      $('meta[property="og:image"]').attr("content") ||
      $('meta[name="twitter:image"]').attr("content");
    const url = $('meta[property="og:url"]').attr("content") || targetUrl;

    return NextResponse.json({ title, description, image, url });
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { error: "Failed to fetch metadata" },
      { status: 500 },
    );
  }
}
