import { Component, OnInit } from '@angular/core';
import { StateService } from './services/state.service';

@Component({
  selector: 'ng-state-mgmt-examples-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'rxjs';
  constructor(private stateService: StateService) {
  }
  ngOnInit() {
    console.log('hallo rxjs')
    this.stateService.todos$.subscribe(console.log)
  }
}
