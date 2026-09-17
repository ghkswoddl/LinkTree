"use client";

import { useState } from "react";
import type { LinkItem } from "@/lib/profile";
import LinkCard from "@/components/LinkCard";

export default function LinkList({
  links,
  initialCounts,
}: {
  links: LinkItem[];
  initialCounts: Record<string, number>;
}) {
  const [counts, setCounts] = useState(initialCounts);

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
