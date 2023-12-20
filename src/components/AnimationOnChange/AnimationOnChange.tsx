"use client";

import React, { useEffect, useState } from "react";
import { ReactNode } from "react";
import { useSpring, animated } from "react-spring";
type AnimationOnChangeType = {
  children: ReactNode;
};
export const AnimateOnChange = ({ children }: AnimationOnChangeType) => {
  const [key, setKey] = useState(0);
  useEffect(() => {
    setKey(key + 1);
  }, [children]);

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    key: key,
  });

  return <animated.div style={props}>{children}</animated.div>;
};
