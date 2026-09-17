"use client";

import type { LinkIcon, LinkItem } from "@/lib/profile";
import { GitHubIcon, InstagramIcon, YouTubeIcon } from "@/components/icons";

const ICONS: Record<LinkIcon, typeof InstagramIcon> = {
  instagram: InstagramIcon,
  youtube: YouTubeIcon,
  github: GitHubIcon,
};

export default function LinkCard({
  link,
  count,
  onCounted,
}: {
  link: LinkItem;
  count: number;
  onCounted: (count: number) => void;
}) {
  const Icon = ICONS[link.icon];

  function handleClick() {
    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ linkId: link.id }),
      keepalive: true,
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { count?: number } | null) => {
        if (typeof data?.count === "number") onCounted(data.count);
      })
      .catch(() => {});
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="flex w-full items-center justify-between gap-2 rounded-2xl border border-white/60 bg-white/30 px-4 py-3.5 text-sm font-medium text-neutral-800 shadow-sm backdrop-blur-md transition-colors duration-200 hover:bg-white/50 dark:border-white/10 dark:bg-white/5 dark:text-neutral-100 dark:hover:bg-white/10"
    >
      <span className="flex items-center gap-2">
        <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
        {link.label}
      </span>
      <span className="text-xs font-normal text-neutral-500 dark:text-neutral-400">
        {count}회
      </span>
    </a>
  );
}
