import React from "react";
import { Image } from "@nextui-org/react";
import { APP_STORE, BLOCK7, GOOGLE_PLAY } from "../../assets";
import { SectionWrapper } from "../SectionWrapper";
import { Claim } from "../Claim";
import {useIntl} from "gatsby-plugin-intl";

export const MobileApp = () => {
    const intl = useIntl();
  return (
    <SectionWrapper id="aplikacja">
      <div className="flex lg:flex-row flex-col gap-4">
        <div className="flex-1 flex flex-col gap-[40px] justify-center">
          <Claim
            titleClassName="  leading-none"
            title={
              <>
                  {intl.formatMessage({ id: 'mobileApp.title'})}
              </>
            }
            descriptionClassName="max-w-[300px] text-justify"
            description={intl.formatMessage({ id: 'mobileApp.desc'})}
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
