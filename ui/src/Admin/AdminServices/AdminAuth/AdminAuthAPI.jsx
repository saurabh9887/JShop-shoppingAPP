import { Base_URL } from "@/Comp/BaseURL";
import axios from "axios";

export const LoginAdminAPI = async (params) => {
  try {
    const url = `${Base_URL}/admin/login`;
    const res = await axios.post(url, params);
    return res; // return only useful data
  } catch (error) {
    // Handle known backend errors
    if (error.response) {
      throw new Error(error.response.data.message || "Login failed");
    }
    // Handle network / unknown errors
    throw new Error("Network error, please try again");
  }
};
