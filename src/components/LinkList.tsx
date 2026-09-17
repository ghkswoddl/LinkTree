"use client";

import { useEffect, useState } from "react";
import type { LinkItem } from "@/lib/profile";
import LinkCard from "@/components/LinkCard";

export default function LinkList({ links }: { links: LinkItem[] }) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks/public")
      .then((res) => (res.ok ? res.json() : []))
      .then((data: { linkId: string; count: number }[]) => {
        setCounts(Object.fromEntries(data.map((d) => [d.linkId, d.count])));
      })
      .catch(() => {});
  }, []);

  function handleCounted(linkId: string, count: number) {
    setCounts((prev) => ({ ...prev, [linkId]: count }));
  }

  return (
    <div className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          link={link}
          count={counts[link.id] ?? 0}
          onCounted={(count) => handleCounted(link.id, count)}
        />
      ))}
    </div>
  );
}
