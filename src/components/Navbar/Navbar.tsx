import React, { useEffect, useState } from "react";
import { NavbarStyled } from "./Navbar.styled";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import logo from "./../../assets/logo.png";

const navbarItems = [
  { text: "Generuj więcej rozmów", href: "#" },
  { text: "Pod", href: "#" },
  { text: "Zalety", href: "#" },
  { text: "Funkcjonalności", href: "#" },
];

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setIsScroll(Boolean(10 > window.scrollY));
    });
  }, []);

  return (
    <NavbarStyled mode={isScroll ? "light" : "dark"} position="sticky">
      <NavbarBrand>
        <img src={logo} />
      </NavbarBrand>
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

export default Navbar;
