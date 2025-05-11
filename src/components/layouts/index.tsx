"use client";
import { ReactNode } from "react";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "@/redux/store";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <div className="w-screen h-[100dvh]">
        <Header />
        <div className="w-full h-full ">{children}</div>
      </div>
    </Provider>
  );
};

export default Layout;
