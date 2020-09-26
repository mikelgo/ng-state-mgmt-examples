import { Todo } from '../../../../../libs/shared/src/lib/models';
import { Store, StoreConfig } from '@datorama/akita';
import { Inject, Injectable } from '@angular/core';

export interface AktiaTodoState {
  todos: Todo[];
}

export function createInitialState(): AktiaTodoState {
  return {
    todos: [],
  };
}

@StoreConfig({ name: 'todos' })
@Injectable({
  providedIn: 'root',
})
export class TodoStore extends Store<AktiaTodoState> {
  constructor() {
    super(createInitialState());
  }
}
