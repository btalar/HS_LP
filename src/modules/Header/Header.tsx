import React from "react";
import { HERO_BG } from "../../assets";
import { Claim } from "../../components";
export const Header = () => {
  return (
    <div
      className="h-screen bg-center bg-cover flex justify-center"
      style={{ backgroundImage: `url(${HERO_BG})` }}
    >
      <div className="flex px-6 w-full h-full flex-col justify-center max-w-[1200px] m-auto">
        <Claim
          title="Digital POD "
          description="Interaktywny cyfrowy concierge hotelowy z dotykowym ekranem,
                który zapewnia gościom wszystkie niezbędne informacje dotyczące udogodnień
                oraz wszystkich usług hotelowych, rekomendacje lokalnych wydarzeń, wycieczek,
                restauracji."
          hasSeparator
          buttonText="Umów prezentacje "
        />
      </div>
    </div>
  );
};
