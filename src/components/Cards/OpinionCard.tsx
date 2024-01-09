import { CARD2, CARD5, OPINIONS_ASSETS } from "../../assets";
import { Button } from "@nextui-org/react";
import React from "react";
import { CardType } from "./RestaurantCard";

const OpinionCard = ({ isActive }: CardType) => (
  <div
    className={`mx-[20px] rounded-[25px] flex flex-col overflow-hidden h-[300px]  ${
      isActive ? "shadow-lg border-[2px]" : "shadow"
    }`}
  >
    <div className="flex flex-row items-center justify-start bg-[#F5F5F5] h-[70px] px-[30px] gap-[15px]">
      <h3>Pozostaw opinię</h3>
    </div>
    <div className="flex flex-1 flex-col gap-[30px] py-[30px] items-center justify-around">
      <div className="text-white bg-[#C7A581] text-[48px] px-2 rounded-2xl">
        4.9
      </div>
      <img className="w-[100px]" src={OPINIONS_ASSETS} />
      <Button radius="full">Dodaj opinię</Button>
    </div>
  </div>
);

export default OpinionCard;
