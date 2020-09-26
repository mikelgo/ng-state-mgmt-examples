import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from '@ng-state-mgmt-examples/shared';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/todo.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, StoreModule.forRoot({ todo: reducer})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
