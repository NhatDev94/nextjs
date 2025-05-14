import { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
  className?: string;
  isRedirect?: boolean;
};

export default function Title({
  children,
  className = "",
  isRedirect = false,
}: TitleProps) {
  return (
    <h4
      className={`w-fit text-base text-black font-semibold ${
        isRedirect && "cursor-pointer hover:underline"
      } ${className}`}
    >
      {children}
    </h4>
  );
}
