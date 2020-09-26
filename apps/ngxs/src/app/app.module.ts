import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment';
import { SharedModule } from '@ng-state-mgmt-examples/shared';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    NgxsModule.forRoot([], {
      developmentMode: !environment.production
    }),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
