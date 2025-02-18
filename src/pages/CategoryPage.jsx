import React from "react";
import { useSelector } from "react-redux";
import { selectProductsByCategory } from "../redux/selectors/productsSelectors";
import { selectCategories } from "../redux/selectors/categoriesSelectors";
import { useParams } from "react-router-dom";

import { SectionHeader, ProductsList, PageWrapper } from "../components";

export const CategoryPage = () => {
  const { categorySlug } = useParams();
  const categories = useSelector(selectCategories);
  const category = categories.find(
    (category) => category.slug === categorySlug
  );

  const productsByCategory = useSelector(
    selectProductsByCategory(categorySlug)
  );

  return (
    <PageWrapper>
      <SectionHeader title={`${category.name}`} />
      <ProductsList products={productsByCategory} />
    </PageWrapper>
  );
};
