import Image from "next/image";

import avatar from "@/assets/images/image3.jpg";

export default function PostCreate() {
  return (
    <div className="w-full p-4 rounded-lg overflow-hidden bg-white">
      <div className="w-full flex gap-x-2">
        <div className="w-12 h-12 min-w-[48px] min-h-[48px] rounded-full overflow-hidden cursor-pointer">
          <Image
            src={avatar}
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full px-6 h-12 flex items-center rounded-3xl border border-black/20 cursor-pointer">
          Start a post
        </div>
      </div>
      <div className="w-full flex items-center justify-between px-12 pt-4">
        <div className="cursor-pointer text-sm font-semibold text-text-secondary">
          Photo
        </div>
        <div className="cursor-pointer text-sm font-semibold text-text-secondary">
          Video
        </div>
      </div>
    </div>
  );
}
