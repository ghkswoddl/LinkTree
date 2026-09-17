import { NextResponse } from "next/server";
import { getClickCounts } from "@/lib/clicks";

export const dynamic = "force-dynamic";

export async function GET() {
  const counts = await getClickCounts();
  return NextResponse.json(
    counts.map(({ linkId, count }) => ({ linkId, count })),
  );
}
