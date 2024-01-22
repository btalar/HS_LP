import React from "react";

import { BLOCK16, BLOCK4 } from "../../assets";
import { Button, useDisclosure } from "@nextui-org/react";
import { Modals } from "../Modals";
import CalendlyForm from "../CalendlyForm/CalendlyForm";
export const Details = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };
  return (
    <>
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
        <p className="text-white  text-[16px] text-center">
          Uzyskaj odpowiedzi na nurtujące Cię pytania <br />w ramach
          indywidualnej rozmowy z jednym z naszych ekspertów. <br /> Wspólnie
          znajdziemy najlepsze rozwiązanie dla Twojego hotelu.
        </p>
        <Button
          className="bg-white text-black"
          radius="full"
          onClick={() => { window.location.href = "#cp-widget" }}
          size="lg"
          color="success"
        >
          Umów prezentację
        </Button>
      </div>

    </>
  );
};
