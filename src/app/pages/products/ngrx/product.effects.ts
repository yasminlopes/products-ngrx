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
      mergeMap(({ payload }) => {
        return this.api.create(payload).pipe(
          map(
            (data) => ProductActions.createProductSuccess({ payload }),
            catchError((error) =>
              of(ProductActions.createProductFailure({ error }))
            )
          )
        );
      })
    );
  });

  deleteProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.deleteProduct),
      mergeMap((id: any) => {
        return this.api.delete(id.payload).pipe(
          map(
            () =>
              ProductActions.deleteProductSuccess({
                payload: id.payload,
              }),
            catchError((error) =>
              of(ProductActions.deleteProductFailure({ error }))
            )
          )
        );
      })
    );
  });

  loadProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.loadProduct),
      mergeMap((id: any) => {
        return this.api.getProduct(id.payload).pipe(
          map(
            (payload: any) => ProductActions.loadProductSuccess({ payload }),
            catchError((error) =>
              of(ProductActions.loadProductFailure({ error }))
            )
          )
        );
      })
    );
  });

  updateUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.updateProduct),
      mergeMap((data: any) => {
        return this.api.update(data.payload).pipe(
          map(
            (payload: any) => ProductActions.updateProductSuccess({ payload }),
            catchError((error) =>
              of(ProductActions.updateProductFailure({ error }))
            )
          )
        );
      })
    );
  });
}
