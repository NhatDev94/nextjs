import DropDown from "../common/dropdowns/DropDown";

export default function HeaderMenu({ onSignOut }: { onSignOut: () => void }) {
  const items = [
    {
      label: "Profile",
    },
    {
      label: "Settings",
    },
    {
      label: "Sign out",
      onClick: onSignOut,
    },
  ];

  return (
    <div className="">
      <DropDown items={items}>
        <div className="w-8 h-8 rounded-full border border-black/10 overflow-hidden bg-primary flex items-center justify-center font-semibold text-white text-sm cursor-pointer select-none">
          N
        </div>
      </DropDown>
    </div>
  );
}
