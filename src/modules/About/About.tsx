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
      <div className="flex gap-[50px] ">
        <div className="gap-[10px] flex flex-col max-w-[400px] justify-between ">
          <Claim
            titleClassName="text-[60px]"
            title="wyjątkowy design"
            descriptionClassName="text-[15px]"
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
        <Image
          classNames={{
            wrapper: "h-full",
          }}
          className="h-full"
          src={POD5}
        />
        <div className="flex flex-col justify-between">
          <Image src={POD10} />
          <Image src={POD11} />
          <Image src={POD12} />
        </div>
      </div>
    </SectionWrapper>
  );
};
