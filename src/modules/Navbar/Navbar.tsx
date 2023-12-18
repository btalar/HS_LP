import React, { useState } from "react";
import { Navbar as NextNavbar } from "@nextui-org/react";
import { navbarClassNames, Item } from "./Navbar.styled";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import { LOGO, LOGO_WHITE } from "../../assets";

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
    <NextNavbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={navbarClassNames}
      position="static"
    >
      <NavbarBrand className="flex-0 mr-[70px]" style={{ flex: "unset" }}>
        <img src={LOGO_WHITE} />
      </NavbarBrand>
      <NavbarMenuToggle className="lg:hidden" />
      <NavbarContent className="lg:flex hidden gap-4 justify-between flex-1">
        <div className="flex flex-1 gap-[60px]">
          {navbarItems.map(({ href, text }, index) => (
            <NavbarItem key={index}>
              <Link color="foreground" href={href}>
                <Item className="font-[15px]">{text}</Item>
              </Link>
            </NavbarItem>
          ))}
        </div>
        <div className="flex flex-1 gap-2 justify-end">
          <Button
            style={{ fontSize: 15, height: 60 }}
            size="lg"
            variant="bordered"
            className="text-white"
          >
            Umów prezentacje
          </Button>
          <Dropdown>
            <DropdownTrigger>
              <Button
                style={{ fontSize: 15, height: 60 }}
                size="lg"
                variant="bordered"
                className="text-white"
              >
                PL
              </Button>
            </DropdownTrigger>
            <DropdownMenu className={""} onAction={(key) => alert(key)}>
              <DropdownItem key="new"> English</DropdownItem>
              <DropdownItem key="copy">Deutch</DropdownItem>
              <DropdownItem key="edit">Franch</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
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
    </NextNavbar>
  );
};
