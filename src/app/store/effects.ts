import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsService } from 'src/app/shareds/products.service';
import { loadProduct, loadProductSuccess } from 'src/app/store/actions';
import { map, switchMap } from 'rxjs/operators';


@Injectable()
export class ProductsEffects {
    constructor(private actions$: Actions, private productService: ProductsService) {
    }

    loadProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadProduct),
            switchMap(() =>
                this.productService.getProducts()
                    .pipe(map(products =>
                        loadProductSuccess({ products })))
            )
        )
    );
}