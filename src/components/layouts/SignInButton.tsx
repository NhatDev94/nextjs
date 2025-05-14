// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

export default SignInButton;
