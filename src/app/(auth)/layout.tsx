import Logo from "@/components/layouts/Logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <div className="fixed top-0 left-0 z-50 h-12 flex items-center px-24">
        <Logo />
      </div>
      {children}
    </div>
  );
}
