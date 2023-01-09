export interface ResponseApi {
  data: Product;
}

export class Product {
  constructor(
    public id: number,
    public name: string,
    public category: number,
    public price: number,
    public amount: number
  ) {}
}
