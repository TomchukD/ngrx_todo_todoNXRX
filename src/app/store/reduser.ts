import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/shareds/product.interface';
import { loadProductSuccess } from 'src/app/store/actions';


export interface ProductsState {
    products: Product[];
}

export const initialState: ProductsState = {
    products: []
};

export const productReducer = createReducer(
    initialState,
    on(loadProductSuccess, (state, { products }) => {
        return {
            ...state,
            products
        };
    })
);