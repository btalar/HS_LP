import React, { useEffect, useState } from "react";
import { NavbarStyled } from "./Navbar.styled";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

import { LOGO } from "../../assets";

const navbarItems = [
  { text: "HotelPod", href: "#" },
  { text: "Główne zalety", href: "#" },
  { text: "Funkcjonalności", href: "#" },
  { text: "Korzyści", href: "#" },
  { text: "Aplikacja Mobilna", href: "#" },
  { text: "Store", href: "#" },
  { text: "Kontakt", href: "#" },
];

export const Navbar = () => {


  return (
    <NavbarStyled >
      <NavbarBrand> <img src={LOGO} />  </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navbarItems.map(({ href, text }, index) => (
          <NavbarItem key={index}>
            <Link color="foreground" href={href}>
              {text}
            </Link>
          </NavbarItem>
        ))}
        <Button color="primary" variant="flat">
          Umów prezentacje
        </Button>
      </NavbarContent>
    </NavbarStyled>
  );
};

