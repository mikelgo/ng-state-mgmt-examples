import { createSelector } from '@ngrx/store';
import { TodoNgrxState } from './todo.reducer';
export const selectFeature = (state: TodoNgrxState) => state.todos;


// TODO look at this again somehow still .todos has to be made
export const selectTodos = createSelector(
  selectFeature,
  s => s
);

export const selectOpen = createSelector(
  selectFeature,
  s => s.todos.filter(t => !t.completed)
)

export const selectClosed = createSelector(
  selectFeature,
  s => s.todos.filter(t => t.completed)
)
