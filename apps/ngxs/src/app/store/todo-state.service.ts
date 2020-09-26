import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { AddTodo, CompleteTodo, RemoveTodo } from './actions';
import { Todo } from '@ng-state-mgmt-examples/shared';


export interface TodoStateModel {
  todos: Todo[];
}
@State({
  name: 'todo',
  defaults: []
})
@Injectable({
  providedIn: 'root'
})
export class TodoStateService {
  @Action(AddTodo)
  add(ctx: StateContext<TodoStateModel>, action: AddTodo) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      todos: [
        ...state.todos,
        action.todo
      ]
    });
  }
  @Action(CompleteTodo)
  complete(ctx: StateContext<TodoStateModel>, action: CompleteTodo) {
    const state = ctx.getState();
    const updatedState = {...state};
    updatedState.todos.map(todo =>
      todo.id === action.todo.id ? { ...todo, completed: !todo.completed } : todo
    )
    ctx.setState({
      ...state,
      todos: [
        ...updatedState.todos
      ]
    })
  }

  @Action(RemoveTodo)
  remove(ctx: StateContext<TodoStateModel>, action: RemoveTodo) {
    const state = ctx.getState();
    const updatedState: Todo[] = [...state.todos];
    const indexToRemove = updatedState.indexOf(action.todo);
    updatedState.splice(indexToRemove, 1);

    ctx.setState({
      ...state,
      todos: [
        ...updatedState
      ]
    })
  }
  constructor() { }
}
