import { CARD1, CARD3, CARD4, CARD6 } from "../../assets";
import { Button } from "@nextui-org/react";
import React from "react";

export type CardType = {
  isActive?: boolean;
};

const WeatherCard = ({ isActive }: CardType) => (
  <div
    className={`mx-[20px] rounded-[50px] flex flex-col overflow-hidden h-[300px]  ${
      isActive ? "shadow-lg" : "shadow"
    }`}
  >
    <div className="flex flex-row items-center justify-start bg-[#F5F5F5] h-[70px] px-[30px] gap-[15px]">
      <img className="w-[30px] h-[30px]" src={CARD3} />
      <h3>Pogoda 26&#176;</h3>
    </div>
    <div className="flex flex-1 flex-col gap-[30px] py-[30px] items-center">
      <img className="w-[100px]" src={CARD6} />
      <Button radius="full">Sprawdź pogode</Button>
    </div>
  </div>
);

export default WeatherCard;
