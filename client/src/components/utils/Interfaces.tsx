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
  products: Product[];
}
