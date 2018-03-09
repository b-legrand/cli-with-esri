import {APP_CONFIG, DEFAULT_APP_CONFIG} from './model/app.config';
import {NgModule} from '@angular/core';
import {AppStoreService} from './services/app-store.service';
import { MyComponentComponent } from './components/my-component/my-component.component';

@NgModule({
  declarations: [
    // ...
  MyComponentComponent],
  imports: [
    // ...
  ],
  providers: [
    AppStoreService,
    {
      provide: APP_CONFIG,
      useValue: DEFAULT_APP_CONFIG,
    },
  ]
})
export class CoreModule {
}
