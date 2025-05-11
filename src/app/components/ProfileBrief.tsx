import Avatar from "@/components/Avatar";
import avatar from "@/assets/images/image3.jpg";

export default function ProfileBrief() {
  return (
    <div className="w-full h-fit rounded-lg overflow-hidden bg-white border border-black/10">
      <div className="w-full h-14 bg-gray-200"></div>
      <div className="px-4 pb-4 -mt-6">
        <Avatar src={avatar} alt="avatar" />
        <h4 className="pt-1 w-full line-clamp-1 text-base font-bold text-text cursor-pointer hover:underline">
          Nhat Le
        </h4>
        <p className="pt-2 text-xs font-normal text-text">Middle Front End</p>
        <p className="text-xs font-normal text-text-secondary/80">
          Ho Chi Minh city, Viet Nam
        </p>
        <p className="pt-1 text-xs font-semibold text-text">Default CO Ltd.</p>
      </div>
    </div>
  );
}
