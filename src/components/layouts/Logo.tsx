"use client";

import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();
  return (
    <div
      className="text-3xl font-bold text-primary cursor-pointer select-none"
      onClick={() => router.push("/")}
    >
      Default
    </div>
  );
}
