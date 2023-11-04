import styled from "styled-components";
import { Navbar } from "@nextui-org/react";

export const NavbarStyled = styled(Navbar)<{ mode: "dark" | "light" }>`
  background-color: ${({ mode }) =>
    ({
      dark: "transparent",
      light: "white",
    })[mode]};
  transition: 1s;
`;
