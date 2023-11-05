import { NextUIProvider } from '@nextui-org/react';
import React, { ReactNode } from 'react';

import Header from '../Header/Header';

type LayoutType = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutType) => (
  <NextUIProvider>{children}</NextUIProvider>
);

export default Layout;
