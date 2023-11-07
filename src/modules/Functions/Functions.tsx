import { SectionWrapper } from "../../components";
import { SliderCard } from "../SliderCard";
import React from "react";
import { cartItems, InfoCard } from "../SliderCard/InfoCard";
import { ImageCard } from "../SliderCard/ImageCard/ImageCard";

export const Functions = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <SectionWrapper className="py-8 mb-0 px-10">
        <SliderCard
          claim={{
            title: "PODSTAWOWE FUNKCJE",
            description:
              "Cyfrowy concierge to aplikacja, która służy do zapewnienia dostępu do informacji 24/7, prezentacji wszelkich udogodnień hotelowych, a także promocji ofert specjalnych za pomocą technologii cyfrowej. Podstawowe funkcje digital POD:",
          }}
        >
          {Array(10)
            .fill(0)
            .map(() => (
              <ImageCard />
            ))}
        </SliderCard>
      </SectionWrapper>
    </div>
  );
};
