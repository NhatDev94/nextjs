"use client";
import { ReactNode } from "react";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "@/redux/store";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <div className="w-screen h-[100dvh] overflow-y-scroll bg-black/10">
        <Header />
        <div className="w-full h-full pt-14">
          <div className="w-full max-w-[1080px] h-full mx-auto">{children}</div>
        </div>
      </div>
    </Provider>
  );
};

export default Layout;
