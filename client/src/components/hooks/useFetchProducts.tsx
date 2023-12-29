import { useQuery } from "@tanstack/react-query";
import { FetchProducts } from "../api/FetchProducts";
import { ProductsResponse } from "../utils/Interfaces";

export function useFetchProducts(): ProductsResponse {
  const {
    error,
    isLoading,
    data: products,
  } = useQuery<ProductsResponse>({
    queryKey: ["products"],
    queryFn: FetchProducts,
  });

  return { error, isLoading, products: products?.products || [] };
}
