import React, { ReactNode, useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import { Button, ButtonGroup, Image } from "@nextui-org/react";
import { ARROW_LEFT, ARROW_RIGHT } from "../../assets";
import { Claim, ClaimType } from "../../components";

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

export type SlideCartType = {
  claim: ClaimType;
  children: ReactNode;
};

export const SliderCard = ({ claim, children }: SlideCartType) => {
  const ref = useRef<Carousel>(null);

  const [isPrevousDisabled, setIsPreviousDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const handleRightClick = () => {
    ref?.current?.next(0);
  };

  const handleLeftClick = () => {
    ref?.current?.previous(0);
  };

  return (
    <div className="flex flex-col gap-8 ">
      <div className="flex justify-between items-center ">
        <div className="">
          <Claim {...claim} />
        </div>
        <ButtonGroup variant="flat" color="primary" className="hidden lg:flex">
          <Button
            onClick={handleLeftClick}
            endContent={<Image src={ARROW_LEFT} />}
          />
          <Button
            onClick={handleRightClick}
            endContent={<Image src={ARROW_RIGHT} />}
          />
        </ButtonGroup>
      </div>
      <Carousel
        autoPlay={true}
        itemClass="px-2"
        partialVisbile={true}
        partialVisible={true}
        ref={ref}
        responsive={responsive}
        infinite={true}
        arrows={false}
      >
        {children}
      </Carousel>
      <ButtonGroup
        variant="flat"
        color="primary"
        className="flex lg:hidden w-full"
      >
        <Button
          onClick={handleLeftClick}
          endContent={<Image src={ARROW_LEFT} />}
        />
        <Button
          onClick={handleRightClick}
          endContent={<Image src={ARROW_RIGHT} />}
        />
      </ButtonGroup>
    </div>
  );
};
