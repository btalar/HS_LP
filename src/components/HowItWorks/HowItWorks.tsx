import React, { useState } from "react";
import { SectionWrapper } from "../SectionWrapper";
import { Claim } from "../Claim";
import { Image } from "@nextui-org/react";
import { RECT } from "../../assets";
import classNames from "classnames";
import Carousel from "react-multi-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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

const HowItWorks = () => {
  const [currentStep, setCurrentStep] = useState(0);

  console.log(currentStep);

  return (
    <div>
      <SectionWrapper>
        <div className="flex flex-row flex-1 justify-between">
          <div className="flex flex-col gap-[40px]">
            <Claim title="Jak to działa?" />
            <div className="flex flex-col gap-[15px]">
              <div className="flex gap-[15px]">
                {[...Array(5)].map((e, _index) => {
                  console.log(_index, currentStep);
                  return (
                    <div
                      key={_index}
                      className={classNames(
                        `bg-[#F5F5F5] w-[60px] h-[10px] rounded-full `,
                        _index === currentStep && "bg-[#A58754]",
                      )}
                    ></div>
                  );
                })}
              </div>
              <div>1 z 5</div>
            </div>
            <Claim
              title="Zamów taxi"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies dolor
sed volutpat laoreet. Mauris blandit"
            />
            <div className="w-[700px] h-[300px]">
              <Carousel
                dotListClass="custom"
                responsive={getCarouselResponsive}
                showDots
                arrows={false}
              >
                <div className="h-[300px]">
                  <p className="legend">Legend 1</p>
                </div>
                <div className="h-[300px]">
                  <p className="legend">Legend 2</p>
                </div>
                <div className="h-[300px]">
                  <p className="legend">Legend 3</p>
                </div>
              </Carousel>
            </div>
          </div>
          <Image src={RECT} />
        </div>
      </SectionWrapper>
    </div>
  );
};

export default HowItWorks;
