import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { ReactNode } from "react";

type LayoutType = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutType) => (
  <NextUIProvider>{children}</NextUIProvider>
);

export default Layout;
