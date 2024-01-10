import styled from "styled-components";
export const SectionAbout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 1248px) {
    flex-direction: column;
  }
`;
export const ColLeft = styled.div`
  padding-right: 40px;
  @media (max-width: 1248px) {
    padding-right: 0px;
    margin-bottom: 15px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const VariantSwitcher = styled.div`
  @media (max-width: 1248px) {
    margin: 25px 0;
    display: block;
  }
`;

export const Col = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 1248px) {
    display: flex;
    grid-template-columns: 1fr;
  }
`;

export const SpinnerPlaceholder = styled.div`
  display: flex;

  width: 964px;
  height: 945px;
  @media (max-width: 1248px) {
    width: 100%;
    height: 300px;
  }
  align-items: center;
  justify-content: center;
  background: #f3f3f3;
  border-radius: 40px;
`;

export const ImageFull = styled.div`
  grid-row: span 3;
  color: white;
  width: 612px;
  @media (max-width: 1248px) {
    display: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageSmall = styled.div`
  color: white;
  width: 281px;
  display: flex;
  justify-content: center;
  align-self: center;
`;
