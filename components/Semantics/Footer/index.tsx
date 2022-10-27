import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.header`
  background-color: black;
  text-align: center;
  height: 3rem;
  padding: 1rem 1rem;
  margin-top: 1rem;
  color: white;
`;

const Footer = () => (
  <>
    <FooterContainer>Vendure E-commerce / AMBoulchouk</FooterContainer>
  </>
);

export default Footer;
