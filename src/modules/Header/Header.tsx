import React from "react";
import { BLOCK9, COVER } from "../../assets";
import { Claim, ClaimType } from "../../components";
import styled from "styled-components";
import { Navbar } from "../Navbar";

const ClaimProperties: ClaimType = {
  title: "Intuicyjna aplikacja cyfrowego concierge dla hoteli",
  description: `Intuicyjna aplikacja cyfrowego concierge dla hoteli, umożliwiająca gościom pełen
dostęp do różnorodnych usług i informacji, poprawiając komfort i wygodę ich pobytu.`,
  hasSeparator: false,
  buttonSecondaryText: "Dowiedz się więcej",
  theme: "dark",
};

const HeaderStyled = styled.div<{
  background: string;
  mobileBackground: string;
}>`
  background-image: url("${(props) => props.background}");
  background-repeat: no-repeat;
  @media (max-width: 996px) {
    background-image: url("${(props) => props.mobileBackground}");
  }
`;

export const Header = () => {
  return (
    <HeaderStyled
      background={COVER}
      mobileBackground={COVER}
      className="h-[1000px] bg-cover  justify-center -mt-[124px] rounded-b-[100px] max-w-[1920px] m-auto"
    >
      <div className="flex px-6 gap-8 w-full h-[720px] flex-col justify-center max-w-[1440px] m-auto">
        <Claim {...ClaimProperties} theme={"light"} />
      </div>
    </HeaderStyled>
  );
};
