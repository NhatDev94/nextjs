"use client";

import HeaderMenu from "@/components/layouts/HeaderMenu";
import Logo from "@/components/layouts/Logo";
import { signOut } from "@/redux/slices/authSlice";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: any) => state.auth.user);

  const toSignIn = () => {
    router.push("/sign-in");
  };

  const handleSignOut = async () => {
    await dispatch(signOut());
  };

  return (
    <div className="w-full h-full bg-bg">
      <div className="w-full h-12 flex items-center justify-between px-24">
        <Logo />

        {user ? (
          <HeaderMenu onSignOut={handleSignOut} />
        ) : (
          <SignInButton toSignIn={toSignIn} />
        )}
      </div>
      <Welcome />
    </div>
  );
}

const Welcome = () => {
  return (
    <div className="w-fit h-fit flex items-center justify-center fixed top-3/5 left-1/3 -translate-x-1/2 -translate-y-1/2 select-none">
      <div className="text-4xl font-bold text-primary">
        Welcome to the
        <p className="pl-8">
          <span className="text-8xl">Default</span> community
        </p>
      </div>
    </div>
  );
};

const SignInButton = ({ toSignIn }: { toSignIn: any }) => {
  return (
    <div className="flex items-center gap-x-4">
      <div
        className="text-sm font-bold text-primary cursor-pointer px-4 py-2 rounded-xl hover:text-text select-none"
        onClick={toSignIn}
      >
        Sign In
      </div>
    </div>
  );
};
