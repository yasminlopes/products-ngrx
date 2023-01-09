import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './container/products.component';
import { productsRoutes } from './products.routing';
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgxCurrencyModule,
  ],
  declarations: [
    ProductsComponent,
    ProductsFormComponent,
    ProductsListComponent,
  ],
})
export class ProductsModule {}
