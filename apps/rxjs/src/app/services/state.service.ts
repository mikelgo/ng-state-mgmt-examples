import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataService, Todo } from '@ng-state-mgmt-examples/shared';
import {
  concatAll,
  filter,
  map,
  shareReplay,
  switchMap,
  tap,
  toArray,
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private stateSubject = new BehaviorSubject<Todo[]>([]);
  public todos$: Observable<Todo[]> = this.dataService.fetchTodos().pipe(
    tap((todos) => this.stateSubject.next(todos)),
    switchMap((_) =>
      this.stateSubject
        .asObservable()
        .pipe(shareReplay({ bufferSize: 1, refCount: true }))
    )
  );

  public completed$: Observable<Todo[]> = this.todos$.pipe(
    map((i) => i.filter((v) => v.completed === true))
  );
  public open$: Observable<Todo[]> = this.todos$.pipe(
    map((i) => i.filter((v) => v.completed === false))
  );

  public add(item: Todo) {
    const currrentState = [...this.stateSubject.getValue()];
    currrentState.push(item);
    this.stateSubject.next(currrentState);
  }
  public remove(item: Todo) {
    const currrentState = [...this.stateSubject.getValue()];
    const indexToRemove = currrentState.indexOf(item);
    currrentState.splice(indexToRemove, 1);
    this.stateSubject.next(currrentState);
  }
  public complete(item: Todo) {
    const currrentState = [...this.stateSubject.getValue()];
    currrentState.forEach((i) => {
      if (i.id === item.id) {
        i.completed = !i.completed;
      }
    });
    this.stateSubject.next(currrentState);
  }

  constructor(private dataService: DataService) {}
}
