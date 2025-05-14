import { ReactNode } from "react";

type NoteProps = {
  children: ReactNode;
};

export default function Note({ children }: NoteProps) {
  return <p className="w-full text-sm font-normal text-black/20">{children}</p>;
}
