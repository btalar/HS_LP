import React, { useState } from "react";
import { navbarClassNames, Item, NavbarWrapper } from "./Navbar.styled";
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
import {   useIntl } from "gatsby-plugin-intl";

import { LOGO, LOGO_WHITE } from "../../assets";

const navbarItems = [
  { text: "Home", href: "#" },
  { text: "Produkt", href: "#" },
  { text: "Funkcje", href: "#" },
  { text: "Kontakt", href: "#" },
];

export const Navbar = () => {
  const intl = useIntl();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <NavbarWrapper
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={navbarClassNames}
      position="static"
      isBlurred={false}
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
            radius="full"
          >
            Kontakt z konsultantem
          </Button>
          <Dropdown backdrop="blur">
            <DropdownTrigger>
              <Button
                style={{ fontSize: 16, height: 60 }}
                size="lg"
                variant="bordered"
                className="text-white"
              >
                {intl.locale}
              </Button>
            </DropdownTrigger>
            <DropdownMenu onAction={(e) => (window.location = `/${e}`)}>
              <DropdownItem key="pl">PL</DropdownItem>
              <DropdownItem key="en">EN</DropdownItem>
              <DropdownItem key="de">DE</DropdownItem>
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
    </NavbarWrapper>
  );
};
