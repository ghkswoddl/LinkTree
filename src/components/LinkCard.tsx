"use client";

import type { LinkItem } from "@/lib/profile";

export default function LinkCard({ link }: { link: LinkItem }) {
  function handleClick() {
    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ linkId: link.id }),
      keepalive: true,
    }).catch(() => {});
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="block w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-center text-sm font-medium text-neutral-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    >
      {link.label}
    </a>
  );
}
