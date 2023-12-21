import styled from "styled-components";
import { Navbar as NextNavbar } from "@nextui-org/react";

export const NavbarWrapper = styled(NextNavbar)<{ direction: "down" | "up" , isDark}>`
  backdrop-filter: none !important; 
   background-color: ${(props) => (props.isDark ? '#44584D' : "transparent")} !important;
  padding: 10px 0;
  transition: 0.5s;
  top: ${(props) => (props.direction === "up" ? 0 : "-240px")} !important;
`;

export const Item = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0 8px;
  color: white;
`;

export const LangTriggerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 15px;
`;

export const LangFlag = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 100px; 
  overflow: hidden; 
`;

export const LangName = styled.div`
  color: #fff;
  margin-left:8px;
`;


export const FlagList = styled.ul`
 
  margin: 10px 0;
  width: 100%;  
`;

export const FlagListItem = styled.li`
  height: 35px; 
  overflow: hidden;
  margin: 10px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
`;

export const navbarClassNames = {
  wrapper: "max-w-[1440px]",
};
