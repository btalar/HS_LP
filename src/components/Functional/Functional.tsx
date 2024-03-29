import React from "react";
import { SectionWrapper } from "../SectionWrapper";
import { Claim } from "../Claim";
import {
  BLOCK1,
  BLOCK13,
  BLOCK14,
  BLOCK15,
  BLOCK2,
  BLOCK20,
  BLOCK3,
  BLOCK6,
  SVG1,
  SVG10,
  SVG2,
  SVG3,
  SVG8,
  SVG9,
} from "../../assets";
import { Image } from "@nextui-org/react";
import {useIntl} from "gatsby-plugin-intl";

export const Icon = ({ src }: { src: any }) => {
  return (
    <div className="left-[20px] top-[20px] md:left-[50px] md:top-[50px] absolute w-[48px] h-[48px] md:w-[80px] md:h-[80px] bg-white rounded-full flex justify-center items-center  shadow-lg ">
      <Image
        radius="none"
        className="md:w-[40px] md:h-[40px] w-[20px] h-[20px]"
        src={src}
      />
    </div>
  );
};

export const Functional = () => {
  const intl = useIntl();
  return (
    <SectionWrapper id="funkcje" className="flex gap-[40px] flex-col">
      <Claim title={intl.formatMessage({ id: 'function.title' })} />
      <div className="flex gap-[20px] md:gap-[50px] md:flex-row flex-col md:h-[700px]">
        <div
          className="flex-1 bg-center relative p-[30px] md:p-[50px] flex flex-col justify-end gap-[10px] bg-cover rounded-[25px]"
          style={{ backgroundImage: `url("${BLOCK13}")` }}
        >
          <Icon src={SVG8} />
          <h3 className="text-white text-[30px] mt-[100px] md:mt-0 mt-[100px] md:mt-0">
            {intl.formatMessage({ id: 'function.VoiceAssistant.title' })}
          </h3>
          <p className="text-white text-[16px] md:text-justify">
            {intl.formatMessage({ id: 'function.VoiceAssistant.desc' })}
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-[20px] md:gap-[50px] relative">
          <div
            className="flex-1 bg-center bg-cover relative p-[30px] md:p-[50px] flex flex-col justify-end gap-[10px] rounded-[25px]"
            style={{
              background: `linear-gradient(to bottom, rgba(255,255,255,0),#153021), url("${BLOCK14}")`,
            }}
          >
            <Icon src={SVG9} />
            <h3 className="text-white text-[30px] mt-[100px] md:mt-0">
              {intl.formatMessage({ id: 'function.LocalAttractions.title' })}
            </h3>
            <p className="text-white text-[16px]">
              {intl.formatMessage({ id: 'function.LocalAttractions.desc' })}
            </p>
          </div>
          <div
            className="flex-1 overflow-hidden bg-center bg-cover relative p-[30px] md:p-[50px] flex flex-col justify-end gap-[10px] rounded-[25px]"
            style={{
              background: `url("${BLOCK20}")`,
            }}
          >
            <img className="absolute -right-[20%] top-[10%]" src={BLOCK15} />
            <Icon src={SVG10} />
            <h3 className="text-white text-[30px] mt-[100px] md:mt-0">
              {intl.formatMessage({ id: 'function.MobileApp.title' })}
            </h3>
            <p className="text-white text-[16px]">
              {intl.formatMessage({ id: 'function.MobileApp.desc' })}
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
