import { Todo } from '@ng-state-mgmt-examples/shared';
import { Observable } from 'rxjs';

export interface IStateService {
  todos$: Observable<Todo[]>;
  completed$: Observable<Todo[]>
  open$: Observable<Todo[]>
  add(item: Todo): void;
  remove(item: Todo): void;
  complete(item: Todo): void;
}
