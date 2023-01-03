import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../models/product';
import { ProductsFacade } from '../../products.facade';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  @Input() public listProducts: IProduct[] | any;
  @Output() public onChange = new EventEmitter<number>();

  constructor(public facade: ProductsFacade) {}

  ngOnInit(): void {
    this.facade.listAllProducts()
  }
}
