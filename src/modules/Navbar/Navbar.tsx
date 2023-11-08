import React, { useEffect, useState } from "react";
import { navbarClassNames, NavbarStyled } from "./Navbar.styled";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <NavbarStyled
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={navbarClassNames}
    >
      <NavbarBrand>
        <img src={LOGO} />
      </NavbarBrand>
      <NavbarMenuToggle className="lg:hidden" />
      <NavbarContent className="lg:flex hidden gap-4" justify="center">
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
      <NavbarMenu>
        {navbarItems.map(({ text, href }, index) => (
          <NavbarMenuItem key={`${text}-${index}`}>
            <Link
              onPress={() => setIsMenuOpen(false)}
              className="w-full"
              href={`#${href}`}
              size="lg"
              color="foreground"
            >
              {text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarStyled>
  );
};
