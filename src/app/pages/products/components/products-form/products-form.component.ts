import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsFacade } from '../../products.facade';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {

  public productForm!: FormGroup;
  public id: any;

  constructor(
    private fb: FormBuilder,
    public facade: ProductsFacade,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy() {}

  initForm() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      price: ['', [Validators.required]],
      amount: ['', [Validators.required]]
    });
  }

  save() {
    this.facade.registerProduct(this.productForm.value);
  }


}
