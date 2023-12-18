import React from "react";

import { BLOCK4 } from "../../assets";
import { Button } from "@nextui-org/react";
export const Details = () => {
  return (
    <div
      className="bg-cover rounded-t-[50px] bg-center h-[500px] flex flex-col gap-[40px] items-center justify-center"
      style={{ backgroundImage: `url('${BLOCK4}')` }}
    >
      <div className="text-white text-[60px] font-bold text-center leading-none">
        Porozmawiajmy
        <br /> o szczegółach
      </div>
      <p className="text-white text-center text-[16px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing <br />
        elit. Phasellus ultricies dolor sed volutpat laoreet.
      </p>
      <Button
        className="bg-black text-white"
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
