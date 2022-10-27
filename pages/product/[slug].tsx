import type { NextPage } from "next";
import { useRouter } from "next/router";

// Components
import Page from "../../components/Semantics/Page";
import ProductDetail from "../../components/Products/Detail";

// Services
import { useProductQuery } from "../../services/hooks/fetch-product";
import { getQueryValue } from "../../services/utils";

const Product: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const fSlug = getQueryValue(slug);
  const { data } = useProductQuery(fSlug);
  const product = data?.product;

  return (
    <Page title={product?.name}>
      <ProductDetail product={product} />
    </Page>
  );
};

export default Product;
