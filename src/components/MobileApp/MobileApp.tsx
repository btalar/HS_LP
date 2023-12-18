import React from "react";
import { Image } from "@nextui-org/react";
import { APP_STORE, BLOCK7, GOOGLE_PLAY, SVG6, SVG7 } from "../../assets";
import { SectionWrapper } from "../SectionWrapper";
import { Claim } from "../Claim";

export const MobileApp = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-row">
        <div className="flex-1 flex flex-col gap-[40px] justify-center">
          <Claim
            titleClassName="text-[60px] leading-none"
            title={
              <>
                Aplikacja <br /> mobilna
              </>
            }
            descriptionClassName="max-w-[400px]"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies dolor sed volutpat laoreet."
          />
          <div className="flex gap-[10px]">
            <Image className="border" src={APP_STORE} />
            <Image className="border" src={GOOGLE_PLAY} />
          </div>
        </div>
        <Image src={BLOCK7} />
      </div>
    </SectionWrapper>
  );
};
