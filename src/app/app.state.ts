import { ActionReducerMap } from '@ngrx/store';
import { ProductsEffects } from './pages/products/ngrx/product.effects';
import { productsReducer, ProductState } from './pages/products/ngrx/reducers';

export interface AppState {
  products: ProductState;
}

export const appReducer: ActionReducerMap<AppState> = {
  products: productsReducer,
};

export const appEffects = [ProductsEffects];
