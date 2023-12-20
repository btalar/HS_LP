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
export const Variant = () => {
  return (
    <SectionWrapper className="">
      <div className="flex flex-col gap-[30px] md:gap-[80px]">
        <div>
          <Claim title="Warianty" />
        </div>
        <div className="flex md:flex-row flex-col gap-[50px] md:h-[700px] h-[1200px]">
          <div
            className="flex-1 bg-center rounded-[50px] relative py-[50px]  px-[50px] flex flex-col justify-end items-start gap-[10px]"
            style={{
              background: `linear-gradient(to bottom, rgba(255,255,255,0),rgba(255,255,255,0),
              rgba(255,255,255,1)), url("${BLOCK6}")`,
            }}
          >
            <Icon src={SVG4} />
            <div className="bg-black text-white py-1 px-4 rounded-[50px]">
              STACJONARNY POD
            </div>
            <h3 className="text-black text-[40px]">Asystent głosowy</h3>
            <p className="text-black text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              sed volutpat laoreet. Mauris blandit interdum magna.
            </p>
          </div>
          <div
            className="flex-1 bg-center rounded-[50px] relative py-[50px]  px-[50px]  flex flex-col justify-end gap-[10px] items-start"
            style={{
              background: `linear-gradient(to bottom, rgba(255,255,255,0),rgba(255,255,255,0),
              rgba(255,255,255,1)), url("${BLOCK5}")`,
            }}
          >
            <Icon src={SVG5} />
            <div className="bg-black text-white py-1 px-4 rounded-[50px] font-normal uppercase">
              Aplikacja mobilna
            </div>
            <h3 className="text-black text-[40px]">Asystent tekstowy</h3>
            <p className="text-black text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              sed volutpat laoreet. Mauris blandit interdum magna.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
