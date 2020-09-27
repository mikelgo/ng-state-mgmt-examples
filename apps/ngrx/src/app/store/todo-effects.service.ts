import { Injectable } from '@angular/core';
import { DataService } from '@ng-state-mgmt-examples/shared';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { init, initFailed, initSuccess } from './actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class TodoEffects{

  constructor(private dataService: DataService, private actions$: Actions) { }

  todos$ = createEffect(() => this.actions$.pipe(
    ofType(init),
    tap(console.log),
    switchMap(_ => this.dataService.fetchTodos().pipe(
      map(todos => initSuccess({todos: todos})),
      catchError(() => EMPTY)
    ))
  ))
}
