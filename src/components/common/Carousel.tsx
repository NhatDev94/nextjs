import {
  Carousel as CarouselRoot,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn/carousel";

import Image from "next/image";
type CarouselProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
};

export default function Carousel({ items }: CarouselProps) {
  return (
    <CarouselRoot className="w-full">
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <Image
              src={item}
              alt="carousel"
              className="w-full h-auto object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </CarouselRoot>
  );
}
