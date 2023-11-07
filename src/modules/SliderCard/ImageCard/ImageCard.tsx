import React from "react";
import { Image } from "@nextui-org/react";
import { BUSINESSMAN } from "../../../assets";
import { Title } from "./ImageCard.styled";
import { Description } from "../InfoCard/InfoCart.styled";

export const ImageCard = () => {
  return (
    <div className="flex flex-col  rounded-xl gap-y-3 ">
      <Image className="rounded-xl shadow-md" src={BUSINESSMAN} />
      <div className="bg-white shadow-md rounded-xl p-4 flex flex-col gap-y-3">
        <Title>Dołączenie do grona stałych gości</Title>
        <Description>
          oraz pozostawienie opinii rejestracja i przystąpienie do programu
          lojalnościowego, zaobserwowanie profili w social mediach, a także
          pozostawienie opinii w wewnętrznym systemie lub na popularnych
          stronach.
        </Description>
      </div>
    </div>
  );
};
