/** @format */
import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

import { Provider } from "react-redux";
import store from "./src/store/store";

const configureStore = store();

const renderApp = () => (
  <Provider store={configureStore}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => renderApp);
