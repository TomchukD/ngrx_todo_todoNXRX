import { Todo } from 'src/app/shareds/todo.interface';
import { createReducer, on } from '@ngrx/store';
import { addTodo, filterTodo, removeTodo, toggleTodo } from 'src/app/todoNX/store/action';


export interface TodoState {
    todos: Todo[];
    filter: string;
}

const initialState: TodoState = {
    filter: 'all',
    todos: []
};

export const todoReducer = createReducer(
    initialState,
    on(addTodo, (state, payload) => {
        return {
            ...state,
            todos: [...state.todos, payload]
        };
    }),
    on(removeTodo, (state, { id }) => {
        return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== id)
        };
    }),
    on(toggleTodo, (state, { id }) => {
        return {
            ...state,
            todos: state.todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
        };
    }),
    on(filterTodo, (state, { filter }) => {
        return state;
    })
);