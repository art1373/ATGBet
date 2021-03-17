import { FETCH_GAMES, SET_RACES, SET_GAMES, FETCH_RACES } from "./constants";

export const fetchProductsByGameType = (gameType, onSucces, onFailure) => {
  return {
    type: FETCH_GAMES,
    gameType,
    onSucces,
    onFailure,
  };
};
export const setGames = (games) => {
  return {
    type: SET_GAMES,
    games,
  };
};

export const fetchRaces = (gameId) => {
  return {
    type: FETCH_RACES,
    gameId,
  };
};
export const setRaces = (races) => {
  return {
    type: SET_RACES,
    races,
  };
};
