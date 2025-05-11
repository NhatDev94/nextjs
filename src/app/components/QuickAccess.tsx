export default function QuickAccess() {
  const items = ["Saved items", "Groups", "Newsletters", "Events"];

  return (
    <div className="w-full p-4 rounded-lg bg-white flex flex-col gap-y-2.5 border border-black/10">
      {items.map((item: string, i: number) => (
        <p className="text-xs font-bold text-text cursor-pointer hover:underline">
          {item}
        </p>
      ))}
    </div>
  );
}
