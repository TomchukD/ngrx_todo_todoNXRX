import { Component } from '@angular/core';
import { Todo } from 'src/app/shareds/todo.interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-todo',
    standalone: true,
    imports: [
        ReactiveFormsModule
    ],
    templateUrl: './todo.component.html',
    styleUrl: './todo.component.css'
})
export class TodoComponent {
    public todo: Todo[] = [];

    public formGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required])
    });

    public formFilter = new FormGroup({
        name: new FormControl(''),
        showCompleted: new FormControl(false, { nonNullable: true })
    });

    public get filterTodo(): Todo[] {
        const name = this.formFilter.controls.name.value;
        const showCompleted = this.formFilter.controls.showCompleted.value;

        return this.todo.filter((todo: Todo) =>
            (!name || todo.name.toLowerCase().includes(name)) && (showCompleted == null || todo.completed === showCompleted)
        );
    }

    public onAdd(): void {
        const newTodo: Todo = {
            id: Date.now(),
            description: this.formGroup.controls.description.value!,
            completed: false,
            name: this.formGroup.controls.name.value!
        };
        this.todo.push(newTodo);
    }

    public toggleCompleted(todo: Todo): void {
        todo.completed = !todo.completed;
    }

    public onDelete(id: number): void {
        this.todo = this.todo.filter(todo => todo.id !== id);
    }
}
