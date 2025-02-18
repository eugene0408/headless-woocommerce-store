import React from "react";
import { useSelector } from "react-redux";
// Selectors
import { selectProductsLoading } from "../redux/selectors/productsSelectors";

import Grid from "@mui/material/Grid2";
import { SectionWrapper } from "./SectionWrapper";
import { ProductCard } from "./ProductCard";
import { LoadingCircular } from "./LoadingCircular";

export const ProductsList = ({ products }) => {
  const productsLoading = useSelector(selectProductsLoading);

  return (
    <SectionWrapper>
      {productsLoading && <LoadingCircular />}

      {products.length > 0 &&
        products.map((product) => (
          <Grid key={`pro${product.id}`} size={{ xs: 4 }}>
            <ProductCard product={product} />
          </Grid>
        ))}
    </SectionWrapper>
  );
};
