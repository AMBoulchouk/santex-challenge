import React from "react";
import styled from "@emotion/styled";
import { CartX } from "@styled-icons/bootstrap";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  align-items: center;
  background-color: #f5f5f5;
`;

const NoProductsTitle = styled.h4`
  text-align: center;
`;

const CartDescription = styled.span`
  margin-top: 0.5rem;
  text-align: center;
`;

const EmptyCart = () => (
  <Container>
    <CartX size={40} />
    <NoProductsTitle>Empty Cart</NoProductsTitle>
    <CartDescription>Please, search for products in the homepage.</CartDescription>
  </Container>
);

export default EmptyCart;
