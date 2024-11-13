import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/shareds/todo.interface';

export enum todoActions {
    ADD = '[Todo] Add Todo',
    DELETE = '[Todo] Delete Todo',
    TOGGLE = '[Todo] Toggle Todo',
    FILTER = '[Todo] Filter Todo'
}

export const addTodo = createAction(todoActions.ADD, props<Todo>());
export const removeTodo = createAction(todoActions.DELETE, props<{ id: number }>());
export const toggleTodo = createAction(todoActions.TOGGLE, props<{ id: number }>());
export const filterTodo = createAction(todoActions.FILTER, props<{ filter: string }>());