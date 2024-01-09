import { CARD1, CARD3, CARD4, CARD6 } from "../../assets";
import { Button } from "@nextui-org/react";
import React from "react";
import oferty from "./../../assets/svg/Oferty.svg";
export type CardType = {
  isActive?: boolean;
};

const RestaurantCard = ({ isActive }: CardType) => (
  <div
    className={`mx-[20px] rounded-[25px] flex flex-col overflow-hidden h-[300px]  ${
      isActive ? "shadow-lg border-[2px]" : "shadow"
    }`}
  >
    <div className="flex flex-row items-center justify-start bg-[#F5F5F5] h-[70px] px-[30px] gap-[15px]">
      <h3>Oferty specjalne</h3>
    </div>
    <div className="flex flex-1 flex-col gap-[30px] py-[30px] items-center">
      <img className="w-[100px]" src={oferty} />
      <Button radius="full">Sprawdź oferty</Button>
    </div>
  </div>
);

export default RestaurantCard;
