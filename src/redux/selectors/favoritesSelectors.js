export const selectFavorites = (state) => state.favorites.favorites;

export const selectFavoritesItemsCount = (state) =>
  state.favorites.favorites.length;
