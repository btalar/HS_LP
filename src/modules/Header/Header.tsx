import React from "react";
import { HERO_BG } from "../../assets";
import { Claim, ClaimType } from "../../components";

const ClaimProperties: ClaimType = {
  title: "Digital POD ",
  description: `Interaktywny cyfrowy concierge hotelowy z dotykowym ekranem,
  który zapewnia gościom wszystkie niezbędne informacje dotyczące udogodnień
  oraz wszystkich usług hotelowych, rekomendacje lokalnych wydarzeń, wycieczek,
  restauracji.`,
  hasSeparator: true,
  buttonPrimaryText: "Umów prezentacje ",
  buttonSecondaryText: "Wypróbuj za darmo",
};

export const Header = () => {
  return (
    <div
      className="h-screen bg-center bg-cover flex justify-center"
      style={{ backgroundImage: `url(${HERO_BG})` }}
    >
      <div className="flex px-6 gap-8 w-full h-full flex-col justify-center max-w-[1200px] m-auto">
        <Claim {...ClaimProperties} />
      </div>
    </div>
  );
};
