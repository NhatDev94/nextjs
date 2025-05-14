import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type AvatarProps = {
  src: string | StaticImport;
  alt: string;
  size?: number;
};

export default function Avatar({ src, alt }: AvatarProps) {
  return (
    <div className="w-18 min-w-[72px] h-18 min-h-[72px] rounded-full overflow-hidden border-2 border-white">
      <Image src={src} alt={alt} className="object-cover h-full w-full" />
    </div>
  );
}
