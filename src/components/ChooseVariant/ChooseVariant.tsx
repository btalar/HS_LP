import React, { Dispatch, SetStateAction, useState } from "react";
import black from "./../../assets/variants/black.png";
import white from "./../../assets/variants/white.png";
import { Image } from "@nextui-org/react";

type ChooseVariantType = {
  setVariant: Dispatch<SetStateAction<"black" | "white">>;
  variant: "black" | "white";
};
export const ChooseVariant = ({ setVariant, variant }: ChooseVariantType) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-[20px] font-semibold">Wybierz wariant:</div>
      <div className="flex flex-row gap-4">

        <button
          onClick={() => setVariant("black")}
          className={`inline-flex items-center justify-center p-1 border-2 border-${
            variant === "black" ? "border-[#A58754]" : "transparent"
          } rounded-full focus:outline-none!  border-[#A58754] `}
        >
          <Image
            src={black}
            alt="Image"
            className="w-[60px] h-[60px] rounded-full"
          />
        </button>
        <button
            onClick={() => setVariant("white")}
            className={`inline-flex items-center justify-center p-1 border-2 border-${
                variant === "white" ? "border-[#A58754]" : "transparent"
            } rounded-full focus:outline-none!  border-[#A58754] `}
        >
          <Image
              src={white}
              alt="Image"
              className="w-[60px] h-[60px] rounded-full"
          />
        </button>
      </div>
    </div>
  );
};
