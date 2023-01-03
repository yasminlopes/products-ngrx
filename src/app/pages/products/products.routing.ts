import { Routes } from '@angular/router';
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { ProductsComponent } from './container/products.component';

export const productsRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: 'product/:id',
    component: ProductsFormComponent,
  },
];
