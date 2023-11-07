import React from "react";
import Carousel from "react-multi-carousel";
import { Image } from "@nextui-org/react";
import { HEART_ICON, PEOPLE_ICON, PIE_CHART, TRENDING_UP } from "../../assets";
import { Description, Title } from "./SliderCard.styled";
import { Claim } from "../../components";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

type CardType = {
  isFirstElement?: boolean;
  isLastElement?: boolean;
  src: string;
  title: string;
  description: string;
};

const cartItems = [
  {
    src: PEOPLE_ICON,
    title: "Usprawnienie obsługi klienta",
    description:
      "Cyfrowy concierge może dostarczać szybką i skuteczną informację dla gości 24/7, eliminując potrzebę czekania przy recepcji. Skutecznie zostaje zwiększone zadowolenie klientów.",
  },
  {
    src: PIE_CHART,
    title: "Analiza danych",
    description: "",
  },
  {
    src: TRENDING_UP,
    title: "Usprawnienie obsługi klienta",
    description:
      "Cyfrowy concierge może dostarczać szybką i skuteczną informację dla gości 24/7, eliminując potrzebę czekania przy recepcji. Skutecznie zostaje zwiększone zadowolenie klientów.",
  },
  {
    src: HEART_ICON,
    title: "Usprawnienie obsługi klienta",
    description:
      "Cyfrowy concierge może dostarczać szybką i skuteczną informację dla gości 24/7, eliminując potrzebę czekania przy recepcji. Skutecznie zostaje zwiększone zadowolenie klientów.",
  },
];

const Card = ({
  src,
  title,
  description,
  isFirstElement,
  isLastElement,
}: CardType) => (
  <div
    className={`p-3 h-[272px] border border-[#C5CEE0] rounded-xl gap-4 mx-3 ${
      isFirstElement && "ml-0"
    } ${isLastElement && "mr-0"}`}
  >
    <Image src={src} />
    <Title>{title}</Title>
    <Description>{description}</Description>
  </div>
);

export const SliderCard = () => {
  return (
    <div>
      <div>
        <Claim title="Zalety" />
      </div>
      <Carousel responsive={responsive} arrows={true}>
        {[...cartItems, ...cartItems].map((props, index, arr) => (
          <Card
            isFirstElement={index === 0}
            isLastElement={arr.length === index + 1}
            {...props}
          />
        ))}
      </Carousel>
    </div>
  );
};
