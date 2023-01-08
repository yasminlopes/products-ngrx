import { createAction, props } from '@ngrx/store';
import { IProduct } from '../models/product';

export const LOAD_ALL_PRODUCTS = '[Products Component] Load All Products';
export const LOAD_ALL_PRODUCTS_SUCCESS =
  '[All Products Component] Load All Products Success';
export const LOAD_ALL_PRODUCTS_FAILURE =
  '[All Products Component] Load All Products Failure';

export const LOAD_PRODUCT = '[Product Component] Load Product';
export const LOAD_PRODUCT_SUCCESS = '[Product Component] Load Product Success';
export const LOAD_PRODUCT_FAILURE = '[Product Component] Load Product Failure';

export const CREATE_PRODUCT = '[Create Product] Create Product';
export const CREATE_PRODUCT_SUCCESS = '[Create Product] Create Product Success';
export const CREATE_PRODUCT_FAILURE = '[Create Product] Create Product Failure';

export const UPDATE_PRODUCT = '[Update Product] Update Product';
export const UPDATE_PRODUCT_SUCCESS = '[Update Product] Update Product Success';
export const UPDATE_PRODUCT_FAILURE = '[Update Product] Update Product Failure';

export const DELETE_PRODUCT = '[Delete Product] Delete Product';
export const DELETE_PRODUCT_SUCCESS = '[Delete Product] Delete Product Success';
export const DELETE_PRODUCT_FAILURE = '[Delete Product] Delete Product Failure';

// Load Products
export const loadAllProducts = createAction(LOAD_ALL_PRODUCTS);
export const loadProductsSuccess = createAction(
  LOAD_ALL_PRODUCTS_SUCCESS,
  props<{ payload: IProduct[] }>()
);
export const loadProductsFailure = createAction(
  LOAD_ALL_PRODUCTS_FAILURE,
  props<{ error: string }>()
);

// Load Product
export const loadProduct = createAction(
  LOAD_PRODUCT,
  props<{ payload: number }>()
);
export const loadProductSuccess = createAction(
  LOAD_PRODUCT_SUCCESS,
  props<{ payload: IProduct }>()
);
export const loadProductFailure = createAction(
  LOAD_PRODUCT_FAILURE,
  props<{ error: string }>()
);

// Create Product
export const createProduct = createAction(
  CREATE_PRODUCT,
  props<{ payload: IProduct }>()
);
export const createProductSuccess = createAction(
  CREATE_PRODUCT_SUCCESS,
  props<{ payload: IProduct }>()
);
export const createProductFailure = createAction(
  CREATE_PRODUCT_FAILURE,
  props<{ error: string }>()
);

// Update Product
export const updateProduct = createAction(
  UPDATE_PRODUCT,
  props<{ payload: IProduct }>()
);
export const updateProductSuccess = createAction(
  UPDATE_PRODUCT_SUCCESS,
  props<{ payload: IProduct }>()
);
export const updateProductFailure = createAction(
  UPDATE_PRODUCT_FAILURE,
  props<{ error: string }>()
);

// Delete Product
export const deleteProduct = createAction(
  DELETE_PRODUCT,
  props<{ payload: number }>()
);
export const deleteProductSuccess = createAction(
  DELETE_PRODUCT_SUCCESS,
  props<{ payload: number }>()
);
export const deleteProductFailure = createAction(
  DELETE_PRODUCT_FAILURE,
  props<{ error: string }>()
);
