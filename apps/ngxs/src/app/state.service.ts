import { Injectable } from '@angular/core';
import { BaseStateService, Todo } from '@ng-state-mgmt-examples/shared';
import { Observable } from 'rxjs';
import { State, Store } from '@ngxs/store';
import { AddTodo, CompleteTodo, RemoveTodo } from './store/actions';

@State<Todo[]>({
  name: 'todo',
  defaults: []
})
@Injectable({
  providedIn: 'root',
})
export class StateService extends BaseStateService {
  // TODO
  todos$: Observable<Todo[]>;
  completed$: Observable<Todo[]>;
  open$: Observable<Todo[]>;

  constructor(private store: Store) {
    super();
  }

  add(item: Todo) {
    this.store.dispatch(new AddTodo(item)).subscribe(() => {
      console.log('ngxs: add todo dispatch finished')
    });
  }

  complete(item: Todo) {
    this.store.dispatch(new CompleteTodo(item));
  }

  remove(item: Todo) {
    this.store.dispatch(new RemoveTodo(item));
  }
}
