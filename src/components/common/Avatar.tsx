import {
  AvatarFallback,
  AvatarImage,
  Avatar as AvatarRoot,
} from "../shadcn/avatar";

type AvatarProps = {
  src: string | Blob | undefined;
  size?: number;
};

export default function Avatar({ src }: AvatarProps) {
  return (
    <AvatarRoot className="w-10 h-10">
      <AvatarImage src={src} alt="avatar" />
      <AvatarFallback>CN</AvatarFallback>
    </AvatarRoot>
  );
}
