"use client";

import { useEffect, useState } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/indext";

import { Product } from "@/types/productType";

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

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

  return { products, getProducts };
}
