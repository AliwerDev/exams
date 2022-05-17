import axios from "axios";
import storage from "../local-storage";
type method = "GET" | "POST" | "PUT" | "DELETE";

export const auth_token = "auth_test_system";

let instanceAxios: any;
const getInstanceAxios = () => {
  const token = storage.get(auth_token);
  instanceAxios = axios.create({
    baseURL: "http://192.168.78.77:8082/api/",
    headers: {
      Authorization: `Bearer ${token}`,
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

const errorMessege = (error: any): string => {
  if (error.response) {
    if (error.response.status === 401) return "Email or password is incorrect";
    else if (error.response.status === 401) return "You are not authorized";
    else if (error.response.status === 404) return "Not found";
    else if (error.response.status === 500) return "Server error";
    else return "Something went wrong";
  } else return "Something went wrong";
};
export { errorMessege };
export default instanceAxios;
