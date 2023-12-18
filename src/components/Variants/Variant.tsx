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
      <div className="flex flex-col gap-[80px]">
        <div>
          <Claim title="Warianty" />
        </div>
        <div className="flex flex-row gap-[50px] h-[700px]">
          <div
            className="flex-1 bg-center rounded-[50px] relative p-[50px] flex flex-col justify-end gap-[10px]"
            style={{ backgroundImage: `url("${BLOCK5}")` }}
          >
            <Icon src={SVG4} />
            <h3 className="text-white text-[40px]">Asystent głosowy</h3>
            <p className="text-white text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              sed volutpat laoreet. Mauris blandit interdum magna.
            </p>
          </div>
          <div
            className="flex-1 bg-center rounded-[50px] relative p-[50px] flex flex-col justify-end gap-[10px]"
            style={{ backgroundImage: `url("${BLOCK6}")` }}
          >
            <Icon src={SVG5} />
            <h3 className="text-white text-[40px]">Asystent tekstowy</h3>
            <p className="text-white text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              sed volutpat laoreet. Mauris blandit interdum magna.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
