export enum Types {
  SET_THEME = "SET_THEME",
  SET_USER = "SET_USER",
}

export interface ISettingsReducer {
  mode: string;
  user: any;
}
