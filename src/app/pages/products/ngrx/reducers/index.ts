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

export const productsReducer = createReducer(
  initialState,
  on(ProductActions.loadProductsSuccess, (state, action) => {
    return { ...state, products: action.payload, error: '' };
  }),
  on(ProductActions.loadProductFailure, (state, action) => {
    return { ...state, error: action.error };
  }),
  on(ProductActions.createProductSuccess, (state, action) => {
    return {
      ...state,
      products: [...state.products, action.payload],
      error: '',
    };
  }),
  on(ProductActions.createProductFailure, (state, action) => {
    return { ...state, error: action.error };
  })
);
