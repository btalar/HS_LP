import React, { useRef, useState, useEffect } from "react";
import { Image, Spinner } from "@nextui-org/react";
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

import {SectionAbout, Col, ColLeft, ImageFull, ImageSmall, VariantSwitcher, SpinnerPlaceholder} from "./About.styled";
import { Claim, SectionWrapper } from "../../components";
import {ChooseVariant} from "../../components/ChooseVariant";

export const About = () => {
  const [variant, setVariant] = useState<"black" | "white">("black");
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true)
    setTimeout(() => setLoader(false), 1000);
  }, [variant]);



  return (
    <SectionWrapper>

      <SectionAbout>
        <ColLeft>

          <Claim
            title="Wyjątkowy niepowtarzalny design"
            description="Cyfrowy concierge to aplikacja z dostępem do informacji 24/7, prezentacji wszystkich udogodnień hotelowych oraz promocji ofert specjalnych za pomocą technologii cyfrowej"
          />
          <VariantSwitcher>
            <ChooseVariant variant={variant} setVariant={setVariant} />
          </VariantSwitcher>
          <Image src={POD4} />
        </ColLeft>

          {loader
              ?
              <SpinnerPlaceholder>
                <Spinner label="Loading..." />
              </SpinnerPlaceholder>

              :
          <Col>
            <ImageFull>
             <Image src={POD5} />}
            </ImageFull>
            <ImageSmall>
              <Image src={POD4} />
            </ImageSmall>
            <ImageSmall>
              <Image src={POD4} />
            </ImageSmall>
            <ImageSmall>
              <Image src={POD4} />
            </ImageSmall>
          </Col>
          }


      </SectionAbout>
    </SectionWrapper>
  );
};
