import { Component } from '@angular/core';
import { TodoCreateComponent } from 'src/app/todoNX/todo-create/todo-create.component';
import { TodoFilterComponent } from 'src/app/todoNX/todo-filter/todo-filter.component';
import { TodoListsComponent } from 'src/app/todoNX/todo-lists/todo-lists.component';

@Component({
    selector: 'app-todo-nx',
    standalone: true,
    imports: [
        TodoCreateComponent,
        TodoFilterComponent,
        TodoListsComponent
    ],
    templateUrl: './todo-nx.component.html',
    styleUrl: './todo-nx.component.css'
})
export class TodoNXComponent {

}
