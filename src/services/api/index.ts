import axios from "axios";
import storage from "../local-storage";
type method = "GET" | "POST" | "PUT" | "DELETE";

export const tokenName = "test_user_token";

let instanceAxios: any;
const getInstanceAxios = () => {
  instanceAxios = axios.create({
    baseURL: "http://192.168.78.77:8082/api/",
    headers: {
      Authorization: `Bearer ${storage.get(tokenName)}`,
    },
  });
};
getInstanceAxios();

// put method axios
export const api = async (method: method, url: string, data?: any) => {
  try {
    let res = null;
    switch (method) {
      case "GET":
        res = await instanceAxios.get(url);
        break;
      case "POST":
        res = await instanceAxios.post(url, data);
        break;
      case "PUT":
        res = await instanceAxios.put(url, data);
        break;
      case "DELETE":
        res = await instanceAxios.delete(url);
        break;
      default:
        return null;
    }
    return { success: true, data: res.data };
  } catch (error) {
    return { success: false, error: error };
  }
};
