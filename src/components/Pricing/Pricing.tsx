import { SectionWrapper } from "../SectionWrapper";
import { Claim } from "../Claim";
import React from "react";
import { Button } from "@nextui-org/react";
import { CHECK_BLACK, CHECK_WHITE } from "../../assets";
import classNames from "classnames";

type ColumnType = {
  isBlack?: boolean;
};
const Column = ({ isBlack }: ColumnType) => {
  console.log({ isBlack });
  return (
    <div
      className={`flex-1 p-[50px] rounded-[50px] flex flex-col justify-between gap-[100px] ${
        isBlack ? "bg-black" : "bg-[#EAEAEA]"
      }`}
    >
      <div>
        <h3
          className={`text-[32px] font-bold ${
            isBlack ? "text-white" : "text-black"
          }`}
        >
          Pakiet Basic
        </h3>
        <h3
          className={`text-[40px] font-bold ${
            isBlack ? "text-white" : "text-black"
          }`}
        >
          99 PLN<span className="text-[16px]">/ miesiąc</span>
        </h3>
      </div>
      <div className="flex flex-col flex-1 gap-[33px]">
        {[...Array(4)].map(() => (
          <div className="flex items-center gap-[15px]">
            <img
              className="w-[15px] h-[15px]"
              src={isBlack ? CHECK_WHITE : CHECK_BLACK}
            />
            <p
              className={`text-[15px] ${isBlack ? "text-white" : "text-black"}`}
            >
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          className={`text-[16px] ${
            isBlack ? "text-black white" : "text-white bg-black"
          } rounded-full`}
          size="lg"
        >
          Zamów pakiet
        </Button>
      </div>
    </div>
  );
};

export const Pricing = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-[40px]">
        <Claim
          title="Cennik"
          descriptionClassName="max-w-[400px]"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit.
Phasellus ultricies dolor sed volutpat laoreet."
        />
        <div className="flex gap-[50px]">
          <Column />
          <Column isBlack={true} />
          <Column />
        </div>
      </div>
    </SectionWrapper>
  );
};
