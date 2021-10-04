// Within our store we're able to apply middleware to our actions
// when they are passed to the root reducer

import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

// Define a list of middleware
const middlewares = [logger];

// We createStore with 2 arguments, our reducer and any middleware we're applying to that reducer
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
