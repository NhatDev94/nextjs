import React from "react";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  Select as SelectRoot,
  SelectTrigger,
  SelectValue,
} from "../shadcn/select";

type SelectProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any;
};

export default function Select({ items }: SelectProps) {
  return (
    <SelectRoot defaultValue={items[0].id}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {items.map((item: any, i: number) => (
            <SelectItem key={i} value={item.id}>
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </SelectRoot>
  );
}
