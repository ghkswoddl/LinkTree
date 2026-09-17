import clientPromise from "@/lib/mongodb";
import { links } from "@/lib/profile";

const DB_NAME = process.env.MONGODB_DB ?? "linktree";
const COLLECTION = "linkClicks";

export const validLinkIds = new Set(links.map((link) => link.id));

export async function incrementClick(linkId: string) {
  const client = await clientPromise;
  const collection = client.db(DB_NAME).collection(COLLECTION);

  const result = await collection.findOneAndUpdate(
    { linkId },
    { $inc: { count: 1 }, $set: { updatedAt: new Date() } },
    { upsert: true, returnDocument: "after" },
  );

  return result?.count ?? 1;
}

export async function getClickCounts() {
  const client = await clientPromise;
  const collection = client.db(DB_NAME).collection(COLLECTION);
  const docs = await collection.find({}).toArray();

  return links.map((link) => ({
    linkId: link.id,
    label: link.label,
    count: docs.find((doc) => doc.linkId === link.id)?.count ?? 0,
    updatedAt: docs.find((doc) => doc.linkId === link.id)?.updatedAt ?? null,
  }));
}
