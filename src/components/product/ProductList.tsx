import Sort from "@/app/components/Sort";
import ProductCard from "./ProductCard";
import { Product } from "@/types/productType";

type ProductListType = {
  products: Product[];
};

export default function ProductList({ products }: ProductListType) {
  return (
    <div className="w-full px-4 rounded-lg bg-white my-4 pb-10">
      <div className="w-full flex flex-col">
        <h4 className="py-4 sm:py-6 text-xl font-semibold text-black">
          Danh sách sản phẩm
        </h4>

        <Sort />
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((item: Product, i: number) => (
          <div className="" key={i}>
            <ProductCard
              src={item.url}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
