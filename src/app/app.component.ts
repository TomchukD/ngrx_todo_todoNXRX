import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shareds/product.interface';
import { Store } from '@ngrx/store';
import { selectAllProduct } from 'src/app/store/select';
import { loadProduct } from 'src/app/store/actions';
import { AsyncPipe } from '@angular/common';
import { TodoComponent } from 'src/app/todo/todo.component';
import { TodoNXComponent } from 'src/app/todoNX/todo-nx/todo-nx.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        AsyncPipe,
        TodoComponent,
        TodoNXComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
    products$: Observable<Product[]>;

    constructor(private store: Store) {
        this.products$ = this.store.select(selectAllProduct);
    }

    ngOnInit(): void {
        this.store.dispatch(loadProduct());
        this.products$.subscribe(v => {
            console.log(v);
        });
    }

}
