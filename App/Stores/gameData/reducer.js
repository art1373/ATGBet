import { initialState, SET_PRODUCTS } from "./constants";
import update from "immutability-helper";

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return update(state, {
        products: { $set: action.products },
      });
  }
  return state;
};
