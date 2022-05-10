import { combineReducers } from "redux";
import { ISettingsReducer } from "../types";
import { settingsReducer } from "./settings";

export interface IRootState {
  settings: ISettingsReducer;
}

const rootReducer = combineReducers<IRootState>({
  settings: settingsReducer,
});

export default rootReducer;
