import PlusIcon from "@/assets/icons/PlusIcon";

type Props = {
  onClick: () => void;
};

export default function AddProductButton({ onClick }: Props) {
  return (
    <div
      className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white cursor-pointer"
      onClick={onClick}
    >
      <PlusIcon />
    </div>
  );
}
