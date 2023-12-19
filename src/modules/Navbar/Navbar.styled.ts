import styled from "styled-components";
import { Navbar as NextNavbar } from "@nextui-org/react";

export const NavbarWrapper = styled(NextNavbar)<{ direction: "down" | "up" }>`
  background: transparent !important;
  backdrop-filter: none !important;
  padding: 30px 0;
  transition: 0.25s;
  top: ${(props) => (props.direction === "up" ? 0 : "-240px")} !important;
`;

export const Item = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0 8px;
  color: white;
`;

export const navbarClassNames = {
  wrapper: "max-w-[1440px]",
};
