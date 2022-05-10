import { Types } from "../types";

export const setTheme = (theme: string) => ({
  type: Types.SET_THEME,
  payload: theme,
});
