import React from "react";
import { Image } from "@nextui-org/react";
import { BLOCK7, SVG6, SVG7 } from "../../assets";
import { SectionWrapper } from "../SectionWrapper";
import { Claim } from "../Claim";

export const MobileApp = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-row">
        <div className="flex-1">
          <Claim
            title="Aplikacja
mobilna"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies dolor sed volutpat laoreet."
          />
          <div className="flex gap-[10px]">
            <Image src={SVG6} />
            <Image src={SVG7} />
          </div>
        </div>
        <Image src={BLOCK7} />
      </div>
    </SectionWrapper>
  );
};
