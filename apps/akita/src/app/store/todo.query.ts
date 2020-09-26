import { AktiaTodoState, TodoStore } from './todo.store';
import { Query } from '@datorama/akita';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoQuery extends Query<AktiaTodoState> {
  constructor(protected store: TodoStore) {
    super(store);
  }

  todos$ = this.select(s => s.todos);
  open$ = this.select(s => s.todos.filter(t => !t.completed))
  closed = this.select(s => s.todos.filter(t => t.completed))
}
