import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { ProductsFacade } from '../../products.facade';
import * as ProductsSelector from '../../ngrx/product.selectors';
import { map } from 'rxjs';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss'],
})
export class ProductsFormComponent implements OnInit {
  public productForm!: FormGroup;
  public id: any;

  constructor(
    private fb: FormBuilder,
    public facade: ProductsFacade,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.returnProductId();
    this.initForm();
    this.fillForm();
  }

  ngOnDestroy() {}

  returnProductId() {
    this.id = this.route.snapshot.queryParamMap.get('id');
  }

  initForm() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      price: ['', [Validators.required]],
      amount: ['', [Validators.required]],
    });
  }

  fillForm() {
    if (!this.id) return;

    this.facade.selectById(this.id);
    this.store
      .pipe(
        select(ProductsSelector.getProduct),
        map((product: any) => this.selectProduct(product))
      )
      .subscribe((product: any) => {
        this.productForm.patchValue(product);
      });
  }

  selectProduct(product: any) {
    if (product) return product;
  }

  saveForm() {
    this.facade.saveForm(this.productForm.value, this.id);
    this.productForm.reset();
  }
}
