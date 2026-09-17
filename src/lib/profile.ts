export type LinkIcon = "instagram" | "youtube" | "github";

export type LinkItem = {
  id: string;
  label: string;
  url: string;
  icon: LinkIcon;
};

export type Profile = {
  name: string;
  bio: string;
  avatarUrl?: string;
};

export const profile: Profile = {
  name: "김도영",
  bio: "바이브 입문자",
  avatarUrl: "/profile.png",
};

export const links: LinkItem[] = [
  {
    id: "instagram",
    label: "Instagram",
    url: "https://instagram.com",
    icon: "instagram",
  },
  {
    id: "youtube",
    label: "YouTube",
    url: "https://youtube.com",
    icon: "youtube",
  },
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/ghkswoddl",
    icon: "github",
  },
];
