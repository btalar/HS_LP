import React, { useEffect, useState } from "react";

import { navbarClassNames, NavbarStyled , Item} from "./Navbar.styled";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown, DropdownTrigger, DropdownMenu, DropdownItem
} from "@nextui-org/react";

import { LOGO } from "../../assets";

const navbarItems = [
  { text: "Home", href: "#" },
  { text: "Produkt", href: "#" },
  { text: "Funkcjonalności", href: "#" },
  { text: "Blog", href: "#" },
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
              <Item>{text}</Item>
            </Link>
          </NavbarItem>
        ))}
        <Button  radius="full"  variant="bordered" className={"text-white border-primary bg-primary"}>
          Umów prezentacje
        </Button>
        <Dropdown>
          <DropdownTrigger>
            <Button
                variant="bordered"
                color="transparent"
            >
             PL
            </Button>
          </DropdownTrigger>
          <DropdownMenu className={''}
              onAction={(key) => alert(key)}
          >
            <DropdownItem key="new"> English</DropdownItem>
            <DropdownItem key="copy">Deutch</DropdownItem>
            <DropdownItem key="edit">Franch</DropdownItem>
          </DropdownMenu>
        </Dropdown>
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
