import { Todo } from '@ng-state-mgmt-examples/shared';

export interface IStateService {
  add(item: Todo): void;
  remove(item: Todo): void;
  complete(item: Todo): void;
}
