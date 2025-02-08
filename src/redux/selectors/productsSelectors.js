import { createSelector } from "reselect";

export const selectAllProducts = (state) => state.products.items;

export const selectProductsLoading = (state) => state.products.loading;

export const selectProductsByCategory = (slug) =>
  createSelector([selectAllProducts], (products) =>
    products.filter((product) => product.categories[0].slug === slug)
  );

export const selectProductById = (productId) =>
  createSelector([selectAllProducts], (products) => {
    const items = products;
    return Array.isArray(items)
      ? items.find((product) => product.id === productId)
      : null;
  });
