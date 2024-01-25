import React, { useEffect } from "react";
import {BLOCK9, COVER, HERO_WRAPPER, HERO_WRAPPER_MOBILE, INFOICO, PERCENT, PIN, TAXIICO} from "../../assets";
import { Claim, ClaimType } from "../../components";
import styled from "styled-components";
import { useDisclosure } from "@nextui-org/react";
import {HerderWrapper, IcoBlock, InfoIco, InfoIcoText, InfoIcoImage} from "./Header.styled"
import {useIntl, FormattedMessage} from "gatsby-plugin-intl";



const HeaderStyled = styled.div<{
  background: string;
  mobileBackground: string;
}>`
  background-size: cover;
  background: center center #44584d url("${(props) => props.background}");
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  max-height: 1080px;
  &::after {
    content: "";
    height: 200px;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background: linear-gradient(
      to bottom,
      rgba(37, 48, 42, 1),
      rgba(37, 48, 42, 0)
    );
  }
  &::before {
    content: "";
    height: 1044px;
    width: 1044px;
    top: -544px;
    right: -544px;
    position: absolute;
    border-radius: 100%;
    background: linear-gradient(to bottom, transparent, #eae0d6);
    opacity: 0.1;
  }
  @media (max-width: 996px) {
    background-image: url("${(props) => props.mobileBackground}");
    max-height: 820px;
    &::before{
      display: none;
    }
  }
  @media (max-width: 1024px) { 
    max-height: 820px;
    &::before{
      display: none;
    }
  }
`;

export const Header = () => {
  const intl = useIntl();

  const ClaimProperties: ClaimType = {
    title: intl.formatMessage({ id: 'hero.title' }),
    description: intl.formatMessage({ id: 'hero.desc' }),
    hasSeparator: false,
    buttonSecondaryText: intl.formatMessage({ id: 'hero.cta' }),
    theme: "dark",
    titleClassName: "whitespace-pre-wrap md:text-justify",
    descriptionClassName: "max-w-[500px]",
  };
  return (
    <>
      <HeaderStyled
        background={HERO_WRAPPER}
        mobileBackground={HERO_WRAPPER_MOBILE}
        className="element h-[1080px] bg-cover  justify-center -mt-[124px] rounded-b-[100px] max-w-[1920px] m-auto"
      >
        <HerderWrapper>
          <div className="flex px-6 gap-8 w-full h-[1080px] flex-col justify-center  m-auto">
            <Claim {...ClaimProperties} buttonSecondaryAction={() =>    {
              window.location.href = "#cp-widget"
            }} />
          </div>
          <IcoBlock>
            <InfoIco>
              <InfoIcoImage src={PERCENT}/>
              <InfoIcoText>{ intl.formatMessage({ id: 'hero.offers' })}</InfoIcoText>
            </InfoIco>
            <InfoIco>
              <InfoIcoImage src={PIN}/>
              <InfoIcoText>{ intl.formatMessage({ id: 'hero.pin' })}</InfoIcoText>
            </InfoIco>
            <InfoIco>
              <InfoIcoImage src={INFOICO}/>
              <InfoIcoText>{ intl.formatMessage({ id: 'hero.info' })}</InfoIcoText>
            </InfoIco>
            <InfoIco>
              <InfoIcoImage src={TAXIICO}/>
              <InfoIcoText>{ intl.formatMessage({ id: 'hero.taxi' })}</InfoIcoText>
            </InfoIco>
          </IcoBlock>
        </HerderWrapper>

      </HeaderStyled>

    </>
  );
};
