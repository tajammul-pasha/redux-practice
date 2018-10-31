import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducer from "../reducers/userReducer";

export default () => {
  const store = createStore(
    combineReducers({
      user: userReducer
    }),
    compose(applyMiddleware(thunk))
  );

  return store;
};
