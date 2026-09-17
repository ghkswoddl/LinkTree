export type LinkItem = {
  id: string;
  label: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  avatarUrl?: string;
};

export const profile: Profile = {
  name: "김도영",
  bio: "바이브 입문자",
};

export const links: LinkItem[] = [
  { id: "instagram", label: "인스타그램", url: "https://instagram.com" },
  { id: "youtube", label: "유튜브", url: "https://youtube.com" },
  { id: "blog", label: "블로그", url: "https://blog.naver.com" },
];
