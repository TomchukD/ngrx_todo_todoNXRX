import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from 'src/app/todoNX/store/reducer';

const selectFeatureTodos = createFeatureSelector<TodoState>('todo');

export const selectTodos = createSelector(selectFeatureTodos, (state) => {
    return state.todos;
});