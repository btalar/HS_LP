"use client";
import React, { useEffect, useRef, useState } from "react";
import { SectionWrapper } from "../SectionWrapper";
import { Claim } from "../Claim";
import "react-multi-carousel/lib/styles.css";
import Carousel, { ResponsiveType } from "react-multi-carousel";

import { Button } from "@nextui-org/react";
import classNames from "classnames";
import {
  RESTAURANT,
  EVENTS,
  SPECIALOFFER,
  LEFT,
  OPINION,
  TAXI,
} from "../../assets";
import TaxiCard from "../Cards/TaxiCard";
import OpinionCard from "../Cards/OpinionCard";
import { AnimateOnChange } from "../AnimationOnChange/AnimationOnChange";
import RestaurantCard from "../Cards/RestaurantCard";
import OfferSpecialCard from "../Cards/OfferSpecialCard";
import HotelEventsCard from "../Cards/HotelEventsCard";
import {useIntl} from "gatsby-plugin-intl";

const responsive: ResponsiveType = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
  },
};

const HowItWorks = () => {
  const intl = useIntl();
  const [currentStep, setCurrentStep] = useState<number>(0);

  const carouselRef = useRef<MultiCarousel>(null);

  const handleGoTo = (index: number) => {
    console.log(index);
    carouselRef?.current?.goToSlide(index + 2, {
      skipBeforeChange: true,
    });
  };

  console.log(currentStep);

  const header = (
    <AnimateOnChange className="flex flex-col gap-5 pr-3 md:pr-0">
      {
        {
          ["0"]: (
            <Claim
              title={intl.formatMessage({ id: 'howItWorks.RestaurantHotel.title' })}
              titleClassName="text-[40px]"
              descriptionClassName="md:h-10 h-14 whitespace-pre-wrap"
              description={
                <>
                  {intl.formatMessage({ id: 'howItWorks.RestaurantHotel.desc' })}
                </>
              }
            />
          ),
          ["1"]: (
            <Claim
              title=  {intl.formatMessage({ id: 'howItWorks.OrderTaxi.title' })}
              titleClassName="text-[40px]"
              descriptionClassName="md:h-10 h-14"
              description= {intl.formatMessage({ id: 'howItWorks.OrderTaxi.desc' })}
            />
          ),
          ["2"]: (
            <Claim
              title={intl.formatMessage({ id: 'howItWorks.SpecialOffer.title' })}
              titleClassName="text-[40px]"
              description={intl.formatMessage({ id: 'howItWorks.SpecialOffer.desc' })}
              descriptionClassName="md:h-10 h-14"
            />
          ),
          ["3"]: (
            <Claim
              title={intl.formatMessage({ id: 'howItWorks.Events.title' })}
              titleClassName="text-[40px]"
              descriptionClassName="md:h-10 h-14"
              description={intl.formatMessage({ id: 'howItWorks.Events.desc' })}
            />
          ),
          ["4"]: (
            <Claim
              title={intl.formatMessage({ id: 'howItWorks.Opinion.title' })}
              descriptionClassName="md:h-10 h-14"
              titleClassName="text-[40px]"
              description={intl.formatMessage({ id: 'howItWorks.Opinion.desc' })}
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
              className="h-[644px] w-[448px] object-cover rounded-[25px]"
              src={RESTAURANT}
            />
          ),
          ["1"]: (
            <img
              className="h-[644px] w-[448px] object-cover rounded-[25px]"
              src={TAXI}
            />
          ),
          ["2"]: (
            <img
              className="h-[644px] w-[448px] object-cover rounded-[25px]"
              src={SPECIALOFFER}
            />
          ),
          ["3"]: (
            <img
              className="h-[644px] w-[448px] object-cover rounded-[25px]"
              src={EVENTS}
            />
          ),
          ["4"]: (
            <img
              className="h-[644px] w-[448px] object-cover rounded-[25px]"
              src={OPINION}
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
            <Claim title={ intl.formatMessage({ id: 'howItWorks.title' })} />
            <div className="flex gap-[15px]">
              {[...Array(5)].map((_e, index) => {
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
                        ? "w-[65px] bg-black animated-width"
                        : "bg-[#F5F5F5]",
                    )}
                  />
                );
              })}
            </div>
            <div className="flex flex-row gap-[50px] flex-1  ">
              <div className="flex-1 flex-col flex items-start">
                <div className="flex flex-col gap-[20px]">
                  {header}
                  <div id="carousel-container">
                    <Carousel
                      beforeChange={(e, { currentSlide }) => {
                        const plusIndex =
                          currentStep + 1 === 5 ? 0 : currentStep + 1;
                        const minusIndex =
                          currentStep - 1 === -1 ? 2 : currentStep - 1;
                        setCurrentStep(
                          e > currentSlide ? plusIndex : minusIndex,
                        );
                      }}
                      activeItem={2}
                      partialVisbile
                      ref={carouselRef}
                      slidesToSlide={1}
                      infinite={true}
                      renderButtonGroupOutside={true}
                      responsive={responsive}
                      arrows={false}
                    >
                      <RestaurantCard isActive={currentStep === 0} />
                      <TaxiCard isActive={currentStep === 1} />
                      <OfferSpecialCard isActive={currentStep === 2} />
                      <HotelEventsCard isActive={currentStep === 3} />
                      <OpinionCard isActive={currentStep === 4} />
                    </Carousel>
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
                    {intl.formatMessage({ id: 'btn.next' })}
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
