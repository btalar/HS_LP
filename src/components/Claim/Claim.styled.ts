import styled from "styled-components";

export const Title = styled.h1`
  font-size: 68px;
  color: #192038;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -1px;
  max-width: 600px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Separator = styled.hr`
  width: 256px;
  height: 2px;
  background: #2e3a59;
`;

export const Description = styled.p`
  font-size: 15px;
  font-weight: normal;
  line-height: 1.7;
  max-width: 730px;
  color: #2e3a59;
`;
