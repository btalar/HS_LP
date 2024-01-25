import { Button } from "@nextui-org/react";
import wydarzenia from "./../../assets/svg/wydarzenia.svg";
import React from "react";
import {useIntl} from "gatsby-plugin-intl";

export type CardType = {
  isActive?: boolean;
};

const RestaurantCard = ({ isActive }: CardType) => {
  const intl = useIntl();
  return(
  <div
    className={`rounded-[25px] flex flex-col overflow-hidden h-[300px] mx-[5px]  ${
      isActive ? "shadow-lg border-[2px]  mt-[-10px]" : "shadow"
    }`}
  >
    <div className="flex flex-row items-center justify-start bg-[#F5F5F5] h-[70px] px-[30px] gap-[15px]">
      <h3>{intl.formatMessage({ id: 'howItWorks.Events.title'})}</h3>
    </div>
    <div className="flex flex-1 flex-col gap-[30px] py-[30px] items-center">
      <img className="w-[100px]" src={wydarzenia} />
      <Button radius="full">{intl.formatMessage({ id: 'btn.checkEvents'})}</Button>
    </div>
  </div>
)};

export default RestaurantCard;
