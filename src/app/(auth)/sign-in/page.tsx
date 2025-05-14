"use client";

import SignInForm from "@/components/common/forms/SignInForm";
import { signIn } from "@/redux/slices/authSlice";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export default function SignIn() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const handleClickSignUp = () => {
    router.push("/sign-up");
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (data: any) => {
    await dispatch(signIn(data));
    router.push("/");
  };

  return (
    <div className="w-screen h-[100dvh] flex items-center justify-center bg-bg">
      <div className="w-[480px] h-fit bg-white px-8 py-12 rounded-lg shadow-lg">
        <div className="w-full h-full">
          <h2 className="w-full text-center text-3xl font-bold text-primary mb-12">
            Sign In
          </h2>
          <SignInForm onSubmit={handleSubmit} />

          <p className="text-sm mt-8 text-center font-semibold mb-8">
            {"Don't have an account? "}
            <span
              onClick={handleClickSignUp}
              className="text-link cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
