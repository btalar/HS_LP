import { Button } from '@nextui-org/react';
import React from 'react';

import heroBackground from '../../assets/hero-img-desktop.webp';
import Navbar from '../Navbar/Navbar';
import { Description, Separator, Title } from './header.styled';

const Header = () => (
  <div
    className="h-screen bg-green-900 bg-center bg-cover"
    style={{ backgroundImage: `url(${heroBackground})` }}
  >
    <Navbar />
    <div className="flex px-6 gap-4 w-full h-full flex-col justify-center max-w-[1024px] gap-y-8 m-auto">
      <Title>Digital POD</Title>
      <Separator />
      <Description>
        Interaktywny cyfrowy concierge hotelowy z dotykowym ekranem, który
        zapewnia gościom wszystkie niezbędne informacje dotyczące udogodnień
        oraz wszystkich usług hotelowych, rekomendacje lokalnych wydarzeń,
        wycieczek, restauracji.
      </Description>
      <section className="gap-x-8 flex">
        <Button size="lg" color="warning" variant="shadow">
          Umów prezentacje
        </Button>
        <Button size="lg" color="primary" variant="flat">
          Wypróbuj za darmo
        </Button>
      </section>
    </div>
  </div>
);

export default Header;
