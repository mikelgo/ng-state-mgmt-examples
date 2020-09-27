import { createAction, props } from '@ngrx/store';
import { Todo } from '../../../../../libs/shared/src/lib/models';

export const add = createAction(
  '[Todo] add',
  props<{item: Todo}>()
);

export const complete = createAction(
  '[Todo] complete',
  props<{item: Todo}>()
);

export const remove = createAction(
  '[Todo] remove',
  props<{item: Todo}>()
);

export const init = createAction(
  '[Todo] init state'
);

export const initSuccess = createAction(
  '[Todo] init state success',
  props<{todos: Todo[]}>()
)

export const initFailed = createAction(
  '[Todo] init state failed',
  props<{errorMsg: string}>()
)
