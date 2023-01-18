export interface ResponseApi {
  data: Product;
}

export interface Product {
  id: number;
  name: string;
  category: number;
  price: number;
  amount: number;
}
