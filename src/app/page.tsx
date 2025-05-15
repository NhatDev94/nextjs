"use client";

import ProductList from "@/components/product/ProductList";
import useProducts from "@/hooks/useProducts";

export default function Home() {
  const { products } = useProducts();

  return (
    <div className="w-full h-full py-4">
      <div className="w-full h-64 sm:h-80 rounded-lg bg-yellow-200">Hero</div>

      <ProductList products={products} />
    </div>
  );
}
