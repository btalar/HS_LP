import React from "react";
import { SectionWrapper } from "../SectionWrapper";
import { Claim } from "../Claim";
import { BLOCK1, BLOCK2, BLOCK3, SVG1, SVG2, SVG3 } from "../../assets";
import { Image } from "@nextui-org/react";

export const Icon = ({ src }: { src: any }) => {
  return (
    <div className="left-[20px] top-[20px] absolute w-[80px] h-[80px] bg-white rounded-full flex justify-center items-center  shadow-lg ">
      <Image src={src} />
    </div>
  );
};

export const Functional = () => {
  return (
    <SectionWrapper className="flex gap-[40px] flex-col">
      <Claim title="Funkcje" />
      <div className="flex gap-[50px] flex- h-[700px]">
        <div
          className="flex-1 bg-center rounded-xl relative p-[50px] flex flex-col justify-end gap-[10px]"
          style={{ backgroundImage: `url("${BLOCK1}")` }}
        >
          <Icon src={SVG1} />
          <h3 className="text-white text-[40px]">Asystent głosowy</h3>
          <p className="text-white text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sed volutpat laoreet. Mauris blandit interdum magna.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-[50px] relative">
          <div
            className="flex-1 bg-center rounded-xl relative p-[50px] flex flex-col justify-end gap-[10px]"
            style={{ backgroundImage: `url("${BLOCK2}")` }}
          >
            <Icon src={SVG3} />
            <h3 className="text-white text-[40px]">Lokalne Atrakcje</h3>
            <p className="text-white text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              sed volutpat laoreet. Mauris blandit interdum magna.
            </p>
          </div>
          <div
            className="flex-1 bg-center rounded-xl relative p-[50px] flex flex-col justify-end gap-[10px]"
            style={{ backgroundImage: `url("${BLOCK3}")` }}
          >
            <Icon src={SVG2} />
            <h3 className="text-white text-[40px]">Aplikacja mobilna</h3>
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
