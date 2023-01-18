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
    return this.api.getProduct(id);
  }

  updateProduct(id: number, product: Product) {
    this.api.update(id, product).subscribe(
      (response) => {
        this.accessList();
      },
      (error) => {
        console.log('error');
      }
    );
  }

  accessList() {
    this.router.navigate(['/']);
  }

  save(product: Product, id: number) {
    if (product.id) this.updateProduct(id, product);
    this.registerProduct(product);
  }

  saveForm(product: Product, id: number) {
    product.id = id;
    if (id) return this.updateProduct(id, product);
    return this.registerProduct(product);
  }
}
