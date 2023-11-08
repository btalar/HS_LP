import React from "react";
import { HERO_BG, HERO_BG_MOBILE } from "../../assets";
import { Claim, ClaimType } from "../../components";
import styled from "styled-components";

const ClaimProperties: ClaimType = {
  title: "Digital POD ",
  description: `Interaktywny cyfrowy concierge hotelowy z dotykowym ekranem,
  który zapewnia gościom wszystkie niezbędne informacje dotyczące udogodnień
  oraz wszystkich usług hotelowych, rekomendacje lokalnych wydarzeń, wycieczek,
  restauracji.`,
  hasSeparator: true,
  buttonPrimaryText: "Umów prezentacje ",
  buttonSecondaryText: "Wypróbuj nie za darmo",
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

export const Header = () => {
  return (
    <HeaderStyled
      background={HERO_BG}
      mobileBackground={HERO_BG_MOBILE}
      className="h-screen bg-center bg-cover flex justify-center"
    >
      <div className="flex px-6 gap-8 w-full h-full flex-col justify-center max-w-[1200px] m-auto">
        <Claim {...ClaimProperties} />
      </div>
    </HeaderStyled>
  );
};
