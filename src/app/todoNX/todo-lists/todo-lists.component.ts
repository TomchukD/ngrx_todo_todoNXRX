import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/shareds/todo.interface';
import { AsyncPipe } from '@angular/common';
import { MatCheckbox } from '@angular/material/checkbox';
import { selectTodos } from 'src/app/todoNX/store/selector';
import { Store } from '@ngrx/store';
import { removeTodo, toggleTodo } from 'src/app/todoNX/store/action';

@Component({
    selector: 'app-todo-lists',
    standalone: true,
    imports: [
        MatCard,
        AsyncPipe,
        MatCheckbox
    ],
    templateUrl: './todo-lists.component.html',
    styleUrl: './todo-lists.component.css'
})
export class TodoListsComponent {
    todos$: Observable<Todo[]> = this.store.select(selectTodos);

    constructor(private store: Store) {
    }

    public onChangeCheck(id: number): void {
        this.store.dispatch(toggleTodo({ id }));
    }

    public onDelete(id: number): void {
        this.store.dispatch(removeTodo({ id }));
    }
}
