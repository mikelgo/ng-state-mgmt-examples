import { Injectable } from '@angular/core';
import { IStateService, Todo } from '@ng-state-mgmt-examples/shared';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseStateService implements IStateService {
  constructor() {}

  abstract add(item: Todo);

  abstract complete(item: Todo);

  abstract remove(item: Todo);
}
