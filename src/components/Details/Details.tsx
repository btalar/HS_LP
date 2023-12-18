import React from "react";

import { BLOCK4 } from "../../assets";
import { Button } from "@nextui-org/react";
export const Details = () => {
  return (
    <div
      className="rounded-t-3xl bg-center h-[500px] flex flex-col gap-[40px] items-center justify-center"
      style={{ backgroundImage: `url('${BLOCK4}')` }}
    >
      <h1 className="text-white text-[48px] font-bold">
        Porozmawiajmy
        <br />o szczegółach
      </h1>
      <p className="text-white text-center">
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
