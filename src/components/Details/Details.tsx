import React from "react";

import { BLOCK16, BLOCK4 } from "../../assets";
import { Button } from "@nextui-org/react";
export const Details = () => {
  return (
    <div
      className="bg-cover rounded-t-[50px] bg-center h-[500px] relative flex flex-col gap-[40px] items-center justify-center"
      style={{ backgroundImage: `url('${BLOCK4}')` }}
    >
      <img
        className="hidden lg:block absolute left-[10%] bottom-0 h-[50%]"
        src={BLOCK16}
      />
      <div className="text-white text-[48px] font-bold text-center leading-none">
        Porozmawiajmy
        <br /> o szczegółach
      </div>
      <p className="text-white text-center text-[16px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing <br />
        elit. Phasellus ultricies dolor sed volutpat laoreet.
      </p>
      <Button
        className="bg-white text-black"
        radius="sm"
        onClick={() => {}}
        size="lg"
        color="success"
      >
        Umów prezentację
      </Button>
    </div>
  );
};
