import type { NextPage } from "next";

// Components
import Page from "../components/Semantics/Page";
import List from "../components/Products/List";

// Services
import { useProductsQuery } from "../services/hooks/fetch-products";

const Home: NextPage = () => {
  const { data } = useProductsQuery();
  const products = data?.products.items || [];

  return (
    <Page title="List" withSearch>
      <List products={products} />
    </Page>
  );
};

export default Home;
