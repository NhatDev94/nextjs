export default function Footer() {
  const items = [
    "About",
    "Accessibility",
    "Help center",
    "Privacy & Terms",
    "Ad Choices",
    "Advertising",
    "Bussiness Services",
    "Get the Linkedln app",
    "More",
  ];
  return (
    <div className="w-full py-8">
      <div className="flex gap-x-4 gap-y-2 items-center justify-center flex-wrap px-10">
        {items.map((item: any, i: number) => (
          <p className="text-xs font-normal text-text-secondary/40 hover:underline hover:text-link cursor-pointer">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
