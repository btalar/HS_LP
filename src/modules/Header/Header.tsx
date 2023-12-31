import React, {useEffect} from "react";
import { BLOCK9, COVER } from "../../assets";
import { Claim, ClaimType } from "../../components";
import styled from "styled-components";
import { Navbar } from "../Navbar";

const ClaimProperties: ClaimType = {
  title: "Inuticyjna aplikacja hotelspot\ncyfrowy concierge dla hoteli",
  description:
    "Inuticyjna aplikacja hotelspot cyfrowy concierge dla hoteli,\n umożliwiająca gościom pełen dostęp do różnorodnych usług i informacji, \npoprawiając komfort i wygodę ich pobytu.",
  hasSeparator: false,
  buttonSecondaryText: "Dowiedz się więcej",
  theme: "dark",
  titleClassName: "whitespace-pre-wrap",
  descriptionClassName: "whitespace-pre-wrap",
};

const HeaderStyled = styled.div<{
  background: string;
  mobileBackground: string;
}>`
  background: #44584d url("${(props) => props.background}");
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
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
  }
`;

export const Header = () => {
  return (
    <HeaderStyled
      background={COVER}
      mobileBackground={COVER}
      className="h-[1080px] bg-cover  justify-center -mt-[124px] rounded-b-[100px] max-w-[1920px] m-auto"
    >
      <div className="flex px-6 gap-8 w-full h-[1080px] flex-col justify-center max-w-[1440px] m-auto">
        <Claim {...ClaimProperties} />
      </div>
      <span className="scroll-btn">
        <a href="#">
          <span className="mouse">
            <span></span>
          </span>
        </a>
      </span>
    </HeaderStyled>
  );
};
