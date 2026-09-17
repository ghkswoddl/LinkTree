This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

**배포 URL**: https://linktree-six-omega.vercel.app

## 환경 변수

이 프로젝트는 MongoDB Atlas와 관리자 인증을 위해 다음 환경 변수가 필요합니다. `.env.local.example`을 복사해 `.env.local`을 만들고 값을 채워주세요 (실제 값은 저장소에 커밋하지 않습니다).

| 변수 | 설명 |
|---|---|
| `MONGODB_URI` | MongoDB Atlas 연결 문자열 |
| `MONGODB_DB` | 사용할 데이터베이스 이름 |
| `ADMIN_PASSWORD` | 관리자 대시보드 로그인 비밀번호 |
| `ADMIN_SESSION_SECRET` | 관리자 세션 토큰 서명용 비밀 키 (임의의 긴 문자열) |

## 관리자 대시보드

`/admin` 경로에서 링크별 클릭 수를 확인할 수 있습니다. `ADMIN_PASSWORD`로 로그인해야 접근 가능합니다.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
