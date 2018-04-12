import { Component, Inject } from "@angular/core";
import { APP_CONFIG, AppConfig } from "./core/model/app.config";
import { AppState } from "./core/model/app.state";
import { Store } from "@ngrx/store";
import "rxjs/add/operator/take";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title: string;
  themeColor: string;
  state: AppState;

  constructor(
    @Inject(APP_CONFIG) appConfig: AppConfig,
    private store: Store<any>,
  ) {
    this.themeColor = appConfig.themeColor;
    this.title = appConfig.appName;
    this.store.take(1).subscribe(s => (this.state = s));
  }
}
