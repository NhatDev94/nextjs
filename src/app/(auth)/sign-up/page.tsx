"use client";

import SignUpForm from "@/components/common/forms/SignUpForm";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const handleClickSignIn = () => {
    router.push("/sign-in");
  };
  return (
    <div className="w-screen h-[100dvh] flex items-center justify-center bg-bg">
      <div className="w-[480px] h-fit bg-white rounded-lg shadow-lg px-8 py-12">
        <div className="w-full h-full">
          <h2 className="w-full text-center text-3xl font-bold text-primary mb-12">
            Sign Up
          </h2>
          <SignUpForm />

          <p className="text-sm mt-8 text-center font-semibold mb-8">
            Have an account?{" "}
            <span
              onClick={handleClickSignIn}
              className="text-link cursor-pointer"
            >
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
