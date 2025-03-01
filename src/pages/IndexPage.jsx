import React from "react";
import { useSelector } from "react-redux";
// Selectors
import { selectAllProducts } from "../redux/selectors/productsSelectors";

import {
  SectionHeader,
  CategoriesMenu,
  ProductsList,
  PageWrapper,
} from "../components";

export const IndexPage = () => {
  const products = useSelector(selectAllProducts);
  // console.log(products);
  return (
    <PageWrapper>
      <CategoriesMenu />
      <SectionHeader title="Каталог" />
      <ProductsList products={products} />
    </PageWrapper>
  );
};
