import React, { ReactNode } from "react";

type SectionWrapperType = {
  children: ReactNode;
  isFluid?: boolean;
  noMarginVertical?: boolean;
  noGap?: boolean;
};

export const SectionWrapper = ({
  children,
  isFluid,
  noMarginVertical,
  noGap,
}: SectionWrapperType) => (
  <section
    className={`${!noMarginVertical && "my-10"} ${!noGap && "px-6"} ${
      isFluid ? "w-full " : "container mx-auto max-w-[1200px]"
    }  `}
  >
    {children}
  </section>
);
