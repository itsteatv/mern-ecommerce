import { ProductsResponse } from "../utils/Interfaces";
import { url } from "../utils/Url";
import toast from "react-hot-toast";

export const FetchProducts = async (
  page: number,
  pageSize: number
): Promise<ProductsResponse> => {
  const response = await fetch(
    `${url}/api/v1/products?page=${page}&limit=${pageSize}`
  );
  const data: ProductsResponse = await response.json();

  if (!response.ok) {
    toast.error("Failed to fetch products");
    throw new Error("Failed to fetch products");
  }

  console.log(data);
  return data;
};
