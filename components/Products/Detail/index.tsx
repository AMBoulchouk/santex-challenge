import React, { useState } from "react";
import styled from "@emotion/styled";
import { Item } from "../../../services/types/product";
import Image from "next/image";
import { getPrice } from "../../../services/utils";
import { useStorageContext } from "../../../services/context";
import { addProduct } from "../../../services/reducer/actions";
import { useRouter } from "next/router";
import QuantitySelector from "../QuantitySelector";

const Container = styled.div`
  background-color: white;
  background-image: url("https://thumbs.dreamstime.com/b/iridescent-background-pastel-color-gradient-effect-foil-rainbow-texture-neon-colors-metallic-sparkly-metall-soft-backdrop-design-201546512.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  gap: 1.25rem;
  height: fit-content;
  @media (min-width: 900px) {
    padding: 1.3rem;
    gap: 1.75rem;
    flex-direction: row;
  }
  @media (min-width: 1200px) {
    padding: 1.75rem;
    gap: 2.5rem;
    flex-direction: row;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  width: 288px;
  height: 200px;
  align-self: center;
  @media (min-width: 480px) {
    width: 388px;
    height: 250px;
  }
  @media (min-width: 900px) {
    align-self: flex-start;
    width: 388px;
    height: 225px;
  }
  @media (min-width: 1200px) {
    align-self: flex-start;
    width: 532px;
    height: 250px;
  }
`;

const ProductInformation = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  align-self: center;
  @media (min-width: 900px) {
    text-align: left;
    align-self: auto;
    max-width: 400px;
  }
`;

const ProductTitle = styled.h2`
  margin-bottom: 4px;
  margin-top: 0;
`;

const ProductDescription = styled.p`
  mmargin-bottom: 4px;
`;

const ProductPrice = styled.span`
  font-size: 20px;
  line-height: 24px;
  font-weidth: 600;
`;

const AddToCartButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-size: 20px;
  line-height: 24px;
  margin-top: 30px;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    background-color: rgba(1, 1, 1, 70%);
  }
  @media (min-width: 900px) {
    max-width: 200px;
  }
`;

interface ProductDetailProps {
  product?: Item;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const [, dispatch] = useStorageContext();

  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    dispatch(addProduct({ product, quantity }));
    router.push("/");
  };

  return (
    <Container>
      <ImgContainer>
        <Image
          src={product.featuredAsset?.source || "/ban-image-photo-icon.png"}
          priority
          alt={product.name}
          layout="fill"
          objectFit="contain"
        />
      </ImgContainer>
      <ProductInformation>
        <ProductTitle>Description</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>Price: ${getPrice(product)}</ProductPrice>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <AddToCartButton onClick={handleAddToCart}>Add to cart</AddToCartButton>
      </ProductInformation>
    </Container>
  );
};

export default ProductDetail;
