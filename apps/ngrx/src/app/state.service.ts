import { Injectable } from '@angular/core';
import {
  BaseStateService,
  DataService,
  Todo,
} from '@ng-state-mgmt-examples/shared';
import { Store } from '@ngrx/store';
import { TodoNgrxState } from './store/todo.reducer';
import { add, complete, remove } from './store/actions';

@Injectable({
  providedIn: 'root',
})
export class StateService extends BaseStateService {
  add(item: Todo) {
    this.store.dispatch(add(item));
  }

  complete(item: Todo) {
    this.store.dispatch(complete(item));
  }

  remove(item: Todo) {
    this.store.dispatch(remove(item));
  }

  constructor(
    private dataService: DataService,
    private store: Store<TodoNgrxState>
  ) {
    super();
    this.open$ = this.store.select((s) => {
      if (s.todos) {
        return s.todos.filter((e) => !e.completed);
      }
    });
    this.completed$ = this.store.select((s) => {
      if (s.todos) {
        return s.todos.filter((e) => e.completed);
      }
    });
  }
}
