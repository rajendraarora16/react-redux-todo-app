import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = configureStore({
  reducer: reducer,
  devTools: true,
  enhancers: composeEnhancers,
});

export default store;
