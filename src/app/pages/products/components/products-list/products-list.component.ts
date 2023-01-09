import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../models/product';
import { ProductsFacade } from '../../products.facade';
import * as ProductsSelector from '../../ngrx/product.selectors';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { ProductActions } from '../../ngrx/action.types';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  @Output() public onChange = new EventEmitter<number>();

  listProducts$: Observable<IProduct[]> = this.store.select(
    ProductsSelector.getProducts
  );

  constructor(public facade: ProductsFacade, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(ProductActions.loadAllProducts());
  }
}
