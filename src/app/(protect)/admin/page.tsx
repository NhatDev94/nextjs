"use client";

import AddProductButton from "@/components/common/buttons/AddProductButton";
import AddProductModal from "@/components/common/modals/AddProductModal";
import ProductList from "@/components/product/ProductList";
import { useState } from "react";

import useProducts from "@/hooks/useProducts";

const Profile = () => {
  const [open, setOpen] = useState(false);

  const { products } = useProducts();

  const handleAddProduct = () => {
    setOpen(true);
  };

  return (
    <div className="">
      <div className="fixed bottom-10 right-4 sm:right-20">
        <AddProductButton onClick={handleAddProduct} />
      </div>

      <ProductList products={products} />

      <AddProductModal
        open={open}
        title="Add product"
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default Profile;
