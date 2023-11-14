import React from "react";
import { HERO_BG, HERO_BG_MOBILE, VIZ_POD_BG } from "../../assets";
import { Claim, ClaimType } from "../../components";
import styled from "styled-components";

const ClaimProperties: ClaimType = {
  title: "Intuicyjna aplikacja cyfrowego concierge dla hoteli na 24' dotykowym ekranie ",
  description: `Interaktywny cyfrowy concierge hotelowy z dotykowym ekranem,
  który zapewnia gościom wszystkie niezbędne informacje dotyczące udogodnień
  oraz wszystkich usług hotelowych, rekomendacje lokalnych wydarzeń, wycieczek,
  restauracji.`,
  hasSeparator: true,
  buttonSecondaryText: "Dowiedz się więcej",
  buttonPrimaryText: "Umów prezentacje ",
};

const HeaderStyled = styled.div<{
  background: string;
  mobileBackground: string;
}>`
  background-image: url("${(props) => props.background}");
  @media (max-width: 996px) {
    background-image: url("${(props) => props.mobileBackground}");
  }
`;

export const SectionImage = () => {
  return (
    <HeaderStyled
      background={VIZ_POD_BG}
      mobileBackground={HERO_BG_MOBILE}
      className="h-screen bg-center bg-cover flex justify-center"
    >

    </HeaderStyled>
  );
};
