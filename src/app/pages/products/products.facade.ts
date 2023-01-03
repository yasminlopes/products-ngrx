import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ProductApi } from './api/product.api';
import { IProduct } from './models/product';
import { ProductState } from './state/product.state';

@Injectable({ providedIn: 'root' })
export class ProductsFacade {
  constructor(
    private api: ProductApi,
    private state: ProductState,
    private toast: NgToastService,
    private router: Router
  ) {}
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

  selectById(id: number) {
    return this.api.getProduct(id);
  }

  updateProduct(id: number, product: IProduct) {
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

  save(product: IProduct, id: number) {
    if (product.id) this.updateProduct(id, product);
    this.registerProduct(product);
  }

  saveForm(product: IProduct, id: number) {
    product.id = id;
    if (id) return this.updateProduct(id, product);
    return this.registerProduct(product);
  }
}
