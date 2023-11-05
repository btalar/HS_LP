import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { ReactNode } from "react";

type LayoutType = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutType) => (
  <NextUIProvider>{children}</NextUIProvider>
);

