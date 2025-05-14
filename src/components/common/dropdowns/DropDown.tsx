import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu";

type Item = {
  label: string;
  onClick?: () => void;
};

type Props = {
  children: React.ReactNode;
  items: Item[];
};

export default function DropDown({ children, items }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {items.map((item: Item, i: number) => (
          <DropdownMenuItem onClick={item.onClick} key={i}>
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
