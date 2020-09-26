import { CrudComponent } from './crud-component';
import { BaseStateService, Todo } from '@ng-state-mgmt-examples/shared';
import { IStateService } from './i-state-service';

export abstract class BaseCrudComponent implements CrudComponent {
  constructor(private stateService: BaseStateService) {}
  onAdd(item: Todo): void {
    this.stateService.add(item);
  }

  onComplete(item: Todo): void {
    this.stateService.complete(item);
  }

  onDelete(item: Todo): void {
    this.stateService.remove(item);
  }
}
