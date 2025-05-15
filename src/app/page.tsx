"use client";

import ProductList from "@/components/product/ProductList";
import { Product } from "@/types/productType";

export default function Home() {
  return (
    <div className="w-full h-full py-4">
      <div className="w-full h-64 sm:h-80 rounded-lg bg-yellow-200">Hero</div>

      <ProductList products={products} />
    </div>
  );
}

const products: Product[] = [
  {
    id: 1,
    name: "Sữa chua Bledina của Pháp",
    description:
      "Là sữa chua nguội nên các mẹ không bao giờ phải lo lắng ăn sữa chua mà để ngoài có bị sao không hay ăn sữa chua lạnh thì bị đau họng.. ăn sữa chua nguội lại còn bổ sung nhiều loại hoa quả tự nhiên rất giàu vitamin tốt cho sự phát triển của trẻ....",
    url: "https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/497503685_2642783455919343_7549251074393946541_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=2qljoM6io-kQ7kNvwEMFS8R&_nc_oc=AdmjcgmXzBQNUYK7Kqiwj7lV4udojDxmH8GoFrgbQaM66fe2WJxVipajtF6l7gUoqXw&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=sxnex8oOPp6OyYee3ludxw&oh=00_AfIQUu-NAC0t4sbYBGkkY-zfgXSlLHlBU-L689mKHa8TZA&oe=682A22FA",
    price: "250.000d",
    quantity: 1,
    madeIn: "My",
    catalog: "baby",
  },
  {
    id: 2,
    name: "Sữa chua Bledina cho bé bị dị ứng đạm bò",
    description:
      "ngoài có bị sao không hay ăn sữa chua lạnh thì bị đau họng.. ăn sữa chua nguội lại còn bổ sung nhiều loại hoa quả tự nhiên rất giàu vitamin tốt cho sự phát triển của trẻ....",
    url: "https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/496946314_2642716725926016_3472432286104684672_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=110&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=Z_AIMR8FkXwQ7kNvwFR06is&_nc_oc=Adm-7EW12qg12gm4copbP5mJU0gsdaiT_piPfSNvAlP66dVq_lrxlYz_JgSRnPa6jkI&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=pAJT5qljHDMafLBE9mJmOQ&oh=00_AfLPVJVC-NuVdlJnJWDzNnQjESjY2qFBi0ZI5jRZ18TRQA&oe=682A4EEB",
    price: "250.000d",
    quantity: 1,
    madeIn: "My",
    catalog: "baby",
  },
  {
    id: 3,
    name: "Kem đánh răng Crest",
    description:
      "ên các mẹ không bao giờ phải lo lắng ăn sữa chua mà để ngoài có bị sao không hay ăn sữa chua lạnh thì bị đau họng.. ăn sữa chua nguội lại còn bổ sung nhiều loại hoa quả tự nhiên rất giàu vitamin tốt cho sự phát triển của trẻ....",
    url: "https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/496860032_2641906969340325_5959613683124436685_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=KXqvnL_RsnsQ7kNvwFwA-Kt&_nc_oc=AdkCpR1Vy_LNRXP8aqIqy5dDUpr-m6a2RFcOfcBsOK3UMbIg9JvUezMOC-0ZIYuFhF4&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=mgss3stsndu51OH1leXQ-A&oh=00_AfKCtaZ1Fj2IeVm9iA45H8oiPkxlj3fmWato5PV29XnpDA&oe=682A33C0",
    price: "250.000d",
    quantity: 1,
    madeIn: "My",
    catalog: "baby",
  },
  {
    id: 4,
    name: "Pudding snack pack - thơm ngậy và béo hơn váng sữa",
    description:
      "Pudding Snackpack có hàm lượng chất béo cao do đó cung cấp cho bé nhiều năng lượng đáp ứng cho các hoạt động trong ngày.",
    url: "https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/496639208_2638908426306846_6022337116093203934_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=aWQHOoavJEgQ7kNvwEdnfsx&_nc_oc=AdmgHGWExjZDpZWHlDKZmBG9NKK70bzDvjP-ftSozGoVpd1MjiWnyhY4QZKl2h3t1cc&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=xnYOrKtBOnASHqymMOHyHg&oh=00_AfI9lp3GMF6VX9lD-5_OsPVX7zaqmW5_dmXH6rVbXnXfwA&oe=682A40A1",
    price: "250.000d",
    quantity: 1,
    madeIn: "My",
    catalog: "baby",
  },
];
