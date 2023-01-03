import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParamMap.get('id');
    this.initForm();
    this.fillForm();
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

  fillForm() {
    if (this.id) {
      this.facade.selectById(+this.id).subscribe(
        (res) => {
          this.productForm.patchValue(res);
        },
        (error) => console.log(error)
      );
    }
  }

  saveForm() {
    this.facade.saveForm(this.productForm.value, this.id);
    this.productForm.reset();
  }

}
