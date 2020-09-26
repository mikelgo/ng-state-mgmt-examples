import { Injectable } from '@angular/core';
import {
  BaseStateService,
  DataService,
  Todo,
} from '@ng-state-mgmt-examples/shared';
import { Observable } from 'rxjs';
import { Select, State, Store } from '@ngxs/store';
import { AddTodo, CompleteTodo, InitState, RemoveTodo } from './store/actions';
import { TodoStateService } from './store/todo-state.service';

@Injectable({
  providedIn: 'root',
})
export class StateService extends BaseStateService {
  @Select(TodoStateService.all)
  todos$: Observable<Todo[]>;
  @Select(TodoStateService.closed)
  completed$: Observable<Todo[]>;
  @Select(TodoStateService.open)
  open$: Observable<Todo[]>;

  constructor(private store: Store, private dataService: DataService) {
    super();
    this.dataService
      .fetchTodos()
      .subscribe((todos) => this.store.dispatch(new InitState(todos)));
    /*
    this.completed$ = this.store.select((s: TodoStateModel) => s.todos).pipe(
      filter(v => v !== undefined),
      map((i) => i.filter((v) => v.completed === true))
    )
    this.open$ = this.store.select((s: TodoStateModel) => s.todos).pipe(
      filter(v => v !== undefined),
      map((i) => i.filter((v) => v.completed === false))
    )
     */
  }

  add(item: Todo) {
    this.store.dispatch(new AddTodo(item)).subscribe(() => {
      console.log('ngxs: add todo dispatch finished');
    });
  }

  complete(item: Todo) {
    this.store.dispatch(new CompleteTodo(item));
  }

  remove(item: Todo) {
    this.store.dispatch(new RemoveTodo(item));
  }
}
