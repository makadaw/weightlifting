import {
  configureStore,
  getDefaultMiddleware,
  combineReducers
} from "redux-starter-kit";
import { createHashHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";

import program from "./program/week";

export const history = createHashHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  program
});

const store = configureStore<MyStore>({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), routerMiddleware(history)],
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: {}
});

export interface MyStore {}

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
