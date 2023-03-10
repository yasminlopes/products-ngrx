import { createReducer, on } from '@ngrx/store';
import { Product } from '../../models/product';
import { ProductActions } from '../action.types';

export interface ProductState {
  products: Product[];
  product: Product | null;
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
  }),
  on(ProductActions.deleteProductSuccess, (state, action) => {
    return {
      ...state,
      products: [...state.products].filter(
        (filter) => filter.id != action.payload
      ),
      error: '',
    };
  }),
  on(ProductActions.deleteProductFailure, (state, action) => {
    return { ...state, error: action.error };
  }),
  on(ProductActions.loadProductSuccess, (state, action) => {
    return { ...state, product: action.payload, error: '' };
  }),
  on(ProductActions.loadProductFailure, (state, action) => {
    return { ...state, error: action.error };
  })
);
