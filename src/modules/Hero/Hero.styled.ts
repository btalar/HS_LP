import styled from "styled-components";

export const HeroWrapper = styled.div<{
    background: string;
    mobileBackground: string;
}>`
  background-image: url("${(props) => props.background}");
  max-width: 1920px;
  margin: 0 auto;
  height: 100vh; 
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  @media (max-width: 996px) {
    background-image: url("${(props) => props.mobileBackground}");
  }
`;
