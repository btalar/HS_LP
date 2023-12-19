import React, { useState } from "react";
import { SectionWrapper } from "../SectionWrapper";
import { Claim } from "../Claim";

export const getCarouselResponsive = {
  superLargeDesktop: {
    breakpoint: { min: 1536, max: 99999 },
    items: 1,
  },
  largeDesktop: {
    breakpoint: { min: 1280, max: 1536 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
import { AnimateOnChange } from "react-animation";
import { Button } from "@nextui-org/react";
import classNames from "classnames";
import { BLOCK14 } from "../../assets";
const HowItWorks = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const goToNextStep = () => {
    setCurrentStep(currentStep + 1 === 7 ? 1 : currentStep + 1);
  };

  const goToPreviousStep = () =>
    setCurrentStep(currentStep - 1 === -1 ? 6 : currentStep - 1);

  const firstStep = (
    <div className="flex flex-row gap-[50px] flex-1 justify-between">
      <div className="flex-1 justify-between flex-col flex items-start">
        <div className="flex flex-col gap-[20px]">
          <Claim
            title="Zamów taxi"
            titleClassName="text-[40px]"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies dolor sed volutpat laoreet. Mauris blandit interdum magna sit amet mattis. Nam faucibus purus leo."
          />
        </div>
        <div className="flex flex-row gap-4">
          <Button
            onPress={goToPreviousStep}
            className="bg-black text-white"
            size="lg"
          >
            Cofnij
          </Button>
          <Button
            onPress={goToNextStep}
            className="bg-black text-white"
            size="lg"
          >
            Dalej
          </Button>
        </div>
      </div>
      <img
        className="h-[644px] w-[448px] object-cover rounded-[50px]"
        src={BLOCK14}
      />
    </div>
  );

  return (
    <div>
      <SectionWrapper>
        <div className="flex flex-row flex-1 justify-between">
          <div className="flex flex-col gap-[40px]">
            <Claim title="Jak to działa?" />
            <div className="flex gap-[15px]">
              {[...Array(5)].map((_e, index) => {
                return (
                  <button
                    onClick={() => setCurrentStep(index)}
                    key={index}
                    className={classNames(
                      ` w-[60px] h-[10px] rounded-full `,
                      index === currentStep ? "bg-black" : "bg-[#F5F5F5]",
                    )}
                  />
                );
              })}
            </div>
            <div>1 z 5</div>
            <Button onPress={() => setCurrentStep(currentStep + 1)}>
              click
            </Button>
            <AnimateOnChange>
              {
                {
                  ["0"]: firstStep,
                  ["1"]: firstStep,
                  ["2"]: firstStep,
                  ["3"]: firstStep,
                  ["4"]: firstStep,
                  ["5"]: firstStep,
                  ["6"]: firstStep,
                }[currentStep]
              }
            </AnimateOnChange>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default HowItWorks;
