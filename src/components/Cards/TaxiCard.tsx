import { CARD1, CARD4 } from "../../assets";
import { Button } from "@nextui-org/react";
import React from "react";
import { CardType } from "./RestaurantCard";

const TaxiCard = ({ isActive }: CardType) => (
  <div
    className={`rounded-[25px] flex flex-col overflow-hidden h-[300px] mx-[5px]  ${
      isActive ? "shadow-lg border-[2px] mt-[-10px]" : "shadow"
    }`}
  >
    <div className="flex flex-row items-center justify-start bg-[#F5F5F5] h-[70px] px-[30px] gap-[15px]">
      <h3>Zamów taxi</h3>
    </div>
    <div className="flex flex-1 flex-col gap-[30px] py-[30px] items-center ">
      <img className="w-[100px]" src={CARD4} />
      <Button radius="full">Zamów taxi</Button>
    </div>
  </div>
);

export default TaxiCard;
