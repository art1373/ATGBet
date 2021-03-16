import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { userReducer } from "./user/reducer";
import { authReducer } from "./Authentication/reducer";
import { userSagas } from "./user/sagas";
import AsyncStorage from "@react-native-community/async-storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

function* allSagas() {
  yield all([...userSagas]);
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (__DEV__) {
  const createDebugger = require("redux-flipper").default;
  middlewares.push(createDebugger());
}

// mount it on the Store
export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);
export const persistor = persistStore(store);
// then run the saga
sagaMiddleware.run(allSagas);
