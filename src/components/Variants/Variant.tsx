import React from "react";

import {
  BLOCK3,
  BLOCK4,
  BLOCK5,
  BLOCK6,
  SVG1,
  SVG2,
  SVG4,
  SVG5,
} from "../../assets";
import { Button } from "@nextui-org/react";
import { SectionWrapper } from "../SectionWrapper";
import { Claim } from "../Claim";
import { Icon } from "../Functional/Functional";
import {useIntl} from "gatsby-plugin-intl";
export const Variant = () => {
  const intl = useIntl();
  return (
    <SectionWrapper id="warianty" className="">
      <div className="flex flex-col gap-[30px] md:gap-[80px]">
        <div>
          <Claim title={intl.formatMessage({ id: 'variants.title' })} />
        </div>
        <div className="flex md:flex-row flex-col gap-[50px] md:h-[700px] h-[1200px]">
          <div
            className="flex-1 bg-center rounded-[25px] relative py-[50px]  px-[50px] flex flex-col justify-end items-start gap-[10px]"
            style={{
              background: `linear-gradient(to bottom, rgba(255,255,255,0),rgba(255,255,255,0),
              rgba(255,255,255,1)), url("${BLOCK6}")`,
            }}
          >
            <Icon src={SVG4} />
            <div className="bg-black text-white py-1 text-[12px] px-4 rounded-[25px]">

              {intl.formatMessage({ id: 'variants.pod.label' })}
            </div>
            <h3 className="text-black text-[30px]"> {intl.formatMessage({ id: 'variants.pod.title' })}</h3>
            <p className="text-black text-[16px] md:text-justify min-h-[80px]">
              {intl.formatMessage({ id: 'variants.pod.desc' })}
            </p>
          </div>
          <div
            className="flex-1 bg-center rounded-[25px] relative py-[50px]  px-[50px]  flex flex-col justify-end gap-[10px] items-start"
            style={{
              background: `linear-gradient(to bottom, rgba(255,255,255,0),rgba(255,255,255,0),
              rgba(255,255,255,1)), url("${BLOCK5}")`,
            }}
          >
            <Icon src={SVG5} />
            <div className="bg-black text-white py-1 text-[12px] px-4 rounded-[25px] font-normal uppercase">
              {intl.formatMessage({ id: 'variants.mobileApp.label' })}
            </div>
            <h3 className="text-black text-[30px]">  {intl.formatMessage({ id: 'variants.mobileApp.title' })}</h3>
            <p className="text-black text-[16px] md:text-justify min-h-[80px]">
              {intl.formatMessage({ id: 'variants.mobileApp.desc' })}
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
