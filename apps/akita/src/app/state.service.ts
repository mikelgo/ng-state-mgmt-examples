import { Injectable } from '@angular/core';
import {
  BaseStateService,
  DataService,
  Todo,
} from '@ng-state-mgmt-examples/shared';
import { TodoStore } from './store/todo.store';
import { TodoQuery } from './store/todo.query';

@Injectable({
  providedIn: 'root',
})
export class StateService extends BaseStateService {
  constructor(
    private store: TodoStore,
    private query: TodoQuery,
    private dataService: DataService
  ) {
    super();
    this.dataService
      .fetchTodos()
      .subscribe((todos) => this.store.update({ todos }));
    this.completed$ = this.query.closed;
    this.open$ = this.query.open$;
  }

  add(item: Todo) {
    this.store.update((state) => {
      state.todos.push(item);
    });
  }

  complete(item: Todo) {
    const currentState = [...this.store.getValue().todos];
    currentState.forEach((i) => {
      if (i.id === item.id) {
        i.completed = !i.completed;
      }
    });
    this.store.update({ todos: currentState });
  }

  remove(item: Todo) {
    const currentState = [...this.store.getValue().todos];
    const indexToRemove = currentState.indexOf(item);
    currentState.splice(indexToRemove, 1);
    this.store.update({ todos: currentState });
  }
}
