import { initialState, SET_RACES, SET_GAMES } from "./constants";
import update from "immutability-helper";

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GAMES:
      return update(state, {
        games: { $set: action.games },
      });
    case SET_RACES:
      return update(state, {
        races: { $set: action.races },
      });
  }
  return state;
};
