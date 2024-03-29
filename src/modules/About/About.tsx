import React, { useState } from "react";
import { Image } from "@nextui-org/react";
import {
  POD_1_W,
  POD_2_W,
  POD_3_W,
  POD_4_W,
  POD_5_W,
  POD_1_B,
  POD_2_B,
  POD_3_B,
  POD_4_B,
  POD_5_B,
} from "../../assets";

import {
  SectionAbout,
  Col,
  ColLeft,
  ImageFull,
  ImageSmall,
  VariantSwitcher,
  SpinnerPlaceholder,
} from "./About.styled";
import { Claim, SectionWrapper } from "../../components";
import { ChooseVariant } from "../../components/ChooseVariant";
import {useIntl} from "gatsby-plugin-intl";

export const About = () => {
  const [variant, setVariant] = useState<"black" | "white">("black");
  const intl = useIntl();

  return (
    <SectionWrapper id="product">
      <SectionAbout>
        <ColLeft>
          <Claim
            title={intl.formatMessage({ id: 'product.title' })}
            description={intl.formatMessage({ id: 'product.desc' })}
          />
          <VariantSwitcher>
            <ChooseVariant variant={variant} setVariant={setVariant} />
          </VariantSwitcher>
          <Image src={variant === "white" ? POD_1_W : POD_1_B} />
        </ColLeft>

        <Col>
          <ImageFull>
            <Image src={variant === "white" ? POD_2_W : POD_2_B} />
          </ImageFull>
          <ImageSmall>
            <Image src={variant === "white" ? POD_3_W : POD_3_B} />
          </ImageSmall>
          <ImageSmall>
            <Image src={variant === "white" ? POD_4_W : POD_4_B} />
          </ImageSmall>
          <ImageSmall>
            <Image src={variant === "white" ? POD_5_W : POD_5_B} />
          </ImageSmall>
        </Col>
      </SectionAbout>
    </SectionWrapper>
  );
};
