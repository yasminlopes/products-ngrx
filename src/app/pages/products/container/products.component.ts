import { Component, OnInit } from '@angular/core';
import { ProductsFacade } from '../products.facade';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(public facade: ProductsFacade) { }

  ngOnInit(): void {
  }

}
