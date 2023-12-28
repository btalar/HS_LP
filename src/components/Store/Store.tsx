import React from "react";
import { SectionWrapper } from "../SectionWrapper";
import { Claim } from "../Claim";
import { Button, Image } from "@nextui-org/react";
import { ASSETS1, ASSETS2, CARD7 } from "../../assets";

type RowType = {
  title: string;
  isPromoted?: boolean;
  description: string;
  image: any;
  isLastIndex?: boolean;
};

const mocks: RowType[] = [
  {
    image: ASSETS1,
    title: "Aplikacja do zarządzania usterkami",
    isPromoted: true,
    description:
      "Aplikacja do komunikacji w zespole hotelowym oraz do zarządzania usterkami",
  },
  {
    image: ASSETS2,
    title: "Zarządzanie konferencjami",
    description: "Aplikacja do sprzedaży, zarządzania i realizacji eventów",
  },
  {
    image: ASSETS2,
    title: "Oferta dla hoteli",
    description: "Jeszcze więcej cyfrowych możliwości.",
  },
];

const Row = ({
  image,
  isPromoted,
  description,
  title,
  isLastIndex,
}: RowType) => {
  console.log(isLastIndex);
  return (
    <div
      className={`${
        isLastIndex
          ? "bg-gradient-to-b from-neutral-50 to-transparent opacity-[0.6] "
          : "bg-[#F5F5F5]"
      }  p-[35px] rounded-[25px] md:rounded-[50px] flex flex-col gap-[25px] md:gap-[50px]  items-start md:items-center md:flex-row`}
    >
      <div
        className="md:hidden h-[200px] w-full bg-cover bg-center rounded-[20px] flex justify-start items-end p-[14px]"
        style={{ backgroundImage: `url(${image})` }}
      >
        {isPromoted && (
          <div className=" lg:hidden py px-4 bg-[#908573] rounded-[50px] text-white">
            POPULARNE
          </div>
        )}
      </div>
      <Image className="hidden md:block" src={image} />
      <div className="flex-1 flex flex-col items-start justify-end gap-[15px]">
        {isPromoted && (
          <div className="hidden lg:block py px-4 bg-[#908573] rounded-[50px] text-white text-[14px]">
            Bestseller
          </div>
        )}
        <div className="text-[40px] font-bold">{title}</div>
        <div className="text-[16px] font-semibold">{description}</div>
      </div>
      <Button
        size="lg"
        disabled={true}
        className="text-[16px] rounded-full bg-black text-white"
      >
        Więcej
      </Button>
    </div>
  );
};

const Store = () => {
  return (
    <div>
      <SectionWrapper>
        <div className="flex flex-col gap-[40px] md:gap-[80px] ">
          <Claim title="Hotelspot Store" />
          <div className="flex flex-col gap-[50px]">
            {mocks.map((props, index, array) => (
              <Row {...props} isLastIndex={index + 1 === array.length} />
            ))}
            <div className="flex justify-center">
              <Button
                size="lg"
                radius="full"
                className="text-black bg-[#EAEAEA] flex items-center"
              >
                <span>Pokaż więcej</span> <img src={CARD7} />
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Store;
