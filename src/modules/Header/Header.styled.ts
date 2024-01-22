import styled from "styled-components";

export const HerderWrapper = styled.div` 
  height: 100%;
  max-width: 1410px;
  margin:0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between; 
`;

export const IcoBlock = styled.div`
   height: 100%; 
   width: 220px;
   margin: 0 120px;
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 996px) {
    display: none;
  }
`;

export const InfoIco = styled.div`
   width: 100%;
   height: 114px;
   margin: 5px 0;
   background: #fff;
   border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const InfoIcoImage = styled.img`
 margin: 0 auto;
`;

export const InfoIcoText = styled.p`
 font-size: 12px;
  text-align: center;
  display: inline-block;
  width: 100%;
font-weight: bold;
  margin: 8px 0;
`;


