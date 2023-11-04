import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { ReactNode } from "react";
import Header from "../Header/Header";

type LayoutType = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutType) => (
  <NextUIProvider>
    <Header />
  </NextUIProvider>
);

export default Layout;
