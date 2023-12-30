import { useQuery } from "@tanstack/react-query";
import { PaginationAPI } from "../api/PaginationAPI";
import { ProductsPagination } from "../utils/Interfaces";
import { useSearchParams } from "react-router-dom";

export function usePagination(): ProductsResponse {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  console.log(page);

  const { data: products } = useQuery<ProductsPagination>({
    queryKey: ["products-pagination", page],
    queryFn: () => PaginationAPI(page),
  });

  return { products: products?.products || [] };
}
