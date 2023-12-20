import React, { useEffect, useState } from "react";
import {navbarClassNames, Item, NavbarWrapper, LangFlag, LangName, LangTriggerWrapper, FlagList, FlagListItem} from "./Navbar.styled";
import { countries } from 'country-flag-icons'
import { PL, DE, FR, GB} from 'country-flag-icons/react/1x1'
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Popover, PopoverTrigger, PopoverContent, Input
} from "@nextui-org/react";
import { useIntl } from "gatsby-plugin-intl";

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
   console.log(countries)
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("up");
  const [scrollPosition, setScrollPosition] = useState<boolean>(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if ( direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10))
      {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;

      if(lastScrollY > 20){
        setScrollPosition(true)
      }else {
        setScrollPosition(false)
      }

    };


    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);


  return (
    <NavbarWrapper
        isDark={scrollPosition}
      direction={scrollDirection}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={navbarClassNames}
      isBlurred={false}
    >
      <NavbarBrand className="flex-0 mr-[70px]" style={{ flex: "unset" }}>
        <img src={LOGO_WHITE} />
      </NavbarBrand>
      <NavbarMenuToggle className="lg:hidden" />
      <NavbarContent className="lg:flex hidden gap-4 justify-between flex-1">
        <div className="flex flex-1 gap-[20px]">
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
            style={{ fontSize: 15, height: 40 }}
            size="lg"
            variant="bordered"
            radius="full"
            className="text-white relative overflow-visible rounded-full  after:content-[''] after:absolute after:rounded-full after:inset-0   after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
          >
            Kontakt z konsultantem
          </Button>

          <Popover
              showArrow={false}
              placement="bottom"
              backdrop="opaque"
          >
            <PopoverTrigger>
              <LangTriggerWrapper>
              <LangFlag>
                <PL title="Polska" />
              </LangFlag>
                <LangName>PL</LangName>
              </LangTriggerWrapper>
            </PopoverTrigger>
            <PopoverContent className="w-[140px]  bg-transparent " >
              <FlagList>
                <FlagListItem><LangFlag><PL title="Polski" /> </LangFlag>  <LangName>Polski</LangName></FlagListItem>
                <FlagListItem><LangFlag><GB title="Englisch" /> </LangFlag>  <LangName>English</LangName></FlagListItem>
              </FlagList>

            </PopoverContent>
          </Popover>

          {/*<Dropdown backdrop="blur">*/}
          {/*  <DropdownTrigger>*/}
          {/*    <Button*/}
          {/*      style={{ fontSize: 16, height: 40 }}*/}
          {/*      size="lg"*/}
          {/*      variant="bordered"*/}
          {/*      className="text-white"*/}
          {/*    >*/}
          {/*      {intl.locale}*/}
          {/*    </Button>*/}
          {/*  </DropdownTrigger>*/}
          {/*  <DropdownMenu onAction={(e) => (window.location = `/${e}`)}>*/}
          {/*    <DropdownItem key="pl">PL</DropdownItem>*/}
          {/*    <DropdownItem key="en">EN</DropdownItem>*/}
          {/*    <DropdownItem key="de">DE</DropdownItem>*/}
          {/*  </DropdownMenu>*/}
          {/*</Dropdown>*/}
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
