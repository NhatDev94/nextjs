import ProfileCard from "./ProfileCard";
import image1 from "@/assets/images/image1.jpg";
import image2 from "@/assets/images/image2.jpg";
import image3 from "@/assets/images/image3.jpg";

export default function AddToYourFeed() {
  const items = [
    {
      name: "Hieu Ngo",
      description:
        "Cyber Threat Investigator @ TRMLaps | Ex-Threat Hunter @ NCSC Viet Nam",
      avatar: image1,
    },
    {
      name: "Node.js",
      description:
        "Cyber Threat Investigator @ TRMLaps | Ex-Threat Hunter @ NCSC Viet Nam",
      avatar: image2,
    },
    {
      name: "Tim Tran",
      description:
        "Cyber Threat Investigator @ TRMLaps | Ex-Threat Hunter @ NCSC Viet Nam",
      avatar: image3,
    },
  ];

  return (
    <div className="w-full p-4 rounded-lg overflow-hidden bg-white">
      <h4 className="text-sm font-bold text-text pb-4">Add to your feed</h4>

      <div className="">
        {items.map((item: any, i: number) => (
          <ProfileCard item={item} />
        ))}
      </div>
      <h4 className="pt-2 text-sm font-semibold text-text-secondary cursor-pointer hover:underline">
        View all recommendations
      </h4>
    </div>
  );
}
