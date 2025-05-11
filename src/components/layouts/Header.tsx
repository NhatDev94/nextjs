"use client";

import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const auth = useSelector((state: RootState) => state.auth);
  return (
    <div className="w-full h-14 flex items-center justify-between bg-white shadow-md fixed top-0 left-0 z-50 px-10">
      <Logo />

      {auth.token ? <AvatarMenu /> : <SignInButton />}
    </div>
  );
};

export default Header;

const Logo = () => {
  const router = useRouter();
  return (
    <div
      className="text-xl font-semibold text-black cursor-pointer"
      onClick={() => router.push("/")}
    >
      NextJS NhatLe
    </div>
  );
};

const SignInButton = () => {
  const router = useRouter();
  const toSignIn = () => {
    router.push("/sign-in");
  };
  return (
    <div
      className="w-fit h-8 rounded-lg bg-black text-white flex items-center justify-center px-4 cursor-pointer"
      onClick={toSignIn}
    >
      Sign In
    </div>
  );
};

const AvatarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="w-8 h-8 rounded-full bg-black shadow-lg cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen && <Menu />}
    </div>
  );
};

const Menu = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    // Handle sign out logic here
    dispatch({ type: "auth/signOut" });
    router.push("/");
  };
  return (
    <div className="w-60 h-fit px-4 py-1 rounded-lg shadow-lg border border-black/5 bg-white text-black fixed top-16 right-10">
      <p className="w-full h-10 flex items-center text-sm font-semibold hover:bg-gray-100 cursor-pointer">
        Profile
      </p>
      <p
        className="w-full h-10 flex items-center text-sm font-semibold hover:bg-gray-100 cursor-pointer"
        onClick={handleSignOut}
      >
        Sign Out
      </p>
    </div>
  );
};
