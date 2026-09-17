import Image from "next/image";
import type { Profile } from "@/lib/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <div className="flex flex-col items-center gap-4 pt-14">
      <div className="h-28 w-28 overflow-hidden rounded-full bg-neutral-200 shadow-[0_10px_30px_-8px_rgba(120,80,60,0.4)] ring-4 ring-white/80 dark:bg-neutral-700 dark:shadow-[0_10px_30px_-8px_rgba(0,0,0,0.6)] dark:ring-white/10">
        {profile.avatarUrl ? (
          <Image
            src={profile.avatarUrl}
            alt={profile.name}
            width={112}
            height={112}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-2xl font-semibold text-neutral-500 dark:text-neutral-300">
            {profile.name.charAt(0)}
          </div>
        )}
      </div>
      <div className="text-center">
        <h1 className="text-lg font-bold tracking-tight">{profile.name}</h1>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          {profile.bio}
        </p>
      </div>
    </div>
  );
}
