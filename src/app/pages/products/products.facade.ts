import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { ProductApi } from './api/product.api';
import { ProductState } from './state/product.state';

@Injectable({ providedIn: 'root' })
export class ProductsFacade {
  constructor(private api: ProductApi, private state: ProductState, private toast: NgToastService) {}
  public product$ = this.state.product;

  listAllProducts() {
    this.api.getAllProducts().subscribe((listProducts) => {
      this.product$.next(listProducts);
    });
  }

  registerProduct(data: any) {
    this.api.create(data).subscribe(
      (res) => {
        this.toast.success({
          detail: 'SUCESSO!',
          summary: 'Usuário cadastrado com sucesso!',
          duration: 5000,
        });
      },
      (error) => {
        this.toast.error({
          detail: 'Oops..',
          summary: 'Não foi possível cadastrar.',
          duration: 5000,
        });
      }
    );
  }

  deleteProduct(id: number) {
    this.api.delete(id).subscribe(
      (res) => {
        this.toast.success({
          detail: 'SUCESSO!',
          summary: 'Usuário cadastrado com sucesso!',
          duration: 5000,
        });
      },
      (error) => {
        this.toast.error({
          detail: 'Oops..',
          summary: 'Não foi possível cadastrar.',
          duration: 5000,
        });
      }
    );
  }
}
