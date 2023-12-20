import React from "react";

import {HeroWrapper} from "./Hero.styled";
import {Navbar} from "../Navbar";
import {Claim, ClaimType} from "../../components";
import {BLOCK9} from "../../assets";

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
export const Hero = () => {
    return (
        <HeroWrapper background={BLOCK9} mobileBackground={BLOCK9}>
            <Claim {...ClaimProperties} />
        </HeroWrapper>
    );
};