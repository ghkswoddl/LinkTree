import Image from "next/image";
import type { Profile } from "@/lib/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <div className="flex flex-col items-center gap-3 pt-10">
      <div className="h-24 w-24 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
        {profile.avatarUrl ? (
          <Image
            src={profile.avatarUrl}
            alt={profile.name}
            width={96}
            height={96}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-2xl font-semibold text-neutral-500 dark:text-neutral-300">
            {profile.name.charAt(0)}
          </div>
        )}
      </div>
      <div className="text-center">
        <h1 className="text-lg font-bold">{profile.name}</h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {profile.bio}
        </p>
      </div>
    </div>
  );
}
