import React from "react";
import { useSelector } from "react-redux";
import { selectProductsByCategory } from "../redux/selectors/productsSelectors";
import { useParams } from "react-router-dom";

import Grid from "@mui/material/Grid2";
import { PageHeader, PageWrapper, ProductCard } from "../components";

export const CategoryPage = () => {
  const { categorySlug } = useParams();

  const productsByCategory = useSelector(
    selectProductsByCategory(categorySlug)
  );

  return (
    <PageWrapper>
      <PageHeader title={""} />
      {productsByCategory.map((product) => (
        <Grid item key={product.id} size={{ xs: 4 }}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </PageWrapper>
  );
};
