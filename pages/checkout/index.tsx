import type { NextPage } from "next";

// Components
import CheckoutDetail from "../../components/Checkout/CheckoutDetail";
import Page from "../../components/Semantics/Page";

// Services
import { useStorageContext } from "../../services/context";

const Home: NextPage = () => {
  const [state] = useStorageContext();

  return (
    <Page title="Checkout information">
      <CheckoutDetail products={state.products} />
    </Page>
  );
};

export default Home;