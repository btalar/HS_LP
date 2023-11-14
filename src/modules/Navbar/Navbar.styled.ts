import styled from "styled-components";
import {Link, Navbar} from "@nextui-org/react";

export const NavbarStyled = styled(Navbar)`
  background-color: #fff;
  transition: 1s;
  position: fixed; 
  font-size: 12px; 
  padding: 10px 0;
`;

export const Item = styled.p` 
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0 8px; 
   
`;

export const navbarClassNames = {
  wrapper: "max-w-[1200px]",
};
