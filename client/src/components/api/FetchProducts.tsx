import { ProductsResponse } from "../utils/Interfaces";
import { url } from "../utils/Url";
import toast from "react-hot-toast";

export const FetchProducts = async (): Promise<ProductsResponse> => {
  const response = await fetch(`${url}/api/v1/products`);
  const data: ProductsResponse = await response.json();

  if (!response.ok) {
    toast.error("Failed to fetch tasks");
    throw new Error("Failed to fetch tasks");
  }

  console.log(data);
  return data;
};
