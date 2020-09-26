import { Component, OnInit } from '@angular/core';
import { StateService } from './services/state.service';
import { Observable } from 'rxjs';
import { BaseCrudComponent, Todo } from '@ng-state-mgmt-examples/shared';

@Component({
  selector: 'ng-state-mgmt-examples-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseCrudComponent implements OnInit {
  title = 'rxjs';
  public todos$: Observable<Todo[]>;
  public openTodos$: Observable<Todo[]>;
  public completedTodos$: Observable<Todo[]>;
  constructor(private stateService: StateService ) {
    super(stateService);
  }
  ngOnInit() {
    this.todos$ = this.stateService.todos$;
    this.openTodos$ = this.stateService.open$;
    this.completedTodos$ = this.stateService.completed$;
  }

}
