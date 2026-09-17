"use client";

import type { LinkIcon, LinkItem } from "@/lib/profile";
import { GitHubIcon, InstagramIcon, YouTubeIcon } from "@/components/icons";

const ICONS: Record<LinkIcon, typeof InstagramIcon> = {
  instagram: InstagramIcon,
  youtube: YouTubeIcon,
  github: GitHubIcon,
};

export default function LinkCard({ link }: { link: LinkItem }) {
  const Icon = ICONS[link.icon];
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
      className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/60 bg-white/30 px-4 py-3.5 text-center text-sm font-medium text-neutral-800 shadow-sm backdrop-blur-md transition-colors duration-200 hover:bg-white/50 dark:border-white/10 dark:bg-white/5 dark:text-neutral-100 dark:hover:bg-white/10"
    >
      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
      {link.label}
    </a>
  );
}
