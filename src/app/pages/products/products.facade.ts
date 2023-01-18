import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NgToastService } from 'ng-angular-popup';
import { AppState } from 'src/app/app.state';
import { ProductApi } from './api/product.api';
import { Product } from './models/product';
import { ProductActions } from './ngrx/action.types';
import { ProductState } from './state/product.state';

@Injectable({ providedIn: 'root' })
export class ProductsFacade {
  constructor(
    private api: ProductApi,
    private state: ProductState,
    private toast: NgToastService,
    private router: Router,
    private store: Store<AppState>
  ) {}
  public product$ = this.state.product;

  registerProduct(product: Product) {
    this.store.dispatch(ProductActions.createProduct({ payload: product }));
  }

  deleteProduct(id: number) {
    this.store.dispatch(ProductActions.deleteProduct({ payload: id }));
  }

  selectById(id: number) {
    return this.store.dispatch(ProductActions.loadProduct({ payload: id }));
  }

  updateProduct(id: number, product: Product) {
    this.store.dispatch(
      ProductActions.updateProduct({ payload: { ...product, id } })
    );
  }
}
