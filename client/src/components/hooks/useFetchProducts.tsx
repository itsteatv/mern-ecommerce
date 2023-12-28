import { useQuery } from "@tanstack/react-query";
import { FetchProducts } from "../api/FetchProducts";
import { ProductsResponse } from "../utils/Interfaces";

export function useFetchProducts(): ProductsResponse {
  const {
    isError,
    isLoading,
    data: products,
  } = useQuery<ProductsResponse>({
    queryKey: ["products"],
    queryFn: FetchProducts,
  });

  return { isError, isLoading, products: products?.products || [] };
}
