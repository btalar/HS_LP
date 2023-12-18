import React from "react";
import { BLOCK9 } from "../../assets";
import { Claim, ClaimType } from "../../components";
import styled from "styled-components";

const ClaimProperties: ClaimType = {
  title: "Intuicyjna aplikacja cyfrowego concierge dla hoteli",
  description: `Interaktywny cyfrowy concierge hotelowy z dotykowym ekranem,
  który zapewnia gościom wszystkie niezbędne informacje dotyczące udogodnień
  oraz wszystkich usług hotelowych, rekomendacje lokalnych wydarzeń, wycieczek,
  restauracji.`,
  hasSeparator: false,
  buttonSecondaryText: "Dowiedz się więcej",
  theme: "dark",
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
      background={BLOCK9}
      mobileBackground={BLOCK9}
      className="h-screen  bg-cover  bg-topflex justify-center -mt-[84px] rounded-b-[100px]"
    >
      <div className="flex px-6 gap-8 w-full h-full flex-col justify-center max-w-[1440px] m-auto">
        <Claim {...ClaimProperties} />
      </div>
    </HeaderStyled>
  );
};
