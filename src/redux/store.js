import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [logger];
const composedEnhancers = compose(applyMiddleware(...middlewares));
const store = createStore(rootReducer, undefined, composedEnhancers);

export default store;
