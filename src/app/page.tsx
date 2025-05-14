"use client";

import Title from "@/components/common/texts/Title";
import Sort from "./components/Sort";

export default function Home() {
  return (
    <div className="w-full h-full py-4">
      <div className="w-full h-80 rounded-lg bg-yellow-200">Hero</div>

      <div className="w-full px-4 rounded-lg bg-white mt-4 flex items-center justify-between">
        <Title isRedirect={true} className="py-4">
          Danh sách sản phẩm
        </Title>

        <Sort />
      </div>
    </div>
  );
}
