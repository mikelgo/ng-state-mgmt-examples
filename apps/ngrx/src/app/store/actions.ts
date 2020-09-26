import { createAction, props } from '@ngrx/store';
import { Todo } from '../../../../../libs/shared/src/lib/models';

export const add = createAction(
  '[Todo] add',
  props<Todo>()
);

export const complete = createAction(
  '[Todo] complete',
  props<Todo>()
);

export const remove = createAction(
  '[Todo] remove',
  props<Todo>()
);

export const init = createAction(
  '[Todo] init state',
  props<Todo>()
);
