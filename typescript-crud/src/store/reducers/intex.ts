import { combineReducers } from "redux";
import { UseReducers } from "./UseReducer";

export const rootReducer = combineReducers({
  data: UseReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
