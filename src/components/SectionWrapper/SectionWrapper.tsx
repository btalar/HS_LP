import React, { ReactNode } from "react";

type SectionWrapperType = {
  children: ReactNode;
  isFluid?: boolean;
  noMarginVertical?: boolean;
  noGap?: boolean;
  className?: string;
  id?: string;
};

export const SectionWrapper = ({
  className,
  children,
  isFluid,
  noMarginVertical,
  noGap,
  id,
}: SectionWrapperType) => (
  <section
    id={id}
    className={`${!noMarginVertical && "my-[65px]"} ${
      !noGap && "md:px-6 px-[30px]"
    } ${
      isFluid ? "w-full " : "container mx-auto max-w-[1440px] overflow-hidden"
    }  ${className}`}
  >
    {children}
  </section>
);
