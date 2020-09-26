import { Injectable } from '@angular/core';
import { IStateService, Todo } from '@ng-state-mgmt-examples/shared';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseStateService implements IStateService {
  constructor() {}

  completed$: Observable<Todo[]>;
  open$: Observable<Todo[]>;
  todos$: Observable<Todo[]>;

  abstract add(item: Todo);

  abstract complete(item: Todo);

  abstract remove(item: Todo);
}
