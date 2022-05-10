import { ISettingsReducer, Types } from "../types";

const initialState = {
  mode: "dark",
  user: {},
};

export const settingsReducer = (
  state: ISettingsReducer = initialState,
  action: { payload: any; type: string }
) => {
  switch (action.type) {
    case Types.SET_THEME:
      return { ...state, mode: action.payload };
    case Types.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
