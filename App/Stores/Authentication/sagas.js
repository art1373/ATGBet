import api from "../../api";
import { takeLeading } from "@redux-saga/core/effects";
import { LOGIN } from "./constants";
import { logError } from "../../utils/logs";

/************************* REQUEST SMS *************************/
function* requestSmsSaga(action) {
  try {
    const resp = yield api.users.requestSms({
      country: action.country,
      phone: action.phone,
    });

    if (action.onSuccess) {
      action.onSuccess(resp.data);
    }
  } catch (e) {
    if (action.onFailure) {
      action.onFailure();
    }
    logError(e);
  }
}

function* watchRequestSms() {
  yield takeLeading(LOGIN, requestSmsSaga);
}

/************************* VERIFY SMS MERCHANT *************************/

export const userSagas = [watchRequestSms()];
