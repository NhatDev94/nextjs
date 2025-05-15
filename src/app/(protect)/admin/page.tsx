"use client";

import AddProductButton from "@/components/common/buttons/AddProductButton";
import AddProductModal from "@/components/common/modals/AddProductModal";
import ProductList from "@/components/product/ProductList";
import { useEffect, useState } from "react";

import { collection, query, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/indext";
import { Product } from "@/types/productType";

const Profile = () => {
  const [open, setOpen] = useState(false);

  const [products, setProducts] = useState<Product[]>([]);
  const handleAddProduct = () => {
    setOpen(true);
  };

  const getProducts = async () => {
    const q = query(collection(db, "products"));
    const querySnapshot = await getDocs(q);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any[] = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      data.push(doc.data());
    });
    console.log(data);
    setProducts(data || []);
  };

  useEffect(() => {
    getProducts();
  }, []);

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
