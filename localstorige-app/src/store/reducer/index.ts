import { combineReducers } from "redux";
import { UseReducer } from "./UseReducer";

export const rootReducer = combineReducers({
  counter: UseReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
