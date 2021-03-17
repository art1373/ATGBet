import api from "../../api";
import { put, takeLeading } from "@redux-saga/core/effects";
import { FETCH_PRODUCTS } from "./constants";
import { setProdcuts } from "./actions";
import { logError } from "../../utils/logs";

/************************* FETCH PRODUCTS *************************/
function* fetchProductsCall(action) {
  try {
    const resp = yield api.products.fetchProducts(action.gameType);
    const betType = resp?.data?.betType;
    const upcoming = resp?.data?.upcoming;
    const results = resp?.data?.results;
    const products = { betType, upcoming, results };
    yield put(setProdcuts(products));
    if (action.onSuccess) {
      action.onSuccess();
    }
  } catch (e) {
    if (action.onFailure) {
      action.onFailure();
    }
    console.log("here");
    logError(e);
  }
}

function* watchFetchProducts() {
  yield takeLeading(FETCH_PRODUCTS, fetchProductsCall);
}

/************************* Watchers *************************/

export const gameSagas = [watchFetchProducts()];
