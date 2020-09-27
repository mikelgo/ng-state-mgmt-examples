import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from '@ng-state-mgmt-examples/shared';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/todo.reducer';
import { TodoEffects } from './store/todo-effects.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ todos: reducer }),
    EffectsModule.forRoot([TodoEffects, ]),
    SharedModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
