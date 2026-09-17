import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import DarkModeToggle from "@/components/DarkModeToggle";
import { profile, links } from "@/lib/profile";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="relative w-full max-w-sm rounded-3xl border border-neutral-200 bg-white/60 px-6 pb-10 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/60">
        <DarkModeToggle />
        <ProfileHeader profile={profile} />
        <div className="mt-8">
          <LinkList links={links} />
        </div>
      </div>
    </main>
  );
}
