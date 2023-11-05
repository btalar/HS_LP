import React from "react";
import Navbar from "../Navbar/Navbar";
import heroBackground from "./../../assets/hero-img-desktop.webp";
import Claim from "../Claim/Claim";
const Header = () => {
  return (
    <div
      className="h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <Navbar />
      <div className="flex px-6 w-full h-full flex-col justify-center max-w-[1200px] m-auto">
        <Claim title="Digital POD "
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

export default Header;
