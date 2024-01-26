import React from "react";

import { BLOCK16, BLOCK4 } from "../../assets";
import { Button, useDisclosure } from "@nextui-org/react";
import { Modals } from "../Modals";
import CalendlyForm from "../CalendlyForm/CalendlyForm";
import {useIntl} from "gatsby-plugin-intl";
export const Details = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };
  const intl = useIntl();
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
        <div className="text-white text-[48px] font-bold text-center leading-none max-w-[500px]">
          {intl.formatMessage({ id: 'cta.title' })}
        </div>
        <p className="text-white  text-[16px] text-center max-w-[650px]">
          {intl.formatMessage({ id: 'cta.desc' })}
        </p>
        <Button
          className="bg-white text-black"
          radius="full"
          onClick={() => { window.location.href = "#cp-widget" }}
          size="lg"
          color="success"
        >
          {intl.formatMessage({ id: 'cta.btn' })}
        </Button>
      </div>

    </>
  );
};
