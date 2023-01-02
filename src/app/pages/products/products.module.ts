import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './container/products.component';
import { productsRoutes } from './products.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productsRoutes),
  ],
  declarations: [ProductsComponent],
})
export class ProductsModule {}


