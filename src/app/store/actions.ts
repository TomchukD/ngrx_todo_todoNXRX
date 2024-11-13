import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/shareds/product.interface';


export const loadProduct = createAction('[Product] Load Product');
export const loadProductSuccess =
    createAction('[Product] Load ProductSuccess',
        props<{ products: Product[] }>());