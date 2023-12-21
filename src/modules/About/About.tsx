import React, { useRef, useState } from "react";
import { Image } from "@nextui-org/react";
import {
  BLOCK4,
  POD1,
  POD10,
  POD11,
  POD12,
  POD2,
  POD3,
  POD4,
  POD5,
} from "../../assets";
import { Claim, SectionWrapper } from "../../components";
import { ChooseVariant } from "../../components/ChooseVariant";
import { AnimateOnChange } from "../../components/AnimationOnChange/AnimationOnChange";

export const About = () => {
  const ref = useRef(null);
  const [variant, setVariant] = useState<"black" | "white">("black");

  return (
    <SectionWrapper>
      <div
        id="product"
        className="flex gap-4 lg:gap-[50px] lg:flex-row flex-col "
      >
        <div className="gap-[10px] flex flex-col lgmax-w-[400px] items-center lg:items-start max-w-full justify-between ">
          <Claim
            titleClassName="text-[60px] text-center lg:text-left"
            title="Wyjątkowy,
                   niepowtarzalny
                   design"
            descriptionClassName="text-[15px] lg:text-left text-center"
            description="Cyfrowy concierge to aplikacja, która służy do zapewnienia
                         dostępu do informacji 24/7, prezentacji wszelkich udogodnień
                         hotelowych, a także promocji ofert specjalnych
                         za pomocą technologii cyfrowej."
          />
          <ChooseVariant variant={variant} setVariant={setVariant} />
          <div>
            <AnimateOnChange>
              {
                { black: <Image src={POD4} />, white: <Image src={POD4} /> }[
                  variant
                ]
              }
            </AnimateOnChange>
          </div>
        </div>
        <AnimateOnChange>
          {
            {
              black: (
                <Image
                  classNames={{
                    wrapper: "h-full hidden lg:block",
                  }}
                  className="h-full"
                  src={POD5}
                />
              ),
              white: (
                <Image
                  classNames={{
                    wrapper: "h-full hidden lg:block",
                  }}
                  className="h-full"
                  src={POD5}
                />
              ),
            }[variant]
          }
        </AnimateOnChange>
        <AnimateOnChange>
          <div className="flex hidden lg:flex flex-row lg:flex-col justify-between flex-1 h-full ">
            {
              {
                black: (
                  <>
                    <Image src={POD10} />
                    <Image src={POD11} />
                    <Image src={POD12} />
                  </>
                ),
                white: (
                  <>
                    <Image src={POD10} />
                    <Image src={POD11} />
                    <Image src={POD12} />
                  </>
                ),
              }[variant]
            }
          </div>
        </AnimateOnChange>
        <div className="lg:hidden grid grid-cols-2 grid-rows-2 gap-4">
          <div
            className="bg-center rounded-[25px]"
            style={{ backgroundImage: `url('${BLOCK4}')` }}
          />
          <div
            className="col-start-1 row-start-2 h-[200px] bg-center rounded-[25px]"
            style={{ backgroundImage: `url('${BLOCK4}')` }}
          />
          <div
            className="col-start-2 row-start-2 h-[200px] bg-center rounded-[25px]"
            style={{ backgroundImage: `url('${BLOCK4}')` }}
          />
          <div
            className="col-start-2 row-start-1 h-[200px] bg-center rounded-[25px]"
            style={{ backgroundImage: `url('${BLOCK4}')` }}
          />
        </div>
      </div>
    </SectionWrapper>
  );
};
