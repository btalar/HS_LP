import React from "react";
import Navbar from "../Navbar/Navbar";
import styled from "styled-components";

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: red;
`;

const Header = () => {
  return (
    <div>
      <Navbar />
      <Container>header</Container>
    </div>
  );
};

export default Header;
