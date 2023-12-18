import React from "react";
import { SectionWrapper } from "../SectionWrapper";
import { Claim } from "../Claim";

const Store = () => {
  return (
    <div>
      <SectionWrapper>
        <div className="flex flex-col gap-[20px]">
          <Claim title="Hotelspot Store" />
          <div className="w-full h-[300px] bg-default-100 rounded-xl"></div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Store;
