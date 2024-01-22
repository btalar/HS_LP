import styled from "styled-components";
import { Button } from "@nextui-org/react";
export const Title = styled.h1`
  font-size: 40px;
  color: #192038;
  font-weight: 600;
  line-height: 1.4;
  @media (max-width: 768px) {
    font-size: 24px; 
  }
`;

export const Separator = styled.hr`
  width: 256px;
  height: 2px;
  background: #2e3a59;
`;

export const ButtonWrapper = styled(Button)`
 max-width: 200px;
`;



export const Description = styled.p`
  text-align: left;
  @media (max-width: 768px) {
    font-size: 14px;
    text-align: left;
  }
  font-weight: normal;
  line-height: 1.7;
  max-width: 730px;
  color: #2e3a59;
`;
