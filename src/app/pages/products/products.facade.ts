import { Injectable } from '@angular/core';
import { ProductApi } from './api/product.api';
import { ProductState } from './state/product.state';

@Injectable({ providedIn: 'root' })
export class ProductsFacade {
  constructor(private api: ProductApi, private state: ProductState) {}
  public product$ = this.state.product;

  listAllProducts() {
    this.api.getAllProducts().subscribe((listProducts) => {
      this.product$.next(listProducts)
    });
  }
}
