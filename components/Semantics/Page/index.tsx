import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: grey;
  background-image: url("https://img.freepik.com/foto-gratis/ilustracion-3d-smartphone-productos-saliendo-pantalla-concepto-comercio-electronico-compras-linea_58466-14529.jpg?w=2000");
  background-repeat: no-repeat;
  background-size: cover;
`;

const PageTitle = styled.h1`
  text-align: center;
`;

const Content = styled.main`
  padding: 0 1rem;
  display: flex;
  min-height: calc(100vh - 120px);
  flex-direction: column;
  @media (min-width: 420px) {
    padding: 0 1.25rem;
    max-width: 932px;
    margin: 0 auto;
  }
  @media (min-width: 1200px) {
    padding: 0 1.5rem;
  }
`;

interface PageProps {
  children: ReactNode;
  withSearch?: boolean;
  title?: string;
}

const Page = ({ children, withSearch, title }: PageProps) => (
  <PageContainer>
    <Head>
      <title>Vendure E-commerce</title>
      <meta name="description" content="Venture E-commerce challenge" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header withSearch={withSearch} />
    <Content>
      {title && <PageTitle>{title}</PageTitle>}
      {children}
    </Content>
    <Footer />
  </PageContainer>
);

export default Page;
