import Select from "@/components/common/Select";
import Title from "@/components/common/texts/Title";

export default function Sort() {
  const items = [
    {
      id: 1,
      name: "Giá thấp - cao",
    },
    {
      id: 2,
      name: "Giá cao - thấp",
    },
  ];
  return (
    <div className="w-fit flex items-center gap-x-4">
      <Title>Sort by:</Title>
      <Select items={items} />
    </div>
  );
}
