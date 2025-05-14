import { ReactNode } from "react";

type ParagraphProps = {
  children: ReactNode;
};

export default function Paragraph({ children }: ParagraphProps) {
  return <p className="w-full text-sm font-normal text-black">{children}</p>;
}
