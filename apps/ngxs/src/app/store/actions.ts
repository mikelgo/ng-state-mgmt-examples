import { Todo } from '../../../../../libs/shared/src/lib/models';

export class AddTodo {
  static readonly type = '[Todo] Add todo';
  constructor(public todo: Todo) {}
}

export class CompleteTodo {
  static readonly type = '[Todo] complete todo';
  constructor(public todo: Todo) {}
}

export class RemoveTodo {
  static readonly type = '[Todo] Remove todo';
  constructor(public todo: Todo) {}
}

export class InitState {
  static readonly type = '[Todo] Init todo state';
  constructor(public todos: Todo[]) {}
}
