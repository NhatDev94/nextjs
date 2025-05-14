"use client";

const ProtectLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full h-full">Protect{children}</div>;
};

export default ProtectLayout;
// Compare
