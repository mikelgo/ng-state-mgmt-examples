import { Injectable } from '@angular/core';
import { defer, Observable, of } from 'rxjs';
import { Todo } from '@ng-state-mgmt-examples/shared';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  public fetchTodos(): Observable<Todo[]> {
    return defer(() => of([
      {id: 'asdf', completed: false, task: 'some task'},
      {id: 'asdfv', completed: false, task: 'some task'},
      {id: 'vasfdf', completed: false, task: 'some task'},
      {id: 'werfasdf', completed: false, task: 'some task'},
      {id: 'sadfavc', completed: true, task: 'some task'}
    ]).pipe(delay(500)))
  }
}
