import { productReducer } from 'src/app/store/reduser';
import { ProductsEffects } from 'src/app/store/effects';
import { todoReducer } from 'src/app/todoNX/store/reducer';

export const store = {
    products: productReducer,
    todo: todoReducer
};

export const effects = [
    ProductsEffects
];