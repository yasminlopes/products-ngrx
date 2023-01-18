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
    try {
      this.store.dispatch(ProductActions.createProduct({ payload: product }));
      this.toast.success({
        detail: 'Sucesso',
        summary: 'Produto cadastrado com sucesso!',
        duration: 3000,
      });
    } catch (error) {
      this.toast.error({
        detail: 'Oops...',
        summary: 'Ocorreu um erro ao cadastrar o produto.',
        duration: 3000,
      });
    }
  }

  deleteProduct(id: number) {
    try {
      this.store.dispatch(ProductActions.deleteProduct({ payload: id }));
      this.toast.success({
        detail: 'Sucesso',
        summary: 'Produto deletado com sucesso!',
        duration: 3000,
      });
    } catch (error) {
      this.toast.error({
        detail: 'Oops...',
        summary: 'Ocorreu um erro ao deletar o produto.',
        duration: 3000,
      });
    }
  }

  selectById(id: number) {
    return this.store.dispatch(ProductActions.loadProduct({ payload: id }));
  }

  updateProduct(id: number, product: Product) {
    try {
      this.store.dispatch(
        ProductActions.updateProduct({ payload: { ...product, id } })
      );
      this.toast.success({
        detail: 'Sucesso',
        summary: 'Produto atualizado com sucesso!',
        duration: 3000,
      });
    } catch (error) {
      this.toast.error({
        detail: 'Oops...',
        summary: 'Ocorreu um erro ao atualizado o produto.',
        duration: 3000,
      });
    }
  }

  save(product: Product, id: number) {
    id ? this.updateProduct(id, product) : this.registerProduct(product);
    this.router.navigate(['/']);
  }
}
