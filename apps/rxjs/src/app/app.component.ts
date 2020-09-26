import { Component, OnInit } from '@angular/core';
import { StateService } from './services/state.service';
import { Observable } from 'rxjs';
import { Todo } from '@ng-state-mgmt-examples/shared';

@Component({
  selector: 'ng-state-mgmt-examples-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'rxjs';
  public todos$: Observable<Todo[]>;
  public openTodos$: Observable<Todo[]>;
  public completedTodos$: Observable<Todo[]>;
  constructor(private stateService: StateService) {}
  ngOnInit() {
    this.todos$ = this.stateService.todos$;
    this.openTodos$ = this.stateService.open$;
    this.completedTodos$ = this.stateService.completed$;
  }

  onAdd(item: Todo) {
    console.log(item);
    this.stateService.add(item);
  }

  onComplete(item: Todo) {
    this.stateService.complete(item);
  }

  onDelete(item: Todo) {
    this.stateService.remove(item);
  }
}
