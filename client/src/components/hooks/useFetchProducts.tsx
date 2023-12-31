import { useQuery } from "@tanstack/react-query";
import { FetchProducts } from "../api/FetchProducts";
import { ProductsResponse } from "../utils/Interfaces";

export function useFetchProducts(): ProductsResponse {
  const { error, isLoading, data } = useQuery<ProductsResponse>({
    queryKey: ["products"],
    queryFn: FetchProducts,
  });

  const totalResult = data?.totalResult || 0;
  const products = data?.products || [];

  return { error, isLoading, products, totalResult };
}
