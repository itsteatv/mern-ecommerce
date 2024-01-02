import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

export interface Product {
  _id: string;
  name: string;
  price: number;
  company: string;
  rating: number;
  createdAt: string;
  __v: number;
}

export interface ProductsResponse {
  isLoading: boolean;
  error: Error | null;
  products: Product[];
  totalResult: number;
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<ProductsResponse, Error>>;
}
