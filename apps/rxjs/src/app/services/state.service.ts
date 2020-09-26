import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataService, Todo } from '@ng-state-mgmt-examples/shared';
import { concatAll, filter, shareReplay, switchMap, tap, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private stateSubject = new BehaviorSubject<Todo[]>([]);
  public todos$: Observable<Todo[]> = this.dataService.fetchTodos().pipe(
    tap(todos => this.stateSubject.next(todos)),
    switchMap(_ => this.stateSubject.asObservable().pipe(
      shareReplay({ bufferSize: 1, refCount: true })
    ))
  )

  public completed$: Observable<Todo[]> = this.todos$.pipe(
    concatAll(),
    filter((v) => v.completed),
    toArray()
  );
  public open$: Observable<Todo[]> = this.todos$.pipe(
    concatAll(),
    filter((v) => !v.completed),
    toArray()
  );

  constructor(private dataService: DataService) {}
}
