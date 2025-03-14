import { createSelector } from "reselect";

export const selectAllProducts = (state) => state.products.items;

export const selectProductsLoading = (state) => state.products.loading;

export const selectProductsByCategory = (slug) =>
  createSelector([selectAllProducts], (products) =>
    // products.filter((product) => product.categories[0].slug === slug)
    products.filter((product) =>
      product.categories.some((category) => category.slug === slug)
    )
  );

export const selectProductById = (productId) =>
  createSelector([selectAllProducts], (products) => {
    const items = products;
    return Array.isArray(items)
      ? items.find((product) => product.id === productId)
      : null;
  });

export const selectSearchQuery = (state) => state.products.searchQuery;

export const selectFilteredProducts = createSelector(
  [selectAllProducts, selectSearchQuery],
  (products, searchQuery) => {
    if (!searchQuery) {
      return [];
    }
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
);
