import React, { ReactNode } from "react";

type SectionWrapperType = {
  children: ReactNode;
  isFluid?: boolean;
  noMarginVertical?: boolean;
  noGap?: boolean;
  className?: string;
};

export const SectionWrapper = ({
  className,
  children,
  isFluid,
  noMarginVertical,
  noGap,
}: SectionWrapperType) => (
  <section
    className={`${!noMarginVertical && "my-[65px]"} ${!noGap && "px-6"} ${
      isFluid ? "w-full " : "container mx-auto max-w-[1440px]"
    }  ${className}`}
  >
    {children}
  </section>
);
