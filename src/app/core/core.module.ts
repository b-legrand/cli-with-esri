import { APP_CONFIG, DEFAULT_APP_CONFIG } from "./models/app.config";
import { NgModule } from "@angular/core";
import { AppStoreService } from "./services/app-store/app-store.service";

@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    // ...
  ],
  providers: [
    AppStoreService,
    {
      provide: APP_CONFIG,
      useValue: DEFAULT_APP_CONFIG,
    },
  ],
})
export class CoreModule {}
