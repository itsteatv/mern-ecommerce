import { useQuery } from "@tanstack/react-query";
import { FetchProducts } from "../api/FetchProducts";
import { ProductsResponse } from "../utils/Interfaces";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZES } from "../utils/PageSize";

export function useFetchProducts(searchQuery: string): ProductsResponse {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const pageSize = Number(searchParams.get("pageSize")) || PAGE_SIZES[0];

  const { error, isLoading, data, refetch } = useQuery<ProductsResponse>({
    queryKey: ["products-pagination", page, pageSize],
    queryFn: () => FetchProducts(page, pageSize, searchQuery),
  });

  const totalResult = data?.totalResult || 0;
  const products = data?.products || [];

  return { error, isLoading, products, totalResult, refetch };
}
