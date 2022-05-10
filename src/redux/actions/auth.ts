import { api, tokenName } from "../../services/api";
import storage from "../../services/local-storage";
import { dispatch } from "../store";

// signUp
export const signUpAxios = async (data: any) => {
  const res = await api("POST", `auth/signup`, data);
  res?.success && signInAxios(data);
};

export const signInAxios = async (data: any) => {
  const res = await api("POST", `auth/login`, data);
  if (res?.success) {
    storage.set(tokenName, res.data.token);
    dispatch({ type: "SET_USER", payload: res?.data.user });
  }
};

export const signOutAxios = async () => {
  storage.remove(tokenName);
};
