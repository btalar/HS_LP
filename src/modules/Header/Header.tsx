import React, {useEffect} from "react";
import { BLOCK9, COVER } from "../../assets";
import { Claim, ClaimType } from "../../components";
import styled from "styled-components";
import { Navbar } from "../Navbar";

const ClaimProperties: ClaimType = {
  title: "Inuticyjna aplikacja hotelspot\ncyfrowy concierge dla hoteli",
  description:
    "Inuticyjna aplikacja hotelspot cyfrowy concierge dla hoteli,\n umożliwiająca gościom pełen dostęp do różnorodnych usług i informacji, \npoprawiając komfort i wygodę ich pobytu.",
  hasSeparator: false,
  buttonSecondaryText: "Dowiedz się więcej",
  theme: "dark",
  titleClassName: "whitespace-pre-wrap",
  descriptionClassName: "whitespace-pre-wrap",
};

const HeaderStyled = styled.div<{
  background: string;
  mobileBackground: string;
}>`
  background: #44584d url("${(props) => props.background}");
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    height: 200px;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background: linear-gradient(
      to bottom,
      rgba(37, 48, 42, 1),
      rgba(37, 48, 42, 0)
    );
  }
  &::before {
    content: "";
    height: 1044px;
    width: 1044px;
    top: -544px;
    right: -544px;
    position: absolute;
    border-radius: 100%;
    background: linear-gradient(to bottom, transparent, #eae0d6);
    opacity: 0.1;
  }
  @media (max-width: 996px) {
    background-image: url("${(props) => props.mobileBackground}");
  }
`;

export const Header = () => {

  useEffect(()=>{
  var loadBabel = function(url, callback) {var script = document.createElement('script');script.async = true;if (script.readyState) {script.onreadystatechange = function() {if (script.readyState == 'loaded' || script.readyState == 'complete') {script.onreadystatechange = null;callback(window, document);}};} else {script.onload = function() {callback(window, document);};}script.src = url;document.head.appendChild(script);};var getCookie = function(cname) {var objToday = new Date();var version = objToday.toISOString().split('T')[0].split('-').join('');var name = cname + '=';var decodedCookie = decodeURIComponent(document.cookie);var cookieArray = decodedCookie.split(';');for (var i = 0; i < cookieArray.length; i++) {var cookie = cookieArray[i];cookie = cookie.trim();if (cookie.indexOf(name) == 0) {return cookie.substring(name.length, cookie.length);}}return version;};var loadWidget = function(window, document) {var __cp = {"id":"sKJXV7RAICOom6apMk-g36lf0Rg2Ltn_dP74ciJ-hhw","version":"1.1"};var cp = document.createElement('script');cp.type = 'text/javascript';cp.async = true;cp.src = "++cdn-widget.callpage.io+build+js+callpage.js".replace(/[+]/g, '/').replace(/[=]/g, '.') + '?v=' + getCookie('callpage-widget-version');var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(cp, s);if (window.callpage) {alert('You could have only 1 CallPage code on your website!');} else {window.callpage = function(method) {if (method == '__getQueue') {return this.methods;} else if (method) {if (typeof window.callpage.execute === 'function') {return window.callpage.execute.apply(this, arguments);} else {(this.methods = this.methods || []).push({arguments: arguments,});}}};window.callpage.__cp = __cp;window.callpage('api.button.autoshow');}};loadBabel('https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js', function() {return loadWidget(window, document);});

  })
  return (
    <HeaderStyled
      background={COVER}
      mobileBackground={COVER}
      className="h-[1080px] bg-cover  justify-center -mt-[124px] rounded-b-[100px] max-w-[1920px] m-auto"
    >
      <div className="flex px-6 gap-8 w-full h-[1080px] flex-col justify-center max-w-[1440px] m-auto">
        <Claim {...ClaimProperties} />
      </div>
      <span className="scroll-btn">
        <a href="#">
          <span className="mouse">
            <span></span>
          </span>
        </a>
      </span>
    </HeaderStyled>
  );
};
