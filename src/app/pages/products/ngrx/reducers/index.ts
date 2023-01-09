import { createReducer, on } from '@ngrx/store';
import { IProduct } from '../../models/product';
import { ProductActions } from '../action.types';

export interface ProductState {
  products: IProduct[];
  product: IProduct | null;
  error: string | '';
}

export const initialState: ProductState = {
  products: [],
  product: null,
  error: '',
};

export const usersReducer = createReducer(
  initialState,
  // All Users
  on(ProductActions.loadProductsSuccess, (state, action) => {
    return { ...state, products: action.payload, error: '' };
  }),
  on(ProductActions.loadProductFailure, (state, action) => {
    return { ...state, error: action.error };
  })
);
