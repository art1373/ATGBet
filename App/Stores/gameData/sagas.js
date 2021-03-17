import api from "../../api";
import { put, takeLeading } from "@redux-saga/core/effects";
import { FETCH_GAMES, FETCH_RACES } from "./constants";
import { setGames, setRaces } from "./actions";
import { logError } from "../../utils/logs";

/************************* FETCH PRODUCTS *************************/
function* fetchGamesCall(action) {
  try {
    const resp = yield api.products.fetchProducts(action.gameType);
    const betType = resp?.data?.betType;
    const upcoming = resp?.data?.upcoming;
    const results = resp?.data?.results;
    const games = { betType, upcoming, results };
    yield put(setGames(games));
    if (action.onSuccess) {
      action.onSuccess();
    }
  } catch (e) {
    if (action.onFailure) {
      action.onFailure();
    }
    logError(e);
  }
}

function* watchFetchProducts() {
  yield takeLeading(FETCH_GAMES, fetchGamesCall);
}

/************************* FETCH RACES *************************/
function* fetchRacesCall(action) {
  try {
    const resp = yield api.games.fetchGames(action.gameId);
    const races = { ...resp?.data?.races };
    yield put(setRaces(races));
    if (action.onSuccess) {
      action.onSuccess();
    }
  } catch (e) {
    if (action.onFailure) {
      action.onFailure();
    }
    logError(e);
  }
}

function* watchFetchRaces() {
  yield takeLeading(FETCH_RACES, fetchRacesCall);
}

/************************* Watchers *************************/

export const gameSagas = [watchFetchProducts(), watchFetchRaces()];
