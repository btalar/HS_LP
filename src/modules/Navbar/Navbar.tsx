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
  PopoverWrapper, Logo, CurrentLangName,
  MobileLink,
} from "./Navbar.styled";
import { PL, GB, DE, FR } from "country-flag-icons/react/1x1";
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
  PopoverContent, Divider,
} from "@nextui-org/react";
import { useIntl } from "gatsby-plugin-intl";

import { LOGO_WHITE } from "../../assets";
import { Menu} from "react-feather";


export const Navbar = () => {
  const intl = useIntl();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("up");
  const [scrollPosition, setScrollPosition] = useState<boolean>(false);


  const navbarItems = [
    { text: intl.formatMessage({ id: 'menu.product' }), href: '#product' },
    { text: intl.formatMessage({ id: 'menu.function' }), href: '#funkcje' },
    { text: intl.formatMessage({ id: 'menu.howItWorks' }), href: '#jaktodziala' },
    { text: intl.formatMessage({ id: 'menu.contact' }), href: '#kontakt' },
  ];
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
            icon={ <Menu /> }
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
              href="#cp-widget"
              onClick={() => { window.location.href = "#cp-widget" }}
              style={{ fontSize: 15, height: 40 }}
              size="lg"
              variant="bordered"
              radius="full"
              className="text-white relative overflow-visible rounded-full  after:content-[''] after:absolute after:rounded-full after:inset-0   after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0 "
            >
              {intl.formatMessage({ id: 'menu.cta' })}

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
                          fr: <FR title="French" />,
                          de: <DE title="German" />,
                        }[intl.locale]
                      }
                      <PL title="Polska" />
                    </LangFlag>
                    <CurrentLangName>{intl.locale.toUpperCase()}</CurrentLangName>
                  </LangTriggerWrapper>
                </PopoverTrigger>
                <PopoverContent className="w-[140px]  bg-white ">
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
                    <FlagListItem onClick={() => (window.location = `/fr`)}>
                      <LangFlag>
                        <FR title="French" />
                      </LangFlag>
                      <LangName>French</LangName>
                    </FlagListItem>
                    <FlagListItem onClick={() => (window.location = `/de`)}>
                      <LangFlag>
                        <DE title="German" />
                      </LangFlag>
                      <LangName>German</LangName>
                    </FlagListItem>

                  </FlagList>
                </PopoverContent>
              </Popover>
            </PopoverWrapper>
          </div>
        </NavbarContent>
        <NavbarMenu className=" bg-gradient-to-t from-white via-white to-transparent h-screen flex items-center justify-center">

            <Popover showArrow={false} placement="bottom" backdrop="opaque">
              <PopoverTrigger>
                <LangTriggerWrapper>
                  <LangFlag>
                    {
                      {
                        pl: <PL title="Polska" />,
                        en: <GB title="Englisch" />,
                        fr: <FR title="French" />,
                        de: <DE title="German" />,
                      }[intl.locale]
                    }
                    <PL title="Polska" />
                  </LangFlag>
                </LangTriggerWrapper>
              </PopoverTrigger>
              <PopoverContent className="w-[140px]  bg-white ">
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
                  <FlagListItem onClick={() => (window.location = `/fr`)}>
                    <LangFlag>
                      <FR title="French" />
                    </LangFlag>
                    <LangName>French</LangName>
                  </FlagListItem>
                  <FlagListItem onClick={() => (window.location = `/de`)}>
                    <LangFlag>
                      <DE title="German" />
                    </LangFlag>
                    <LangName>German</LangName>
                  </FlagListItem>

                </FlagList>
              </PopoverContent>
            </Popover>
          <Divider/>
          {navbarItems.map(({ text, href }, index) => (
            <NavbarMenuItem key={`${text}-${index}`}>
              <MobileLink
                onPress={() => setIsMenuOpen(false)}
                className="w-full"
                href={`#${href}`}
                color="foreground"
              >
                {text}
              </MobileLink>
            </NavbarMenuItem>
          ))}
          <Divider/>
        </NavbarMenu>
      </NavbarWrapper>

    </>
  );
};
