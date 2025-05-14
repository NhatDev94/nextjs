import CartIcon from "@/assets/icons/CartIcon";
import Logo from "./Logo";
import SignInButton from "../common/buttons/SignInButton";
import Avatar from "../common/Avatar";
import useGoogleSignIn from "@/hooks/useGoogleSignIn";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { DropdownMenu } from "../shadcn/dropdown-menu";
import DropDown from "../common/dropdowns/DropDown";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);
  const { handleGoogleSignIn } = useGoogleSignIn();

  const items = [
    {
      label: "Admin",
      onClick: () => router.push("/admin"),
    },
  ];

  return (
    <div className="w-full h-14 fixed top-0 left-0 z-50 bg-white shadow-lg">
      <div className="w-full max-w-[1080px] h-full mx-auto px-4 sm:px-20 flex items-center justify-between">
        <Logo />

        <div className="flex items-center gap-x-2">
          <div className="px-4 cursor-pointer">
            <CartIcon />
          </div>
          {user ? (
            <DropDown items={items}>
              <Avatar src={user.photoURL} />
            </DropDown>
          ) : (
            <SignInButton onClick={handleGoogleSignIn} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
