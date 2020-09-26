import { Injectable } from '@angular/core';
import { BaseStateService, Todo } from '@ng-state-mgmt-examples/shared';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService extends BaseStateService{
  // TODO
  todos$: Observable<Todo[]>;
  completed$: Observable<Todo[]>;
  open$: Observable<Todo[]>;

  constructor() {
    super();
  }

  add(item: Todo) {
  }

  complete(item: Todo) {
  }

  remove(item: Todo) {
  }
}
