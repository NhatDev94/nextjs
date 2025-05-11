"use client";

import { useEffect } from "react";

const ProtectLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // if user is not logged in, redirect to login page
  }, []);
  return <div className="w-full h-full">Protect{children}</div>;
};

export default ProtectLayout;
// Compare
