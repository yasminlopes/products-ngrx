import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ProductApi } from '../api/product.api';
import { ProductActions } from './action.types';

@Injectable()
export class ProductsEffects {
  constructor(private actions$: Actions, private api: ProductApi) {}

  loadAllProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.loadAllProducts),
      mergeMap(() => {
        return this.api.getAllProducts().pipe(
          map(
            (payload) => ProductActions.loadProductsSuccess({ payload }),
            catchError((error) =>
              of(ProductActions.loadProductsFailure({ error }))
            )
          )
        );
      })
    );
  });

  insertProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.createProduct),
      mergeMap((id: any) => {
        return this.api.create(id).pipe(
          map(
            (payload: any) => ProductActions.createProductSuccess({ payload }),
            catchError((error) =>
              of(ProductActions.createProductFailure({ error }))
            )
          )
        );
      })
    );
  });
}
