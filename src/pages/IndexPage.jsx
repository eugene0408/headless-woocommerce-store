import React from "react";
import { useSelector } from "react-redux";
// Selectors
import {
  selectAllProducts,
  selectProductsLoading,
} from "../redux/selectors/productsSelectors";
import {
  selectCategories,
  selectCategoriesLoading,
} from "../redux/selectors/categoriesSelectors";

import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid2";

import {
  ProductCard,
  LoadingCircular,
  PageWrapper,
  PageHeader,
  CategoryItem,
} from "../components";

export const IndexPage = () => {
  const categories = useSelector(selectCategories);
  const categoriesLoading = useSelector(selectCategoriesLoading);
  const products = useSelector(selectAllProducts);
  const productsLoading = useSelector(selectProductsLoading);
  console.log(products);
  console.log(categories);
  return (
    <PageWrapper>
      <PageHeader title="Категорії" />
      {categoriesLoading && <LoadingCircular />}
      {categories.length > 0 &&
        categories.map((category) => (
          <Grid key={category.id} size={{ xs: 2 }}>
            <Link to={`/category/${category.slug}`}>
              <CategoryItem name={category.name} image={category.image.src} />
            </Link>
          </Grid>
        ))}

      <PageHeader title="Каталог" />

      {productsLoading && <LoadingCircular />}

      {products.length > 0 &&
        products.map((product) => (
          <Grid key={`pro${product.id}`} size={{ xs: 4 }}>
            <ProductCard product={product} />
          </Grid>
        ))}
    </PageWrapper>
  );
};
