import Avatar from "@/components/Avatar";

import FollowButton from "@/components/buttons/FollowButton";

type Props = {
  item: any;
};

export default function ProfileCard({ item }: Props) {
  return (
    <div className="w-full flex items-start gap-x-2 bg-white py-2">
      <Avatar src={item.avatar} alt="avatar" />
      <div className="">
        <h4 className="text-sm font-bold text-text cursor-pointer hover:underline">
          {item.name}
        </h4>
        <p className="text-xs font-normal text-text-secondary py-1">
          {item.description}
        </p>
        <FollowButton />
      </div>
    </div>
  );
}
