import React from "react";
import { SectionWrapper } from "../SectionWrapper";
import { Claim } from "../Claim";
import { Button, Image } from "@nextui-org/react";
import { ASSETS1, ASSETS2 } from "../../assets";

type RowType = {
  title: string;
  isPromoted?: boolean;
  description: string;
  image: any;
};

const mocks: RowType[] = [
  {
    image: ASSETS1,
    title: "Aplikacja do zarządzania usterkami",
    isPromoted: true,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n" +
      "Phasellus ultricies dolor sed volutpat laoreet.",
  },
  {
    image: ASSETS2,
    title: "Zarządzanie konferencjami",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n" +
      "Phasellus ultricies dolor sed volutpat laoreet.",
  },
  {
    image: ASSETS2,
    title: "Oferta dla hoteli",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n" +
      "Phasellus ultricies dolor sed volutpat laoreet.",
  },
];

const Row = ({ image, isPromoted, description, title }: RowType) => {
  return (
    <div className="p-[35px] bg-[#F5F5F5] rounded-[25px] md:rounded-[50px] flex flex-col gap-[25px] md:gap-[50px]  items-start md:items-center md:flex-row">
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
          <div className="hidden lg:block py px-4 bg-[#908573] rounded-[50px] text-white">
            POPULARNE
          </div>
        )}
        <div className="text-[40px]">{title}</div>
        <div className="text-[16px]">{description}</div>
      </div>
      <Button
        size="lg"
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
          <Claim
            titleClassName="text-[40px] md:text-[60px]"
            title="Hotelspot Store"
          />
          <div className="flex flex-col gap-[50px]">
            {mocks.map((props) => (
              <Row {...props} />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Store;
