import { createSelector } from "reselect";

export const productsSelector = createSelector(
  (state) => state.game.products,
  (products) => products
);
