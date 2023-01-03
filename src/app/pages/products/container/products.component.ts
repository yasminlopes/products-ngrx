import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsFacade } from '../products.facade';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(public facade: ProductsFacade, private router: Router) {}

  ngOnInit(): void {}

  accessForm(id: number) {
    this.router.navigateByUrl(`product/?id=${id}`);
  }
}
