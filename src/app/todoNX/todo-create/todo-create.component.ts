import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Todo } from 'src/app/shareds/todo.interface';
import { Store } from '@ngrx/store';
import { addTodo } from 'src/app/todoNX/store/action';

@Component({
    selector: 'app-todo-create',
    standalone: true,
    imports: [
        MatCard,
        MatFormField,
        ReactiveFormsModule
    ],
    templateUrl: './todo-create.component.html',
    styleUrl: './todo-create.component.css'
})
export class TodoCreateComponent {
    titleFormControl = new FormControl('', [Validators.required]);

    descriptionFormControl = new FormControl('', [Validators.required]);

    constructor(private store: Store) {
    }

    public onAdd(): void {
        const newTodo: Todo = {
            completed: false,
            name: this.titleFormControl.value!,
            description: this.descriptionFormControl.value!,
            id: Date.now()
        };
        this.store.dispatch(addTodo(newTodo));
        
        this.titleFormControl.reset();
        this.descriptionFormControl.reset();
    }
}
