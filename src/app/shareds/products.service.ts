import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shareds/product.interface';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    public getProducts(): Observable<Product[]> {
        return new Observable<Product[]>(observer => {
            observer.next([{ id: 0 }, { id: 1 }]);
        });
    }
}
