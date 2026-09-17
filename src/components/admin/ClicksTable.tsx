type ClickCount = {
  linkId: string;
  label: string;
  count: number;
  updatedAt: Date | null;
};

function formatDate(date: Date | null) {
  if (!date) return "-";
  return new Date(date).toLocaleString("ko-KR", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default function ClicksTable({ counts }: { counts: ClickCount[] }) {
  const sorted = [...counts].sort((a, b) => b.count - a.count);
  const total = counts.reduce((sum, c) => sum + c.count, 0);
  const max = Math.max(1, ...counts.map((c) => c.count));

  return (
    <div className="w-full max-w-lg">
      <p className="mb-4 text-sm text-neutral-500 dark:text-neutral-400">
        총 클릭 수 <span className="font-semibold text-neutral-800 dark:text-neutral-100">{total}</span>
      </p>
      <div className="flex flex-col gap-3">
        {sorted.map((item) => (
          <div
            key={item.linkId}
            className="rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium">{item.label}</span>
              <span className="text-sm font-semibold">{item.count}회</span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
              <div
                className="h-full rounded-full bg-neutral-800 dark:bg-neutral-200"
                style={{ width: `${(item.count / max) * 100}%` }}
              />
            </div>
            <p className="mt-1 text-xs text-neutral-400">
              마지막 클릭: {formatDate(item.updatedAt)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
