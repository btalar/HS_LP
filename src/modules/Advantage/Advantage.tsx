import React from "react";
import { Claim, SectionWrapper } from "../../components";
import { SliderCard } from "../SliderCard";
import { cartItems, InfoCard } from "../SliderCard/InfoCard";

export const Advantage = () => {
  return (
    <SectionWrapper className="py-8 px-10">
      <SliderCard claim={{ title: "Korzyści" }}>
        {cartItems.map((props) => (
          <InfoCard {...props} />
        ))}
      </SliderCard>
    </SectionWrapper>
  );
};
