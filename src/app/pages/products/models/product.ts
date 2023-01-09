export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  amount: number;
}

export interface ResponseApi {
  data: IProduct;
}
