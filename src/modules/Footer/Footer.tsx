import React from "react";
import {Claim, SectionWrapper} from "../../components";
import {CheckboxLabel, SubmitButton, TextAreaInput, TextInput} from "./Footer.styled";
import {Image} from "@nextui-org/react";
import {FOOTER_RECT} from "../../assets";
import {LOGO} from '../../assets'

export const Footer = () => {
    return (
        <SectionWrapper>
            <Claim title="Skontaktuj się"/>
            <SectionWrapper noGap>
                Skontaktuj się bezpośrednio poprzez telefon:
                <h2 className="text-[24px] font-[600] text-[#006fee] mt-[12px]">+48 123 456 789</h2>
                <div className="contact-form max-w-[628px] mt-[24px] text-[12px] text-[#2e3a59]">
                    <p>Lub wypełnij poniższy formularz by skontaktować się mailowo:</p>
                        <div className="input-fields">
                            <div className="upper w-[100%] flex justify-between gap-[24px] mt-[12px] mb-[12px]">
                                <TextInput placeholder='Imię'/>
                                <TextInput placeholder='Nazwisko'/>
                            </div>
                            <div className="middle w-[100%] flex justify-between gap-[24px] mb-[12px]">
                                <TextInput placeholder='E-mail'/>
                                <TextInput placeholder='Numer telefonu'/>
                            </div>
                            <div className="lower w-[100%] flex justify-between gap-[24px]">
                            <TextAreaInput placeholder='Dodatkowe informacje'/>
                            </div>
                        </div>
                    <div className="submit-section flex items-end">
                    <div className="privacy-policy-check flex justify-between gap-[10px] mt-[24px]">
                        <input type="checkbox" id="privacy-checkbox" className="custom-checkbox hidden"/>
                        <CheckboxLabel htmlFor='privacy-checkbox' className='checkbox-label'/>
                    <p>Potwierdzam iż, zapoznałem się z <span className='cursor-pointer underline font-[600]'>polityką prywatności</span> i wyrażam zgodę na przetwarzanie moich danych osobowych w celu udzielenia odpowiedzi na moją wiadomość.</p>
                    </div>
                        <SubmitButton>Wyślij wiadomość</SubmitButton>
                    </div>
                    <p className='mt-[25px]'>Kontakt bezpośredni: <span className='cursor-pointer text-[#006fee] text-[14px] font-[500]'>example@example.com</span></p>
                </div>
                {/*<img src={FOOTER_RECT} alt='' />*/}
            </SectionWrapper>
            <div className="footer-info_wrapper border-t border-[#c5cee0] py-[64px] text-[#192038] text-[14px]">
            <div className="footer-info flex justify-between max-w-[423px]">
                <div className="left">
                <img className='mb-[24px]' src={LOGO} />
                    <ul>
                        <li className='mb-[12px]'>Nazwa spółki/działaności</li>
                        <li className='mb-[12px]'>Numer REGON</li>
                        <li className='mb-[12px]'>NIP</li>
                        <li className='mb-[12px] cursor-pointer text-[#006fee]'>example@example.com</li>
                        <li className=' cursor-pointer text-[#006fee]'>+48 123 456 789</li>
                    </ul>
                </div>
                <div className="right mt-[42px]">
                    <h4 className='mb-[24px] text-[#2e3a59] text-[16px] font-[500]'>Nawigacja</h4>
                    <ul>
                        <li className='mb-[12px]'>Generuj więcej rozmów</li>
                        <li className='mb-[12px]'>Pod</li>
                        <li className='mb-[12px]'>Zalety</li>
                        <li className='mb-[12px]'>Fukcjonalności</li>
                        <li>Kontakt</li>
                    </ul>
                </div>
            </div>
            </div>
            <div className="footer-copyright flex items-center justify-between text-[12px] text-[#2e3a59] gap-[24px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20 6.66675C22.4833 6.69509 24.7268 7.30542 26.7304 8.49776C28.7101 9.6663 30.3569 11.3232 31.5134 13.31C32.6985 15.3256 33.3051 17.5827 33.3334 20.0812C33.263 23.4997 32.1848 26.4195 30.0987 28.8405C28.0126 31.2615 25.3408 32.7592 22.575 33.3334V23.7489H25.1898L25.7812 19.9824H21.8217V17.5155C21.7997 17.0041 21.9614 16.5017 22.2776 16.0991C22.5943 15.6955 23.1519 15.4833 23.9505 15.4626H26.3415V12.1633C26.3072 12.1522 25.9816 12.1086 25.3649 12.0323C24.6654 11.9505 23.962 11.9068 23.2578 11.9014C21.6639 11.9087 20.4034 12.3583 19.4762 13.2502C18.5489 14.1418 18.0753 15.4317 18.0552 17.12V19.9824H15.042V23.7489H18.0552V33.3334C14.6592 32.7592 11.9874 31.2615 9.9013 28.8405C7.8152 26.4195 6.73702 23.4997 6.66663 20.0812C6.69479 17.5826 7.30144 15.3255 8.48657 13.31C9.64303 11.3232 11.2899 9.6663 13.2696 8.49776C15.2731 7.30565 17.5166 6.69532 20 6.66675Z" fill="#2E3A59"/>
                </svg>
                <div className="line border-t border-[#c5cee0] w-[100%]"></div>
                <p className='min-w-[180px]'>© Copyright 2023 nazwa spółki</p>
            </div>
        </SectionWrapper>
    );
};
