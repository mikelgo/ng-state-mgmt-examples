import { Injectable } from '@angular/core';
import { BaseStateService, Todo } from '@ng-state-mgmt-examples/shared';

@Injectable({
  providedIn: 'root',
})
export class StateService extends BaseStateService {
  add(item: Todo) {}

  complete(item: Todo) {}

  remove(item: Todo) {}

  constructor() {
    super();
  }
}
