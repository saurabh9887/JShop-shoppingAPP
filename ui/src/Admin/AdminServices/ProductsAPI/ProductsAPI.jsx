import { Base_URL } from "@/Comp/BaseURL";
import axios from "axios";

export const getAllProductsAPI = async (params) => {
  try {
    const url = `${Base_URL}/product/getAllProducts`;
    const res = await axios.post(url, params);
    return res; // return only useful data
  } catch (error) {
    // Handle known backend errors
    if (error.response) {
      throw new Error(
        error.response.data.message || "failed to fetch products"
      );
    }
    // Handle network / unknown errors
    throw new Error("Network error, please try again");
  }
};
