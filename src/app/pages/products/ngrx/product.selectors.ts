import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './reducers';

// Essa feature é como se fosse uma chave de acesso
export const getProductsState = createFeatureSelector<ProductState>('products');

export const getProducts = createSelector(
  getProductsState,
  (state: ProductState) => state.products
);

export const getProduct = createSelector(
  getProductsState,
  (state: ProductState) => state.product
);

export const getProductFailure = createSelector(
  getProductsState,
  (state: ProductState) => state.error
);
