import React from "react";
import { SectionWrapper } from "../SectionWrapper";
import { Claim } from "../Claim";
import {
  BLOCK1,
  BLOCK13,
  BLOCK14,
  BLOCK15,
  BLOCK2,
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

export const Icon = ({ src }: { src: any }) => {
  return (
    <div className="left-[50px] top-[50px] absolute w-[80px] h-[80px] bg-white rounded-full flex justify-center items-center  shadow-lg ">
      <Image src={src} />
    </div>
  );
};

export const Functional = () => {
  return (
    <SectionWrapper className="flex gap-[40px] flex-col">
      <Claim title="Funkcje"  />
      <div className="flex gap-[50px] flex- h-[700px]">
        <div
          className="flex-1 bg-center relative p-[50px] flex flex-col justify-end gap-[10px] bg-cover rounded-[50px]"
          style={{ backgroundImage: `url("${BLOCK13}")` }}
        >
          <Icon src={SVG8} />
          <h3 className="text-white text-[40px]">Asystent głosowy</h3>
          <p className="text-white text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sed volutpat laoreet. Mauris blandit interdum magna.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-[50px] relative">
          <div
            className="flex-1 bg-center bg-cover relative p-[50px] flex flex-col justify-end gap-[10px] rounded-[50px]"
            style={{
              background: `linear-gradient(to bottom, rgba(255,255,255,0),#153021), url("${BLOCK14}")`,
            }}
          >
            <Icon src={SVG9} />
            <h3 className="text-white text-[40px]">Lokalne Atrakcje</h3>
            <p className="text-white text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              sed volutpat laoreet. Mauris blandit interdum magna.
            </p>
          </div>
          <div
            className="flex-1 overflow-hidden bg-center bg-cover relative p-[50px] flex flex-col justify-end gap-[10px] rounded-[50px]"
            style={{
              background:
                "linear-gradient(102deg, #638C76 0%, #44584D 100.03%)",
            }}
          >
            <img className="absolute -right-[20%] top-[10%]" src={BLOCK15} />
            <Icon src={SVG10} />
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
