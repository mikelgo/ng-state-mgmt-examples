import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from '@ng-state-mgmt-examples/shared';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
