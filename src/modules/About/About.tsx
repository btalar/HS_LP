import React from "react";
import { Card, CardFooter, Image, CardHeader } from "@nextui-org/react";
import { POD1, POD2, POD3, POD4, POD5 } from "../../assets";
import { Claim, SectionWrapper } from "../../components";
import { ChooseVariant } from "../../components/ChooseVariant";
export const About = () => {
  return (
    <SectionWrapper>
      <div className="flex gap-[50px]">
        <div className="gap-[20px] flex flex-col">
          <Claim
            title="wyjątkowy niepowtarzalny design"
            description="Cyfrowy concierge to aplikacja, która służy do zapewnienia
dostępu do informacji 24/7, prezentacji wszelkich udogodnień
hotelowych, a także promocji ofert specjalnych
za pomocą technologii cyfrowej."
          />
          <ChooseVariant />
          <Image src={POD4} />
        </div>
        <div className="max-w-[600px]">
          <Image
            classNames={{
              wrapper: "h-full",
            }}
            className="h-full"
            src={POD5}
          />
        </div>
        <div className="flex flex-col justify-between">
          <Image src={POD1} />
          <Image src={POD2} />
          <Image src={POD3} />
        </div>
      </div>
    </SectionWrapper>
  );
};
