import { useQuery } from "@tanstack/react-query";
import { PaginationAPI } from "../api/PaginationAPI";
import { ProductsPagination } from "../utils/Interfaces";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZES } from "../utils/PageSize";

export function usePagination(): ProductsPagination {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const pageSize = Number(searchParams.get("pageSize")) || PAGE_SIZES[0];

  console.log(page);

  const {
    error,
    isLoading,
    data: products,
  } = useQuery<ProductsPagination>({
    queryKey: ["products-pagination", page, pageSize],
    queryFn: () => PaginationAPI(page, pageSize),
  });

  return { error, isLoading, products: products?.products || [] };
}
