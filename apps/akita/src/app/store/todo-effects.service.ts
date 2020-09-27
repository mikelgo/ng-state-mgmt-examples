import { Injectable } from '@angular/core';
import { DataService } from '@ng-state-mgmt-examples/shared';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { initialState } from '../../../../ngrx/src/app/store/todo.reducer';

@Injectable()
export class TodoEffects {

  constructor(private dataService: DataService,private actions$: Actions) { }

  todos$ = createEffect(() => {
    this.actions$.pipe(
      ofType(initialState)
    )
  })
}
