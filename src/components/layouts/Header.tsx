import CartIcon from "@/assets/icons/CartIcon";
import Logo from "./Logo";
import SignInButton from "../buttons/SignInButton";
import Avatar from "../Avatar";

const Header = () => {
  const user = 1;
  return (
    <div className="w-full h-14 fixed top-0 left-0 z-50 bg-white shadow-lg">
      <div className="w-full max-w-[1080px] h-full mx-auto px-20 flex items-center justify-between">
        <Logo />

        <div className="flex items-center gap-x-4">
          <div className="px-4 cursor-pointer">
            <CartIcon />
          </div>
          {user ? (
            <Avatar src="https://images.pexels.com/photos/30876390/pexels-photo-30876390/free-photo-of-banh-mi-ngu-c-c-ngon-tuy-t-v-i-l-p-ph-trong-b-c-tranh-tinh-v-t-ngh-thu-t.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
