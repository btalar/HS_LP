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
    <div className="p-[35px] bg-[#F5F5F5] rounded-[50px] flex gap-[50px] items-center">
      <Image src={image} />
      <div className="flex-1 flex flex-col items-start justify-end gap-[15px]">
        {isPromoted && (
          <div className="py px-4 bg-[#908573] rounded-[50px] text-white text-[14px]">
            Bestseller
          </div>
        )}
        <div className="text-[24px]">{title}</div>
        <div className="text-[15px]">{description}</div>
      </div>
      <Button
        size="lg"
        disabled={true}
        className="text-[16px] rounded-full bg-[#C7C5C7] text-white"
      >
        Dostępne wkrótce
      </Button>
    </div>
  );
};

const Store = () => {
  return (
    <div>
      <SectionWrapper>
        <div className="flex flex-col gap-[80px]">
          <Claim   title="Hotelspot Store" />
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
