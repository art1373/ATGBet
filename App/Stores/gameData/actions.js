import { FETCH_GAMES, FETCH_PRODUCTS, SET_PRODUCTS } from "./constants";

export const fetchProductsByGameType = (gameType, onSucces, onFailure) => {
  return {
    type: FETCH_PRODUCTS,
    gameType,
    onSucces,
    onFailure,
  };
};
export const setProdcuts = (products) => {
  return {
    type: SET_PRODUCTS,
    products,
  };
};
export const fetchGames = (gameId) => {
  return {
    type: FETCH_GAMES,
    gameId,
  };
};
