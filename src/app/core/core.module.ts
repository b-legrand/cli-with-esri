import {APP_CONFIG, DEFAULT_APP_CONFIG} from './model/app.config';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    // ...
  ],
  providers: [{
    provide: APP_CONFIG,
    useValue: DEFAULT_APP_CONFIG
  }]
})
export class CoreModule { }
