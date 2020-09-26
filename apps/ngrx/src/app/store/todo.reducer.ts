import { Action, createReducer, on } from '@ngrx/store';

import { Todo } from '../../../../../libs/shared/src/lib/models';
import { add, complete, remove } from './actions';

export interface TodoNgrxState {
  todos: Todo[];
}
export const initialState: TodoNgrxState = {
  todos: [
    {id: '', completed: true, task: 'adsf'}
  ],
};

const todoReducer = createReducer(
  initialState,
  on(add, (state, payload) => ({
    ...state,
    todos: [...state.todos, payload],
  })),
  on(remove, (state, payload) => {
    const currrentState = [...state.todos];
    const indexToRemove = currrentState.indexOf(payload);
    currrentState.splice(indexToRemove, 1);
    return {
      ...state,
      todos: [...currrentState],
    };
  }),
  on(complete, (state, payload) => {
    const currrentState = [...state.todos];
    currrentState.forEach((i) => {
      if (i.id === payload.id) {
        i.completed = !i.completed;
      }
    });
    return {
      ...state,
      todos: [...currrentState],
    };
  })
);

export function reducer(state: TodoNgrxState | undefined, action: Action) {
  return todoReducer(state, action);
}
