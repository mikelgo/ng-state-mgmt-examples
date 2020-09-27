import { TestBed } from '@angular/core/testing';

import { TodoEffectsService } from './todo-effects.service';

describe('TodoEffectsService', () => {
  let service: TodoEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
