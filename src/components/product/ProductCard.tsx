import Image from "next/image";
import Title from "../common/texts/Title";
import Paragraph from "../common/texts/Paragraph";

type ProductCardProps = {
  name: string;
  description: string;
  src: string;
  price: string;
};

export default function ProductCard({
  src,
  name,
  description,
  price,
}: ProductCardProps) {
  return (
    <div className="w-full h-fit rounded-lg shadow-lg overflow-hidden pb-2 border border-black/10">
      <div className="w-full h-48 overflow-hidden">
        <Image
          width={100}
          height={100}
          src={src}
          alt="product"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-4 pt-2">
        <div className=" line-clamp-2 min-h-12">
          <Title isRedirect={true}>{name}</Title>
        </div>
        <div className=" line-clamp-2 capitalize">
          <Paragraph>{description}</Paragraph>
        </div>

        <div className="w-full flex items-center justify-between mt-4">
          <p className="text-sm font-semibold text-black">{price}</p>
          <p className="text-xs font-semibold text-black cursor-pointer hover:bg-black/10 px-2 py-1 rounded-sm">
            Add to cart
          </p>
        </div>
      </div>
    </div>
  );
}
