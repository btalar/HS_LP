"use client";
import React, { useEffect, useRef, useState } from "react";
import { SectionWrapper } from "../SectionWrapper";
import { Claim } from "../Claim";
import "react-multi-carousel/lib/styles.css";
import MultiCarousel, { ResponsiveType } from "react-multi-carousel";
import { Button } from "@nextui-org/react";
import classNames from "classnames";
import { BLOCK14, BLOCK3, BLOCK5, CARD1, CARD4, LEFT } from "../../assets";
import TaxiCard from "../Cards/TaxiCard";
import RentBikeCard from "../Cards/RentBikeCard";
import WeatherCard from "../Cards/WeatherCard";
import { AnimateOnChange } from "../AnimationOnChange/AnimationOnChange";

const responsive: ResponsiveType = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 100,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
    paritialVisibilityGutter: 100,
  },
};

const HowItWorks = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const carouselRef = useRef<MultiCarousel>(null);

  const handleGoTo = (index: number) => {
    console.log(index);
    carouselRef?.current?.goToSlide(index + 2, {
      skipBeforeChange: true,
    });
  };

  const header = (
    <AnimateOnChange className="flex flex-col gap-5">
      {
        {
          ["0"]: (
            <Claim
              title="Zamów taxi"
              titleClassName="text-[40px]"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies dolor sed volutpat laoreet. Mauris blandit interdum magna sit amet mattis. Nam faucibus purus leo."
            />
          ),
          ["1"]: (
            <Claim
              title="Wypożycz rower"
              titleClassName="text-[40px]"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies dolor sed volutpat laoreet. Mauris blandit interdum magna sit amet mattis. Nam faucibus purus leo."
            />
          ),
          ["2"]: (
            <Claim
              title="Pogoda"
              titleClassName="text-[40px]"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies dolor sed volutpat laoreet. Mauris blandit interdum magna sit amet mattis. Nam faucibus purus leo."
            />
          ),
        }[currentStep]
      }
    </AnimateOnChange>
  );

  const image = (
    <AnimateOnChange>
      {
        {
          ["0"]: (
            <img
              className="h-[644px] w-[448px] object-cover rounded-[50px]"
              src={BLOCK14}
            />
          ),
          ["1"]: (
            <img
              className="h-[644px] w-[448px] object-cover rounded-[50px]"
              src={BLOCK5}
            />
          ),
          ["2"]: (
            <img
              className="h-[644px] w-[448px] object-cover rounded-[50px]"
              src={BLOCK3}
            />
          ),
        }[currentStep]
      }
    </AnimateOnChange>
  );

  return (
    <div>
      <SectionWrapper id="jaktodziala">
        <div className="flex flex-row flex-1 justify-between">
          <div className="flex flex-col gap-[40px] flex-1">
            <Claim title="Jak to działa?" />
            <div className="flex gap-[15px]">
              {[...Array(3)].map((_e, index) => {
                return (
                  <button
                    onClick={() => {
                      setCurrentStep(index);
                      handleGoTo(index);
                    }}
                    key={index}
                    className={classNames(
                      ` w-[15px] h-[15px] rounded-full `,
                      index === currentStep
                        ? "w-[65px] bg-black"
                        : "bg-[#F5F5F5]",
                    )}
                  />
                );
              })}
            </div>
            <div>{currentStep + 1} z 3</div>
            <div className="flex flex-row gap-[50px] flex-1 justify-between">
              <div className="flex-1 justify-between flex-col flex items-start">
                <div className="flex flex-col gap-[20px]">
                  {header}
                  <div className="w-[400px] lg:w-[700px]">
                    <MultiCarousel
                      beforeChange={(e, { currentSlide }) => {
                        const plusIndex =
                          currentStep + 1 === 3 ? 0 : currentStep + 1;
                        const minusIndex =
                          currentStep - 1 === -1 ? 2 : currentStep - 1;
                        setCurrentStep(
                          e > currentSlide ? plusIndex : minusIndex,
                        );
                      }}
                      partialVisbile
                      ref={carouselRef}
                      slidesToSlide={1}
                      infinite={true}
                      renderButtonGroupOutside={true}
                      responsive={responsive}
                    >
                      <TaxiCard isActive={currentStep === 0} />
                      <RentBikeCard isActive={currentStep === 1} />
                      <WeatherCard isActive={currentStep === 2} />
                    </MultiCarousel>
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <Button
                    style={{
                      borderColor: "#908573",
                      padding: 0,
                      minWidth: 50,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    variant="bordered"
                    radius="full"
                    className="bg-white text-white max-w-[40px] !px-0"
                    size="lg"
                    onPress={(e) => carouselRef?.current?.previous(1)}
                  >
                    <img src={LEFT} />
                  </Button>
                  <Button
                    onPress={(e) => carouselRef?.current?.next(1)}
                    radius="full"
                    className="bg-black text-white"
                    size="lg"
                  >
                    Dalej
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">{image}</div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default HowItWorks;
