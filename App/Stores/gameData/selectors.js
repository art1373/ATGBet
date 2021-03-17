import { createSelector } from "reselect";

export const gamesSelector = createSelector(
  (state) => state.game.games,
  (games) => games
);
export const racesSelector = createSelector(
  (state) => state.game.races,
  (races) => races
);
