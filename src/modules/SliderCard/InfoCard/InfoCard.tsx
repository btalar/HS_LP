import {
  HEART_ICON,
  PEOPLE_ICON,
  PIE_CHART,
  TRENDING_UP,
} from "../../../assets";
import { Image } from "@nextui-org/react";
import React from "react";
import { Description, Title } from "./InfoCart.styled";

type InfoCardType = {
  isFirstElement?: boolean;
  isLastElement?: boolean;
  src: string;
  title: string;
  description: string;
};

export const cartItems: InfoCardType[] = [
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

export const InfoCard = ({
  src,
  title,
  description,
  isFirstElement,
  isLastElement,
}: InfoCardType) => (
  <div className={`p-3 h-[272px] border border-[#C5CEE0] rounded-xl gap-4`}>
    <Image src={src} />
    <Title>{title}</Title>
    <Description>{description}</Description>
  </div>
);
