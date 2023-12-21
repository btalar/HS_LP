import React from "react";

import { BLOCK16, BLOCK4 } from "../../assets";
import { Button } from "@nextui-org/react";
export const Details = () => {
  return (
    <div
      id="szczegoly"
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
        Uzyskaj odpowiedzi na nurtujące Cię pytania w ramach indywidualnej
        <br />
        rozmowy z jednym z naszych ekspertów. Wspólnie znajdziemy najlepsze
        rozwiązanie dla Twojego hotelu.
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
