import { Base_URL } from "@/Comp/BaseURL";
import axios from "axios";

export const RegisterAPI = async (params) => {
  try {
    const url = `${Base_URL}/auth/register`;
    const res = await axios.post(url, params);
    return res; // return only useful data
  } catch (error) {
    // Handle known backend errors
    if (error.response) {
      throw new Error(error.response.data.message || "Registration failed");
    }
    // Handle network / unknown errors
    throw new Error("Network error, please try again");
  }
};
