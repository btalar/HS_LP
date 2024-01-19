import React, { ReactNode } from "react";
import { SectionWrapper } from "../SectionWrapper";
import { Claim } from "../Claim";
import { Button, Image } from "@nextui-org/react";
import { ASSETS1, ASSETS2, ASSETS3, CARD7 } from "../../assets";

type RowType = {
  title: string;
  isPromoted?: boolean;
  description: string | ReactNode;
  image: any;
  isLastIndex?: boolean;
};

const mocks: RowType[] = [
  {
    image: ASSETS2,
    title: "Zarządzanie konferencjami",
    description:
        "Aplikacja do zarządzania konferencjami to wszechstronne narzędzie, które umożliwia organizatorom skuteczne planowanie, monitorowanie i koordynację wszelkich aspektów konferencji.",
  },
  {
    image: ASSETS1,
    title: "Zarządzanie usterkami",
    isPromoted: false,
    description: (
      <>
        Aplikacja do zarządzania usterkami dla hoteli to innowacyjne narzędzie,
        które umożliwia efektywne monitorowanie <br />i raportowanie wszelkich
        problemów technicznych czy uszkodzeń w obiekcie hotelowym.
      </>
    ),
  },
  {
    image: ASSETS3,
    title: "Oferta dla hoteli",
    description:
      "To idealne miejsce, gdzie dostawcy mogą prezentować swoje najnowsze produkty i usługi, a hotele łatwo znajdą innowacyjne rozwiązania dostosowane do swoich potrzeb. Zróżnicowana gama propozycji obejmuje odświeżające nowości w dziedzinie wyposażenia, technologii hotelowej, po luksusowe artykuły dla gości. ",
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
      }  p-[35px] rounded-[25px] md:rounded-[25px] flex flex-col gap-[25px] md:gap-[50px]  items-start md:items-center md:flex-row`}
    >
      <div
        className="md:hidden h-[200px] w-full bg-cover bg-center rounded-[20px] flex justify-start items-end p-[14px]"
        style={{ backgroundImage: `url(${image})` }}
      >
        {isPromoted && (
          <div className=" lg:hidden py px-4 bg-[#908573] rounded-[25px] text-white">
            POPULARNE
          </div>
        )}
      </div>
      <Image className="hidden md:block" src={image} />
      <div className="flex-1 flex flex-col items-start justify-end gap-[15px]">
        {isPromoted && (
          <div className="hidden lg:block py px-4 bg-[#908573] rounded-[25px] text-white text-[14px]">
            Bestseller
          </div>
        )}
        <div className="text-[40px] font-bold">{title}</div>
        <div className="text-[16px]">{description}</div>
      </div>
      <Button
        size="lg"
        disabled={true}
        className="text-[16px] rounded-full bg-[#545454] text-white"
      >
        Dostępne wkrótce ...
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
              <Row {...props} isLastIndex={false} />
            ))}
            {/*<div className="flex justify-center">*/}
            {/*  <Button*/}
            {/*    size="lg"*/}
            {/*    radius="full"*/}
            {/*    className="text-black bg-[#EAEAEA] flex items-center"*/}
            {/*  >*/}
            {/*    <span>Pokaż więcej</span> <img src={CARD7} />*/}
            {/*  </Button>*/}
            {/*</div>*/}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Store;
