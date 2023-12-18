import React from "react";
import { Card, CardFooter, Image, CardHeader } from "@nextui-org/react";
import {
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
export const About = () => {
  return (
    <SectionWrapper>
      <div className="flex gap-[50px] max-h-[600px]">
        <div className="gap-[10px] flex flex-col">
          <Claim
            title="wyjątkowy niepowtarzalny design"
            description="Cyfrowy concierge to aplikacja, która służy do zapewnienia
dostępu do informacji 24/7, prezentacji wszelkich udogodnień
hotelowych, a także promocji ofert specjalnych
za pomocą technologii cyfrowej."
          />
          <ChooseVariant />
          <div>
            <Image src={POD4} />
          </div>
        </div>
        <div className="">
          <Image
            classNames={{
              wrapper: "h-full",
            }}
            className="h-full"
            src={POD5}
          />
        </div>
        <div className="flex flex-col justify-between">
          <Image src={POD10} />
          <Image src={POD11} />
          <Image src={POD12} />
        </div>
      </div>
    </SectionWrapper>
  );
};
