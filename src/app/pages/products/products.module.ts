import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './container/products.component';
import { productsRoutes } from './products.routing';
import { ProductsFormComponent } from './components/products-form/products-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productsRoutes),
  ],
  declarations: [ProductsComponent, ProductsFormComponent],
})
export class ProductsModule {}


