import React, { useEffect, useState } from "react";
import {
  navbarClassNames,
  Item,
  NavbarWrapper,
  LangFlag,
  LangName,
  LangTriggerWrapper,
  FlagList,
  FlagListItem,
  PopoverWrapper, Logo,
} from "./Navbar.styled";
import { PL, GB } from "country-flag-icons/react/1x1";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Popover,
  PopoverTrigger,
  PopoverContent,

  useDisclosure,
} from "@nextui-org/react";
import { useIntl } from "gatsby-plugin-intl";

import { LOGO, LOGO_WHITE } from "../../assets";
import { Spin as Hamburger } from "hamburger-react";
import { Modals } from "../../components/Modals";

import CalendlyForm from "../../components/CalendlyForm/CalendlyForm";
export const navbarItems = [
  { text: "Produkt", href: "#product" },
  { text: "Funkcje", href: "#funkcje" },
  { text: "Jak to działa", href: "#jaktodziala" },
  { text: "Kontakt", href: "#footer" },
];

export const Navbar = () => {
  const intl = useIntl();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("up");
  const [scrollPosition, setScrollPosition] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;

      if (lastScrollY > 20) {
        setScrollPosition(true);
      } else {
        setScrollPosition(false);
      }
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return (
    <>
      <NavbarWrapper
        isDark={scrollPosition}
        direction={scrollDirection}
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        classNames={navbarClassNames}
        isBlurred={false}
      >
        <Logo className="flex-0 mr-[70px]" style={{ flex: "unset" }}>
          <img src={LOGO_WHITE} />
        </Logo>
        <NavbarMenuToggle
          icon={(isOpen) => <Hamburger toggled={isOpen} size={18} />}
          className="lg:hidden text-white mr-[15px] "
        />
        <NavbarContent className="lg:flex hidden gap-4 justify-between flex-1">
          <div className="flex flex-1 ">
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
              onPress={() => handleOpen()}
              style={{ fontSize: 15, height: 40 }}
              size="lg"
              variant="bordered"
              radius="full"
              id={"cp-trigger"}
              className="text-white relative overflow-visible rounded-full  after:content-[''] after:absolute after:rounded-full after:inset-0   after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0 "
            >
              Umów bezpłatne spotkanie
            </Button>

            <PopoverWrapper>
              <Popover showArrow={false} placement="bottom" backdrop="opaque">
                <PopoverTrigger>
                  <LangTriggerWrapper>
                    <LangFlag>
                      {
                        {
                          pl: <PL title="Polska" />,
                          en: <GB title="Englisch" />,
                        }[intl.locale]
                      }
                      <PL title="Polska" />
                    </LangFlag>
                    <LangName>{intl.locale.toUpperCase()}</LangName>
                  </LangTriggerWrapper>
                </PopoverTrigger>
                <PopoverContent className="w-[140px]  bg-transparent ">
                  <FlagList>
                    <FlagListItem onClick={() => (window.location = `/pl`)}>
                      <LangFlag>
                        <PL title="Polski" />
                      </LangFlag>
                      <LangName>Polski</LangName>
                    </FlagListItem>
                    <FlagListItem onClick={() => (window.location = `/en`)}>
                      <LangFlag>
                        <GB title="English" />
                      </LangFlag>
                      <LangName>English</LangName>
                    </FlagListItem>
                  </FlagList>
                </PopoverContent>
              </Popover>
            </PopoverWrapper>
          </div>
        </NavbarContent>
        <NavbarMenu className="pt-5">
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

      <Modals isOpen={isOpen} onClose={onClose} size={"xl"}>
        <CalendlyForm />
      </Modals>
    </>
  );
};
