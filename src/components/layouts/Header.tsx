"use client";

import { AppDispatch, RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SignInButton from "./SignInButton";
import { signOut } from "@/redux/slices/authSlice";

const Header = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const toSignIn = () => {
    router.push("/sign-in");
  };

  const handleSignOut = async () => {
    await dispatch(signOut());
  };

  return (
    <div className="w-full h-12 flex items-center justify-between px-24 bg-bg fixed top-0 left-0 z-50">
      <Logo />

      {user ? (
        <HeaderMenu onSignOut={handleSignOut} />
      ) : (
        <SignInButton toSignIn={toSignIn} />
      )}
    </div>
  );
};

export default Header;
