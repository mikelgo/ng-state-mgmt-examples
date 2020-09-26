import { Todo } from '@ng-state-mgmt-examples/shared';

export interface CrudComponent {
  onAdd(item: Todo): void;
  onComplete(item: Todo): void;
  onDelete(item: Todo): void;
}
