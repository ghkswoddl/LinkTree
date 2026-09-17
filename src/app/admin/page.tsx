import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_SESSION_COOKIE, verifySessionToken } from "@/lib/adminAuth";
import { getClickCounts } from "@/lib/clicks";
import ClicksTable from "@/components/admin/ClicksTable";
import LogoutButton from "@/components/admin/LogoutButton";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const token = cookies().get(ADMIN_SESSION_COOKIE)?.value;
  if (!verifySessionToken(token)) {
    redirect("/admin/login");
  }

  const counts = await getClickCounts();

  return (
    <main className="flex min-h-screen flex-col items-center gap-6 px-4 py-10">
      <div className="flex w-full max-w-lg items-center justify-between">
        <h1 className="text-lg font-bold">클릭 수 대시보드</h1>
        <LogoutButton />
      </div>
      <ClicksTable counts={counts} />
    </main>
  );
}
