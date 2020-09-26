import { Injectable } from '@angular/core';
import {
  BaseStateService,
  DataService,
  Todo,
} from '@ng-state-mgmt-examples/shared';
import { Store } from '@ngrx/store';
import { TodoNgrxState } from './store/todo.reducer';
import { add, complete, remove } from './store/actions';
import { tap } from 'rxjs/operators';
import { selectClosed, selectOpen, selectTodos } from './store/todo.selectors';

@Injectable({
  providedIn: 'root',
})
export class StateService extends BaseStateService {
  // TODO remove and complete does not work --> throws error
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
    this.todos$ = this.store.select(selectTodos);
    this.todos$.subscribe(console.log)
    this.open$ = this.store.select(selectOpen)
    this.completed$= this.store.select(selectClosed)
  }
}
