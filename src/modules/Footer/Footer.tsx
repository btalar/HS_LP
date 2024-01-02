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
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <SectionWrapper id="footer" noMarginVertical isFluid className="py-8">
      <SectionWrapper
        className="mt-0 max-w-[1440px] flex gap-x-6 justify-between lg:px-6 px-0"
        noGap
      >
        <div>
          <Claim
            titleClassName="text-[40px] md:text-[60px]"
            title="Skontaktuj się"
          />
          <div className="my-[20px] md:my-[40px]">
            Skontaktuj się bezpośrednio poprzez telefon:
          </div>
          <h2 className="text-[32px] font-[600] mt-[25px]">+48 123 456 789</h2>
          <h2 className="my-[25px] text-[32px] font-[600] mt-[12px]">
            office@hotelspot.com
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
                  Nazwa spółki/działaności
                </li>
                <li className="mb-[12px] text-[14px]">Numer REGON</li>
                <li className="mb-[12px] text-[14px]">NIP</li>
                <li className="mb-[12px] text-[14px] cursor-pointer">
                  example@example.com
                </li>
                <li className="mb-[12px] text-[14px]  cursor-pointer">
                  +48 123 456 789
                </li>
              </ul>
            </div>
            <div className="right flex flex-col justify-end h-full text-center md:text-left">
              <ul className="flex flex-col justify-end">
                <li className="mb-[12px] text-[14px] font-bold">
                  Generuj więcej rozmów
                </li>
                <li className="mb-[12px] text-[14px] font-bold">Pod</li>
                <li className="mb-[12px] text-[14px] font-bold">Zalety</li>
                <li className="mb-[12px] text-[14px] font-bold">
                  Fukcjonalności
                </li>
                <li className="mb-[12px] text-[14px] font-bold">Kontakt</li>
              </ul>
            </div>
          </div>
          <Newsletter />
        </FooterInfo>
      </div>
      <div className="footer-copyright flex items-center justify-between text-[12px] text-[#2e3a59] gap-[6px] md:gap-[24px] max-w-[1440px] mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className="min-h-[40px] min-w-[40px]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 6.66675C22.4833 6.69509 24.7268 7.30542 26.7304 8.49776C28.7101 9.6663 30.3569 11.3232 31.5134 13.31C32.6985 15.3256 33.3051 17.5827 33.3334 20.0812C33.263 23.4997 32.1848 26.4195 30.0987 28.8405C28.0126 31.2615 25.3408 32.7592 22.575 33.3334V23.7489H25.1898L25.7812 19.9824H21.8217V17.5155C21.7997 17.0041 21.9614 16.5017 22.2776 16.0991C22.5943 15.6955 23.1519 15.4833 23.9505 15.4626H26.3415V12.1633C26.3072 12.1522 25.9816 12.1086 25.3649 12.0323C24.6654 11.9505 23.962 11.9068 23.2578 11.9014C21.6639 11.9087 20.4034 12.3583 19.4762 13.2502C18.5489 14.1418 18.0753 15.4317 18.0552 17.12V19.9824H15.042V23.7489H18.0552V33.3334C14.6592 32.7592 11.9874 31.2615 9.9013 28.8405C7.8152 26.4195 6.73702 23.4997 6.66663 20.0812C6.69479 17.5826 7.30144 15.3255 8.48657 13.31C9.64303 11.3232 11.2899 9.6663 13.2696 8.49776C15.2731 7.30565 17.5166 6.69532 20 6.66675Z"
            fill="#2E3A59"
          />
        </svg>
        <div className="line border-t border-[#c5cee0] w-[100%] flex-1"></div>
        <p>© Copyright 2023 Hotelspot</p>
      </div>
    </SectionWrapper>
  );
};
