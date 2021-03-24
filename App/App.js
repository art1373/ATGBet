import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./Stores";
import RootScreen from "./Containers/Root/RootScreen";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootScreen />
      </PersistGate>
    </Provider>
  );
};
export default App;
