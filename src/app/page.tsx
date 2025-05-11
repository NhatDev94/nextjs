"use client";

import { useSelector } from "react-redux";
import ProfileBrief from "./components/ProfileBrief";
import PremiumAds from "./components/PremiumAds";
import QuickAccess from "./components/QuickAccess";
import ProfileCard from "./components/ProfileCard";
import AddToYourFeed from "./components/AddToYourFeed";
import Footer from "@/components/layouts/Footer";
import PostCreate from "./components/PostCreate";
import Post from "@/components/post";

export default function Home() {
  const user = useSelector((state: any) => state.auth.user);
  return (
    <div className="w-full h-full">{!user ? <HomeContent /> : <Welcome />}</div>
  );
}

const Welcome = () => {
  return (
    <div className="w-full h-full bg-bg">
      <div className="w-fit h-fit flex items-center justify-center fixed top-3/5 left-1/3 -translate-x-1/2 -translate-y-1/2 select-none">
        <div className="text-4xl font-bold text-primary">
          Welcome to the
          <p className="pl-8">
            <span className="text-8xl">Default</span> community
          </p>
        </div>
      </div>
    </div>
  );
};

const HomeContent = () => {
  return (
    <div className="w-full h-full grid grid-cols-14 gap-4 px-42 pt-18 bg-neutral-200">
      <div className="col-span-3 h-fit gap-y-2 grid">
        <ProfileBrief />
        <PremiumAds />
        <QuickAccess />
      </div>
      <div className="col-span-7 h-full ">
        <PostCreate />

        <div className="flex items-center gap-x-2 py-1">
          <div className="flex-1 border-t-2 border-white"></div>
          <div className="w-fit flex items-center gap-x-1">
            <p className="text-xs font-normal text-text-secondary">Sort by:</p>
            <p className="text-sm font-semibold text-text cursor-pointer">
              Recent
            </p>
          </div>
        </div>

        <Post />
      </div>
      <div className="col-span-4 h-fit gap-y-2 grid ">
        <AddToYourFeed />
        <Footer />
      </div>
    </div>
  );
};
