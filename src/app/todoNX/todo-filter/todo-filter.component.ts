import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';

@Component({
    selector: 'app-todo-filter',
    standalone: true,
    imports: [
        MatCard,
        MatButtonToggleGroup,
        MatButtonToggle
    ],
    templateUrl: './todo-filter.component.html',
    styleUrl: './todo-filter.component.css'
})
export class TodoFilterComponent {

    public onChange(value: string): void {

    }
}
