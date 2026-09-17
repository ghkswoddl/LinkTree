import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, verifySessionToken } from "@/lib/adminAuth";
import { getClickCounts, incrementClick, validLinkIds } from "@/lib/clicks";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const linkId = body?.linkId;

  if (typeof linkId !== "string" || !validLinkIds.has(linkId)) {
    return NextResponse.json({ error: "invalid linkId" }, { status: 400 });
  }

  const count = await incrementClick(linkId);
  return NextResponse.json({ linkId, count });
}

export async function GET() {
  const token = cookies().get(ADMIN_SESSION_COOKIE)?.value;
  if (!verifySessionToken(token)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const counts = await getClickCounts();
  return NextResponse.json(counts);
}
