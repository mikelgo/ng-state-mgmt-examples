import { Component } from '@angular/core';
import { BaseCrudComponent } from '@ng-state-mgmt-examples/shared';
import { StateService } from './state.service';


@Component({
  selector: 'ng-state-mgmt-examples-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseCrudComponent {
  title = 'akita';

  constructor(public stateService: StateService) {
    // TODO
    super(stateService);
  }
}
