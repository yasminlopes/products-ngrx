import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../models/product';

@Injectable({ providedIn: 'root' })
export class ProductApi {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/products`);
  }

  create(product: IProduct): Observable<any> {
    return this.http.post(`${environment.apiUrl}/products`, product);
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/products/${id}`);
  }

  getProduct(id: number) {
    return this.http.get(`${environment.apiUrl}/products/${id}`);
  }

  update(id: number, product: IProduct) {
    return this.http.put(`${environment.apiUrl}/products/${id}`, product);
  }
}
