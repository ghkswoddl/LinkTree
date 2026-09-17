import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import DarkModeToggle from "@/components/DarkModeToggle";
import { profile, links } from "@/lib/profile";
import { getClickCounts } from "@/lib/clicks";

export const dynamic = "force-dynamic";

export default async function Home() {
  const clickCounts = await getClickCounts();
  const initialCounts = Object.fromEntries(
    clickCounts.map(({ linkId, count }) => [linkId, count]),
  );

  return (
    <main className="flex min-h-screen items-center justify-center px-5 py-12 sm:px-6">
      <div className="relative w-full max-w-sm rounded-[2rem] border border-white/50 bg-white/40 px-6 pb-12 shadow-[0_8px_40px_-12px_rgba(120,80,60,0.25)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)] sm:px-8">
        <DarkModeToggle />
        <ProfileHeader profile={profile} />
        <div className="mt-10">
          <LinkList links={links} initialCounts={initialCounts} />
        </div>
      </div>
    </main>
  );
}
