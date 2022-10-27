import React from "react";
import styled from "@emotion/styled";
import { Item } from "../../../services/types/product";
import Image from "next/image";
import { getPrice } from "../../../services/utils";
import { useRouter } from "next/router";

const Container = styled.div`
  padding: 0.5rem;
  margin: 0.5rem;
  border: 0.5px solid rgba(0, 0, 0, 20%);
  border-radius: 0.8rem;
  background-color: white;
  background-image: url("https://thumbs.dreamstime.com/b/iridescent-background-pastel-color-gradient-effect-foil-rainbow-texture-neon-colors-metallic-sparkly-metall-soft-backdrop-design-201546512.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 12.5rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-align: center;
  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const ImgContainer = styled.div`
  position: relative;
  width: 11rem;
  height: 11rem;
`;

const ProductName = styled.span`
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 600;
  max-width: 11.25;
  border-top: 0.5px solid gray;
  padding-top: 0.7rem;
  margin-top: 0.7rem;
  margin-bottom: 0.25rem;
`;

const ProductPrice = styled.span`
  font-size: 1rem;
  line-height: 1.25;
  font-weidth: 600;
  max-width: 11.25;
`;

interface ProductCardProps {
  product: Item;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();

  return (
    <Container
      tabIndex={0}
      onClick={() => router.push(`/product/${product.slug}`)}
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          router.push(`/product/${product.slug}`);
        }
      }}
    >
      <ImgContainer>
        <Image
          src={product.featuredAsset?.source || "/ban-image-photo-icon.png"}
          priority
          alt={product.name}
          layout="fill"
          objectFit="contain"
        />
      </ImgContainer>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>${getPrice(product)}</ProductPrice>
    </Container>
  );
};

export default ProductCard;
