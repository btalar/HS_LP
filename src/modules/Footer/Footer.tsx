import React from "react";
import { Claim, SectionWrapper } from "../../components";
import { FooterInfo, RectImg } from "./Footer.styled";
import { Button, Image, Input, Textarea } from "@nextui-org/react";
import { FOOTER_RECT } from "../../assets";
import { LOGO } from "../../assets";
import { useIntl } from "gatsby-plugin-intl";
import { useForm } from "react-hook-form";
import { Newsletter } from "../../components/Newsletter";
import { ContactForm } from "../../components/Contact";


type Inputs = {
  example: string;
  exampleRequired: string;
};

export const Footer = () => {
  const intl = useIntl();

  const {

    formState: { errors },
  } = useForm<Inputs>();

  const navbarItems = [
    { text: intl.formatMessage({ id: 'menu.product' }), href: '#product' },
    { text: intl.formatMessage({ id: 'menu.function' }), href: '#functions' },
    { text: intl.formatMessage({ id: 'menu.howItWorks' }), href: '#howItWorks' },
    { text: intl.formatMessage({ id: 'menu.contact' }), href: '#kontakt' },
  ];

  return (
    <SectionWrapper id="kontakt" noMarginVertical isFluid className="py-8">
      <SectionWrapper
        className="mt-0 max-w-[1440px] flex gap-x-6 justify-between lg:px-6 px-0"
        noGap
      >
        <div>
          <Claim
            titleClassName="text-[40px] md:text-[60px]"
            title={intl.formatMessage({ id: 'contact.title' })}
          />
          <div className="my-[20px] md:my-[40px]">
            {intl.formatMessage({ id: 'contact.desc.line1' })}<br />
            {intl.formatMessage({ id: 'contact.desc.line2' })}
          </div>
          <h2 className="text-[32px] font-[600] mt-[25px]">+48 794 099 609</h2>
          <h2 className="my-[25px] text-[32px] font-[600] mt-[12px]">
            kontakt@hotelspot.pl
          </h2>
          <ContactForm />
        </div>
        <RectImg src={FOOTER_RECT} />
      </SectionWrapper>
      <div className="footer-info_wrapper border-t border-[#c5cee0] px-0 lg:px-6 py-[64px] text-[#192038] text-[14px] max-w-[1440px] mx-auto">
        <FooterInfo>
          <div className="flex-1 flex flex-col items-center md:flex-row gap-5 md:gap-20 ">
            <div className="left flex flex-col justify-end text-center md:text-left">
              <Image className="mb-[40px] md:mb-[80px]" src={LOGO} />
              <ul className="">
                <li className="mb-[12px] text-[14px]">
                  <strong>IntCode</strong>
                </li>
                <li className="mb-[12px] text-[14px]">Nip: 7343535738</li>
                <li className="mb-[12px] text-[14px]">Regon: 363126560</li>
                <li className="mb-[12px] text-[14px] cursor-pointer">
                  kontakt@hotelspot.pl
                </li>
                <li className="mb-[12px] text-[14px]  cursor-pointer">
                  +48 794 099 609
                </li>
              </ul>
            </div>
            <div className="right flex flex-col justify-end h-full text-center md:text-left">
              <ul className="flex flex-col justify-end">
                {navbarItems.map(({ text, href }) => {
                  return (
                    <a href={href} className="mb-[12px] text-[14px] font-bold">
                      {text}
                    </a>
                  );
                })}
              </ul>
            </div>
          </div>
          <Newsletter />
        </FooterInfo>
      </div>
      <div className="footer-copyright flex items-center justify-between text-[12px] text-[#2e3a59] gap-[8px] md:gap-[15px] max-w-[1440px] mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/></svg>
        <div className="line border-t border-[#c5cee0] w-[100%] flex-1"></div>
        <p>© Copyright 2024 Hotelspot</p>
      </div>
    </SectionWrapper>
  );
};
