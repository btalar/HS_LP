import React from "react";
import { Image } from "@nextui-org/react";
import { APP_STORE, BLOCK7, GOOGLE_PLAY } from "../../assets";
import { SectionWrapper } from "../SectionWrapper";
import { Claim } from "../Claim";

export const MobileApp = () => {
  return (
    <SectionWrapper id="aplikacja">
      <div className="flex lg:flex-row flex-col gap-4">
        <div className="flex-1 flex flex-col gap-[40px] justify-center">
          <Claim
            titleClassName="  leading-none"
            title={
              <>
                Aplikacja mobilna
              </>
            }
            descriptionClassName="max-w-[300px] text-justify"
            description="Usługa dostępna także jako aplikacja dostępna dla wszystkich gości, niezależnie od tego, czy korzystają ze smartfona, tabletu, czy komputera."
          />
          <div className="hidden lg:flex gap-[10px]">
            <Image className="border" src={APP_STORE} />
            <Image className="border" src={GOOGLE_PLAY} />
          </div>
        </div>
        <Image src={BLOCK7} />
      </div>
    </SectionWrapper>
  );
};
