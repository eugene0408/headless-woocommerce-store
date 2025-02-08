export const selectCart = (state) => state.cart;

export const selectCartItemsCount = (state) => {
  return Object.values(state.cart).reduce(
    (acc, item) => acc + item.quantity,
    0
  );
};
